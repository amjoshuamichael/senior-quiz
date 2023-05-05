export enum QuestionType { Choice, PhotoCaption }
export enum Student { Abel, Ian, Josh, Luca, Kate, Malia, Mallika, Sandeep, John }

export class Answer {
    val: string;
    student: Student[];
    dialogue?: string;
}

export class Question {
    text: string;
    answers: Answer[];
    type: QuestionType;
}

export const startingDialogue = [
    "Sorry I kept you waiting. We've been really busy this AM.",
    "You probably know what's about to happen, but I'm still going to tell you. Partially because I have to, partially because <yellow>I want to>.",
    "I'm going to ask you a series of questions.",
    "Your job is to answer truthfully.",
    "At the end of this test, we will use your answers to determine your <red>alignment>.",
    "Ahh, are the lights still off? Here, let me turn those on for you.",
]

export const lightOnDialogue = [
    "There we go.",
    "Sorry, the lights are a little flickery. They've been doing that since <yellow>'09>.",
]

export const questions: Question[] = [
    {
        text: "What's the coolest thing you can do?",
        answers: [
            { val: "I can Checkmate someone in two moves", student: [Student.Sandeep], dialogue: "That's what you think is <yellow><i>Cool?>> No no, to each their own, that's what this test is for..." },
            { val: "I can Bench 315 pounds", student: [Student.Ian], dialogue: "Yeah, I don't believe you at all. In fact, I'm pretty sure the test designers added that option in order to find <yellow>Liars> and <yellow>Cheaters>. But hey, answer the questions in %2%<i>whatever way you '%4%feel' %2%like."},
            { val: "I can sing okay", student: [Student.Kate], dialogue: "Really, let me hear!.^.^ That was a joke. I don't want to <i>hear> you do anything. Let's continue the exam." },
            { val: "I can backflip... Jk I can't", student: [Student.Josh], dialogue: "<i>Haha>, that's very funny... <i>Jk, it's not!>" },
            { val: "I don't know", student: [Student.Malia, Student.Mallika, Student.Abel], dialogue: "Yeah, just judging by the way you look, %1.2%<i>you can't do very much at all>."},
            { val: "Cool is subjective, you know? Because some things that some people think are cool aren't things that other people think are cool", student: [Student.Luca], dialogue: "Geez, can you <b>BE> more lame? This just <yellow>WREAKS> of <red>Luca>."}
        ],
        type: QuestionType.Choice,
    },
    {
        text: "Would you rather trade your intelligence for looks or looks for intelligence?",
        answers: [
            { val: "Intelligence for looks", student: [Student.Malia, Student.Luca, Student.Ian, Student.Josh], dialogue: "Yeah, looking at you? %2%You're really going to need it." },
            { val: "Looks for intelligence", student: [Student.Sandeep], dialogue: "Yeah, looking at you? %2%You're really going to need it.",},
            { val: "I have both already!", student: [Student.Mallika, Student.Abel, Student.Kate], dialogue: "Wow, the computer just made a <yellow>SUPER> loud noise... that answer has pushed you .^<i>hard>.^ into the <red>Mallika>, <red>Abel>, and <red>Kate> categories. <i><yellow>I'll leave you to decide whether that's a good thing or not.>>" },
        ],
        type: QuestionType.Choice,
    },
    {
        text: "Without using your real name, what would your Xbox Gamertag be?",
        answers: [
            { val: "MattSternioloLover123", student: [Student.Mallika], dialgoue: "Oh my gosh! The computer just added a new kind of person to the list, you're officially the first member of the ninth personality type: Loser! You're the world's first loser! I'm kidding of course, you're just closer to being a <yellow>Mallika>" },
            { val: "ChunkiestBoom", student: [Student.Luca], dialgoue: "That's what I answered my first time. Now, I'm in this <yellow>horrible> job. But, yeah, <i>great answer...>" },
            { val: "Lemon", student: [Student.Kate], dialogue: "You seem like <yellow>you would get bullied on Xbox>. You seem like .^<yellow>I.^ would bully you on Xbox>." },
            { val: "Monkeyman34", student: [Student.Abel], diagloue: "That's what I answered my first time. Now, I'm in this <yellow>horrible> job. But, yeah, <i>great answer...>" },
            { val: "TSM Jordi", student: [Student.Ian], dialogue: "I'm going to assume TSM stands for 'The.^ Stupid.^ Moron.'" },
            { val: "CantTouchThis1", student: [Student.Sandeep], dialogue: "Looking at you, I'm not sure I want to touch... any of that." },
            { val: "bigBigBIGsmall", student: [Student.Josh], dialogue: "Yeah, no, I think you're <yellow>just small>." },
            { val: "Aaron Joshuamichael Cruz", student: [Student.Malia], dialogue: "Ah yes, the classic impersonation trick. Your alignment has now moved towards the <red>Malia> category, you sly dog." },
        ],
        type: QuestionType.Choice,
    },
    {
        text: "What Taylor Swift song best describes your life?",
        answers: [
            { val: "Dark horse", student: [Student.Sandeep], dialogue: "That's <yellow>Katy Perry>. Can't take it back now, though. You're just going to have to be a <yellow>Dark horse>..."},
            { val: "I don't like Taylor Swift", student: [Student.Luca, Student.Abel, Student.Ian, Student.Kate], dialogue: "...%2%And ,^%0.1%SHE%1%.^ doesn't like you!.^ %2%<yellow>#whyyougottabesomean>"},
            { val: "Shape of you", student: [Student.Malia], dialogue: ".^.^.^.^Sorry, I was just laughing at this thing the computer told me. It definitely wasn't about how <yellow>stupid> that answer was. Definitely not." },
            { val: "Style", student: [Student.Mallika], dialogue: "Dude same here!.^.^ NOT!.^ When I took this test at your age, I answered .^'ME!'.^ beacuse it's <yellow>obviously> the answer that makes the most sense." },
            { val: "Lover", student: [Student.Josh], dialogue: "Ugh. Just... just go to the next question." },
        ],
        type: QuestionType.Choice,
    },
    {
        text: "On a scale of 1-8, how mean are you?",
        answers: [
            { val: "8", student: [Student.Kate], dialogue: "I can relate to that. People like to say that I'm mean, and, I am." },
            { val: "7", student: [Student.Abel], dialogue: "Really? I haven't seen any of that here. Maybe you left all your mean at the door, along with your good looks and charm." },
            { val: "6", student: [Student.Luca], dialogue: "Really? I haven't seen any of that here. Maybe you left all your mean at the door, along with your good looks and charm." },
            { val: "5", student: [Student.Ian], dialogue: "Dead in the middle. This is typically a thing students say when they are indecisive.^.^, and <yellow>stupid.^.^, and... dumb." }, 
            { val: "4", student: [Student.Josh], dialogue: "Dead in the middle. This is typically a thing students say when they are indecisive.^.^, and <yellow>stupid.^.^, and... dumb." },
            { val: "3", student: [Student.Mallika], dialogue: "Really? Have you seen yourself? You haven't said one nice thing this entire time. You've just answered these questions. Frankly, I'm starting to think you don't like me." },
            { val: "2", student: [Student.Malia], dialogue: "Really? Have you seen yourself? You haven't said one nice thing this entire time. You've just answered these questions. Frankly, I'm starting to think you don't like me." },
            { val: "1", student: [Student.Sandeep], dialogue: "Yeah, I knew you were a <red>Sandeep> the moment you walked in." },
        ],
        type: QuestionType.Choice,
    },
    {
        text: "How many jumpjng jacks could you do in a row?",
        answers: [
            { val: "32", student: [Student.Malia], dialogue: "Pathetic. That's less jumping jacks than there are United States." },
            { val: "80", student: [Student.Kate], dialogue: "Yeah, looking at you, <yellow>that sounds about right.>" },
            { val: "300", student: [Student.Josh], dialogue: "Frankly, that's still pretty bad." },
            { val: "500", student: [Student.Luca, Student.Ian], dialogue: "Frankly, that's way too much. There's no way you can really do <yellow>500> Jacks. You look like you could maybe do <yellow>50>." },
            { val: "1700", student: [Student.Sandeep], dialogue: "Alright, but next time, answer truthfully." },
            { val: "2000", student: [Student.Abel], dialogue: "Alright, but next time, answer truthfully." },
            { val: "More than Josh", student: [Student.Mallika], dialogue: "Yeah, I knew you were a <red>Mallika> the moment you walked into this room." },
        ],
        type: QuestionType.Choice,
    },
    {
        text: "Favorite Emoji?",
        answers: [
            { val: "🛑", student: [Student.Mallika], dialogue: "👎" },
            { val: "🙂", student: [Student.Sandeep], dialogue: "😡" },
            { val: "🧍‍♂️", student: [Student.Malia], dialogue: "I mean, I guess that makes sense. <i><yellow>I was looking for something more creative, but whatever...>>" },
            { val: "😩", student: [Student.Abel], dialogue: "🙄" },
            { val: "😛", student: [Student.Luca], dialgoue: "Says here on my <yellow>Computer> that that's the <yellow>strongest> answer of the bunch. You're really close to being a <red>Luca> I'll give you a moment to handle that news. .^.^.^.^" },
            { val: "🥰", student: [Student.Ian], dialogue: "🤢" },
            { val: "🥲", student: [Student.Kate], dialogue: "🤭" },
            { val: "😳", student: [Student.Josh], dialogue: "😐" },
        ],
        type: QuestionType.Choice,
    },

    {
        text: "disney.jpg",
        answers: [
            { val: "Fire works like my money. it grows exponentially", student: [Student.Sandeep], dialogue: "Yes, mmhmm, according to this <yellow>computer reading> here, that's the <green>correct answer>! .^.^ NOT!.^ You've now been pushed into the <red>Sandeep> zone. That's unfortunate. I was really rooting for you..." },
            { val: "Me when your mom", student: [Student.Malia, Student.Kate], dialogue: "According to this <yellow>computer reading> here, that's the <green>funniest answer>! .^.^ NOT!.^ That answer sucks. You've now been pushed into the <red>Malia> and <red>Kate> zones. That's unfortunate. I was really rooting for you..." },
            { val: "The world is going to end", student: [Student.Abel], dialogue: "Yes, mmhmm, according to this <yellow>computer reading> here, that answer is .^.^ <green>really stupid>! .^.^ You've now been pushed into the <red>Abel> zone. That's unfortunate. I was really rooting for you..." },
            { val: "I would not put this picture on my instagram", student: [Student.Mallika, Student.Luca], dialogue: "Yes, mmhmm, according to this <yellow>computer reading> here, your answers align dead on with the <red>Mallika> and <red>Luca> zones. That's unfortunate. I was really rooting for you..." },
            { val: "disneyLand 🏰🐭✨", student: [Student.Ian], dialogue: "Yes, mmhmm, according to this <yellow>computer reading> here, that answer is .^.^ <green>the best one>! .^.^ NOT! .^ You've now been pushed into the <red>Ian> zone. That's unfortunate. I was really rooting for you..." },
            { val: "Fun trip at disney! splash mountin", student: [Student.Josh], dialogue: "Yes, mmhmm, according to this <yellow>computer reading> here, that answer is .^.^ <green>the best one>! .^.^ NOT!.^ I mean, did you really believe me? You didn't even spell <yellow>mountain> correctly..^ You've now been pushed into the <red>Josh> zone. That's unfortunate. I was really rooting for you..." },
        ],
        type: QuestionType.PhotoCaption,
    },
    {
        text: "A train is barreling down the tracks towards five construction workers, and if you switch the track you can divert it to hit five babies. What do you do?",
        answers: [
            { val: "Divert", student: [Student.Sandeep, Student.Luca, Student.Abel, Student.Ian], dialogue: "Wow, you answered that a lot faster than I thought you would. You just want to <yellow>Kill.^ babies>?" },
            { val: "Don't Divert", student: [Student.Malia, Student.Mallika, Student.Josh, Student.Kate], dialogue: "Yeah, that doesn't surprise me, you seem like the kind of guy to do <yellow>nothing>. Me personally? I would simply <yellow>tell the construction workers to move out of the way>. Yeah, bet you didn't think of that, huh?" },
        ],
        type: QuestionType.Choice,
    },
    {
        text: "How much?",
        answers: [
            { val: "20", student: [Student.Abel] },
            { val: "21", student: [Student.Sandeep] },
            { val: "10000", student: [Student.Ian], dialogue: "That seems like a little bit too much." },
            { val: "3000000000", student: [Student.Josh], dialogue: "Now that's just ridiculous. Computer says here that people who choose the highest numbers are aligned heavily with the <red>Josh> category. I'm sure that's not what you were looking for, but that's <b>okay.>" },
            { val: "Many", student: [Student.Kate, Student.Malia], dialogue: "Originally, if any test takers answered this, I would have to ask the follow up question:,^ '<yellow>how many?>' Those were the instructions, but unfortunately, these <yellow>stubborn test takers> would just answer.^.^ '%2%<yellow>much!>%1%'.^ As you can imagine, these <yellow>no-good fools> are typically aligned with <red>Kate> and <red>Malia>, just like you." },
            { val: "Well, for you, free.", student: [Student.Luca], dialogue: "😳" },
            { val: "...How much what?", student: [Student.Mallika], dialogue: "Oh, %4%<i>wooooow>%1%, we've got a smarty pants over here. 'how much what?' 'how much what?' It's not that complicated of a question to answer." },
        ],
        type: QuestionType.Choice,
    },
    {
        text: "Which senior do you think is closest to your intelligence?",
        answers: [
            { val: "Josh", student: [Student.Sandeep], dialogue: "Yeah, that's... something to be proud of, I guess..^.^ If you're proud of stupid stuff." },
            { val: "Mallika", student: [Student.Kate], dialogue: "Yeah, that's... something to be proud of, I guess..^.^ If you're proud of stupid stuff." },
            { val: "Nobody. I'm a genius", student: [Student.Luca, Student.Mallika, Student.Ian], dialogue: "Congrats, you're officially aligned with <red>Luca>, <red>Mallika>, and <red>Ian>. <yellow>I'll let you decide whether or not that's a good thing.>" },
            { val: "I don't want to disrespect anyone by saying they are close to my intelligence", student: [Student.Malia, Student.Abel], dialgoue: "Come on, don't be so hard on yourself! <i>%1.2%I mean, based on what I've seen today, that's fairly accurate>, %1% but you still gotta be confident!" },
            { val: "I am closest to my own intelligence", student: [Student.Josh], dialgoue: "...wow, real creatie answer. bet you thought <yellow>really hard> for that one." },
        ],
        type: QuestionType.Choice,
    },
    {
        text: "How do you cook your eggs?",
        answers: [
            { val: "Scrambled, Lots of milk, and cheese", student: [Student.Kate], dialogue: "Sounds less like eggs, and more like a glob of dairy and poultry." },
            { val: "Fried, but super burnt", student: [Student.Mallika], dialogue: "That sounds gross. I guess it fits you." },
            { val: "Soft boiled", student: [Student.Ian], dialogue: "Your face looks soft boiled." },
            { val: "In bulk", student: [Student.Abel], dialogue: "I don't even know what that means." },
            { val: "Poached", student: [Student.Luca], dialogue: "You're a poached egg." },
            { val: "Scrambled with spinach and onion", student: [Student.Sandeep], dialogue: "Oh, you're looking for <yellow>healthy> eggs now? <i>Oh wow, look at the test taker who wants healthy eggs. So cool.>" },
            { val: "Over easy with hash browns", student: [Student.Josh], dialogue: "With hash browns? That's a flavor nightmare. Just scramble them..." },
            { val: "Sunny Side Up", student: [Student.Malia], dialogue: "That's good!.^.^\n Oh, no, not good that you like sunny side up eggs, good that you aren't getting anything better in life." },
        ],
        type: QuestionType.Choice,
    }
]


