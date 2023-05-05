<script lang="ts">
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';
    import { animateTetxOnEl } from './textAnim';

    // making sure tailwind includes: text-gray-500 text-zinc-500 text-neutral-500 text-stone-500 text-red-500 text-orange-500 text-amber-500 text-yellow-500 text-lime-500 text-green-500 text-emerald-500 text-teal-500 text-cyan-500 text-sky-500 text-blue-500 text-indigo-500 text-violet-500 text-purple-500 text-fuchsia-500 text-pink-500 text-rose-500

    export let dialogue: string | undefined;
    export let nextQuestion: () => Promise<void>;



    let alternatives: string[] = [
        "That's interesting. %1.3%<i><yellow>Very>> interesting...",
        "Yeah, <yellow>that sounds about right.<yellow>",
        "Pfff, <i>sure>. You and everyone else...",
    ]

    let dialogueBox: HTMLDivElement;
    let showSpacePrompt = false;

    interface Pause { kind: "pause"; length: number; }
    interface Text { kind: "text"; text: string; }
    interface Color { kind: "color"; color: string; }
    interface Format { kind: "format"; style: string; }
    interface Speed { kind: "speed"; modifier: number; }
    interface EndFormat { kind: "end-format"; } 
    interface ShowPormpt { kind: "show-prompt"; }
    type Event = Pause | Text | Color | Format | EndFormat | Speed | ShowPormpt 

    export async function doAnimation() {
        showSpacePrompt = false;
        await animateTetxOnEl(dialogueBox, dialogue ? dialogue : alternatives[Math.floor(Math.random() * alternatives.length)], createSpacePrompt);
        await new Promise(r=>document.addEventListener('keypress', r));
    }

    function createSpacePrompt() {
        showSpacePrompt = true;
        document.addEventListener("keypress", removeSpacePrompt);
    }

    function removeSpacePrompt(e: any) {
        if (e.key == " ") {
            document.removeEventListener("keypress", removeSpacePrompt);

            showSpacePrompt = false;
            nextQuestion();
        }
    }
</script>

<div class="relative w-full w-full bg-slate-950 select-none">
    <div class="w-full h-full font-droid rounded-md text-emerald-500 p-4 text-xl" bind:this={dialogueBox}> </div>
    {#if showSpacePrompt}
        <div in:fly="{{ y: 50, opacity: 0 }}" class="absolute bottom-4 w-full text-center text-white">Press Space to continue</div>
    {/if}
</div>
