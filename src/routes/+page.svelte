<script lang="ts">
    import { onMount } from 'svelte';
    import Paper from '$lib/components/Paper.svelte';
    import Dialogue from '$lib/components/Dialogue.svelte';
    import Lighting from '$lib/components/Lighting.svelte';
    import EndScreen from '$lib/components/EndScreen.svelte';
    import { fly, fade } from 'svelte/transition';
    import { tick } from 'svelte';
    import { startingDialogue, lightOnDialogue, endings, questions, Answer, Student, Ending } from '$lib/components/question/questions';
    import { getCorrectStudent } from '$lib/components/getCorrectStudent';

    const ONE_Q_DEBUG = false;

    let lighting: Lighting;
    let gameHasStarted = false;

    async function animateThrough(msgs: string[]) {
        for (const msg of msgs) {
            dialogueMsg = msg;
            await tick();
            await dialogue.doAnimation();
            dialogueMsg = undefined;
            await tick();
        }
    }

    onMount(async () => {
        await animateThrough(startingDialogue);

        lighting.turnOnLight();

        // wait one second
        await new Promise((resolve) => setTimeout(resolve, 1000));
        
        await animateThrough(lightOnDialogue);

        console.log("HERE");

        gameHasStarted = true;

        document.addEventListener("keypress", (e) => {
            if (e.key == " " && e.getModifierState("Alt")) {
                nextQuestion();
            }
        })
    });

    let questionIndex = 0;

    let dialogue: Dialogue;
    let dialogueMsg: string | undefined = undefined;

    let showEndScreen = false;

    let answerTracking = {} as { [K in Student]: number };

    for (const student of [Student.Abel, Student.Ian, Student.Josh, Student.Luca, Student.Kate, Student.Malia, Student.Mallika, Student.Sandeep]) {
        answerTracking[student] = 0;
    }

    const whenAnswered = async (chose: Answer) => { 
        for (const student of chose.student) {
            answerTracking[student] += 1 / chose.student.length;
        }

        dialogueMsg = chose.dialogue ?? "";
        await tick();
        dialogue.doAnimation();
    };

    const nextQuestion = async () => {
        dialogueMsg = undefined;
        questionIndex++;

        if (questionIndex == (ONE_Q_DEBUG ? 1 : questions.length)) {
            await tick();
            doEndDialogue();
            return;
        }

        await tick();
        await tick();
    }

    let ending: Ending | undefined;
    let endDialogueIndex = -1;
    const doEndDialogue = async () => {
        endDialogueIndex++;

        if (!ending) {
            console.log(getCorrectStudent(answerTracking));
            ending = endings[getCorrectStudent(answerTracking)];
        }

        if (ONE_Q_DEBUG) {
            ending.dialogue = ["test123"];
        }

        dialogueMsg = ending.dialogue[endDialogueIndex];

        await tick();

        dialogue.doAnimation();

        if (endDialogueIndex == ending.dialogue.length - 1) {
            showEndScreen = true;
        }
    }
</script>

<style>
    #bg {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -1;
    }
</style>

<img id="bg" src="wood.jpg" alt="wood" />

{#if questionIndex < questions.length && gameHasStarted}
    {#key questionIndex}
        <div class="absolute w-full h-screen flex place-content-center p-10 xl:px-80 lg:px-60 md:px-30 sm:px-20">
            <div in:fly="{{ x: 50 }}" out:fly="{{ x: -50 }}" class="w-full">
                <Paper question={questions[questionIndex]} answered_callback={whenAnswered}/>
            </div>
        </div>
    {/key}
{/if}

<Lighting bind:this={lighting}/>

{#if showEndScreen && ending}
   <div in:fade="{ending.animation}" class="absolute w-screen h-screen z-50">
       <EndScreen ending={ending}/>
   </div>
{/if}

{#if dialogueMsg != undefined}
    <div in:fly="{{ y: 50, opacity: 0, delay: 100 }}" class="absolute bottom-5 w-full h-80 flex place-content-center xl:px-68 lg:px-40 md:px-20 px-5">
        <Dialogue dialogue={dialogueMsg} nextQuestion={
            gameHasStarted 
                ? (endDialogueIndex >= 0)
                    ? doEndDialogue 
                    : nextQuestion
                : async () => {}
        } bind:this={dialogue} />
    </div>
{/if}