export class Ending {
    dialogue: string[];
    endingName: string;
    studentName: string;
    description: string;
    animation: {
        delay: number;
        duration: number;
    };
    bgclass: string;
    textclass: string;
    bigtextclass: string;
}

export const endings: { [key: string]: Ending } = {
    "Sandeep": { 
        dialogue: [
            "That should be all of the questions. I'm going to go ahead and run the results through the computer.",
            ".....alright!",
            "I'm not sure if you're aware, but I'm a <yellow>very smart> person.",
            "And it looks like you're going somewhere nice.",
        ],
        endingName: "<green>Patriotic Ending>",
        studentName: "Sandeep",
        animation: {
            delay: 1000,
            duration: 1000,
        },
        bgclass: "bg-white",
        textclass: "text-black",
        bigtextclass: "text-slate-900",
        description: "You dedicate your life to supporting your nation. Your sector gains immense technical power as you and your team of scientists are able to learn more about the world. You dedicate your strengths to a military effort, and are able to secure a high ranking in the global standing. You die content, having achieved greatness.",
    },
    "Ian": { 
        dialogue: [
            "Those are all of the questions. I'm going to run these results through the computer.",
            ".....hmmm.",
            "This makes sense.",
            "This makes <yellow>a lot> of sense.",
        ],
        endingName: "<teal>Triumphant Ending>",
        studentName: "Ian",
        animation: {
            delay: 400,
            duration: 200,
        },
        bgclass: "bg-slate-100",
        textclass: "text-slate-900",
        bigtextclass: "text-slate-800",
        description: "Your sector is able to bring together resources from across the world to win the war against the Luca sector. In the end, the society feels immense pride. They are able to take control of the world, and impose a worldwide democracy. The first democratic world leader is elected in 2564.",
    },
    "Josh": { 
        dialogue: [
            "That's a wrap. Let me run these through the computer.",
            ".....",
            "Well, to be fair, things could be worse.",
            "I mean, you could be <yellow>me>.",
        ],
        endingName: "<slate><i>Silly> Ending>",
        studentName: "Josh",
        animation: {
            delay: 1000,
            duration: 800,
        },
        bgclass: "bg-orange-800",
        textclass: "text-white",
        bigtextclass: "text-violet-100",
        description: "You try to go study in university, but in a fit of rage, you leave the school and join the circus. You spend your days entertaining crowds of people, and provide solace to many a soldier. These soldiers are so enamoured by your circus, in fact, that they lose their war."
    },
    "Malia": { 
        dialogue: [
            "That's all of the questions. I'm going to run these through the computer.",
            "..Well, it spit that one out pretty fast.",
            "The next few years are going to be <yellow>good> for you.",
            "Don't mess this one up.",
        ],
        endingName: "<blue>Famous Ending>",
        studentName: "Malia",
        animation: {
            delay: 0,
            duration: 3000,
        },
        bgclass: "bg-amber-200",
        textclass: "text-slate-900",
        bigtextclass: "text-slate-800",
        description: "After writing and directing a documentary about the war, you become the most famous person in the world. You get incredibly rich, and move into the house of your dreams, but it feels a little empty.",
    },
    "Mallika": { 
        dialogue: [
            "Stop tapping your foot. Calm down. We're done. I'm going to put your answers through the computer now.",
            "...Oh.",
            "Oh no.",
            "Oh no no no no no.",
            "Well, I don't know how you'll feel about this.",
        ],
        endingName: "<red>Bad Ending>",
        studentName: "Mallika",
        animation: {
            delay: 3000,
            duration: 100,
        },
        bgclass: "bg-indigo-950",
        textclass: "text-amber-50",
        bigtextclass: "text-amber-100",
        description: "You get close to solving climate change, but you throw it all away to marry <red>Matt Sterniolo>.",
    },
    "Kate": { 
        dialogue: [
            "That's all of the questions. I'm going to run these through the computer.",
            ".....That's not bad.",
            "That's not bad at all.",
            "You're going to be <yellow>fine>.",
        ],
        endingName: "<fuchsia>Presidential Ending>",
        studentName: "Kate",
        animation: {
            delay: 0,
            duration: 2000,
        },
        bgclass: "bg-white",
        textclass: "text-rose-600",
        bigtextclass: "text-rose-500",
        description: "After a long campaign, a lot of ups and downs, and a scandal involving tic tac mints (don't ask), you finally become the the first president of the world. Under your rule, the world is... slightly worse, actually, but you think it's just fine."
    },
    "Luca": { 
        dialogue: [
            "That's it for the questions. I'm going to put these through the computer.",
            ".....Well, that's all fine.",
            "Yeah, you'll be fine.",
            "You'll be <yellow>fine>.",
        ],
        endingName: "<yellow>Humble Ending>",
        studentName: "Luca",
        animation: {
            delay: 0,
            duration: 2000,
        },
        bgclass: "bg-sky-950",
        textclass: "text-white",
        bigtextclass: "text-slate-100",
        description: "Starting with the diagreement of 2493, you go to war with the Ian sector. Grouping together with others in your sector, you are able to find great comfort by joining in the war effort. Many long nights at the circus and the bar end in smiles. While you lose the war, your sector continues on, harmoniously.",
    },
    "Abel": { 
        dialogue: [
            "Okay, well, I hope you're happy. I'm going to put these through the computer.",
            ".....",
            ".....",
            "....Ah, okay.",
            "Just give me one moment. I have to make a phone call.",
            ".^%0%[Pickup Sound]%1%.^.^ Hello? Yes, security? Yeah, I've got a code <red>A>.",
            ".....",
            "<yellow>Don't worry, sir, this isn't about you.>",
            ".....",
            ".....Man, those security folks really take their time.",
            "Ah, here they are.",
        ],
        endingName: "<red><b>YOU DIED!>>",
        studentName: "Abel",
        animation: {
            delay: 1000,
            duration: 0,
        },
        bgclass: "bg-black",
        textclass: "text-red-500",
        bigtextclass: "text-red-700",
        description: "In 2344, it was determined that the people with your alignment were 'too strong' for the general population. A general ban on all of these citizens was imposed. 10 years after you die, in 2567, it is repealed by the president of the world, who deems it 'barbaric' and 'uncivilized.' As someone caught in the interim, you don't live to see it.",
    },
    "John": { 
        dialogue: [
            "[yawn], I'm starting to get tired of these.",
            ".....",
            ".....",
            ".....",
            "....Okay, there seems to be an issue with the computer.",
            "I'm going to run the numbers again.",
            ".....",
            ".....",
            ".....",
            "No, that's not right.",
            "You aren't normal.",
            "This can't be real.",
            "You can't be real.",
            "I'm dreaming.",
            "I'm dreaming.",
            "I'm dreaming.",
        ],
        endingName: "<green><b>True Ending>>",
        studentName: "Mr. John",
        animation: {
            delay: 0,
            duration: 5000,
        },
        bgclass: "bg-rose-50",
        textclass: "text-gray-950",
        bigtextclass: "text-gray-950",
        description: "The <b>war between Alsion Students> in 2024 set off a cataclysmic series of events that would go on to leave society segmented into 8 tribes, which later came to be refered as <i>sectors>. These sectors were, in order:\n\nAbel.\nIan.\nJosh.\nMalia.\nMallika.\nLuca.\nKate.\nAnd, Sandeep.\n\n.^.^These sectors lived segregated, leading to a complete lack of progress across the world. It was only when you <yellow>broke the norm> by being a new, unique kind of person, that the people were able to realize the error of their ways. As a <yellow>ninth> type of person, you smashed traditional ideas, and the existing modes of power. The world joined together in harmony, and <yellow>you>, this test, and this moment, became known as the first step towards <yellow>Utopia>.",
    },
}
