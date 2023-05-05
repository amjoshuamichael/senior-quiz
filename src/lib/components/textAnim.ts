interface Pause { kind: "pause"; length: number; }
interface Text { kind: "text"; text: string; }
interface Color { kind: "color"; color: string; }
interface Format { kind: "format"; style: string; }
interface Speed { kind: "speed"; modifier: number; }
interface EndFormat { kind: "end-format"; } 
interface ShowPormpt { kind: "show-prompt"; }
type Event = Pause | Text | Color | Format | EndFormat | Speed | ShowPormpt 

function quoteToEvents(quote: string): Event[] {
    let events: Event[] = [
        {
            kind: "pause",
            length: 400,
        },
    ];
    let dialogueSpeed = 20;

    // iterate over chars in string

    for (let i = 0; i < quote.length; i++) {
        const chr = quote[i];

        if (chr == "<") {
            let formatNameBeginning = i;
            while (quote[i] != ">") { i++; }
            let formatNameEnd = i;
            let formatName = quote.slice(formatNameBeginning + 1, formatNameEnd);
            
            switch(formatName) {
                case "b": events.push({kind: "format", style: "bold"}); break;
                case "i": events.push({kind: "format", style: "italic"}); break;
                case "u": events.push({kind: "format", style: "underline"}); break;
                default: events.push({kind: "color", color: formatName}); break;
            }
        } else if (chr == ">") {
            events.push({
                kind: "end-format",
            });
        } else if (chr == "%") {
            let speedBeginning = i++;
            while (quote[i] != "%") { i++; }
            let speedEnd = i;
            let speed = quote.slice(speedBeginning + 1, speedEnd);

            events.push({
                kind: "speed",
                modifier: +speed,
            })
        } else if (chr == "^") {
            // remove last event with the kind 'text'

            for (let i = events.length - 1; i >= 0; i--) {
                if (events[i].kind == "text") {
                    events.splice(i, 1);
                    break;
                }
            }
        } else if (chr == "\n") {
            events.push({
                kind: "break",
            });

            events.push({
                kind: "pause",
                length: 200,
            });
        } else {
            events.push({
                kind: "text",
                text: chr,
            });

            events.push({
                kind: "pause",
                length: dialogueSpeed,
            });

            if ("?.,/".includes(chr)) {
                let pauseLength = chr == "/" ? 500
                    : chr == "?" ? 450
                    : chr == "." ? 400
                    : 200

                events.push({
                    kind: "pause",
                    length: pauseLength,
                });
            }
        }
    }

    events.splice(events.length - 6, 0, {
        kind: "show-prompt"
    });

    return events
}

export async function animateTetxOnEl(
    textBox: HTMLDivElement, 
    quote: string, 
    finishCallback: () => void,
) {
    let doPauses = true;
    document.addEventListener("keypress", (e) => {
        if (e.key == "å") {
            doPauses = !doPauses;
        }
    });

    let endingTags: string[] = [];
    let buildingText = "";
    let events = quoteToEvents(quote);
    let speedModifier = 1;

    for (const event of events) {
        switch (event.kind) {
            case "color":
                buildingText += `<span class="text-${event.color}-500">`;
                endingTags.push("</span>");
                break;
            case "format":
                buildingText += `<span class="${event.style}">`;
                endingTags.push("</span>");
                break;
            case "speed":
                speedModifier = event.modifier;
                break;
            case "pause":
                if (doPauses) {
                    await new Promise((r) => setTimeout(r, event.length * speedModifier));
                }
                break;
            case "text":
                buildingText += event.text;
                break;
            case "end-format":
                buildingText += endingTags.pop();
                break;
            case "show-prompt":
                finishCallback()
                break;
            case "break":
                buildingText += "<br>";
                break;
            default:
                break;
        }

        if (textBox == null) {
            return;
        }

        textBox.innerHTML = buildingText + endingTags.join("");
    }
}
