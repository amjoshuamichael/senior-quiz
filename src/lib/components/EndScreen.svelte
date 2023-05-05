<script lang="ts">
    import { onMount, tick } from 'svelte';
    import { fly } from 'svelte/transition';

    import { questions, Ending, Student } from '$lib/components/question/questions';
    import { animateTetxOnEl } from '$lib/components/textAnim';

    export let ending: Ending;
    let endingName: HTMLDivElement;
    let endingDescription: HTMLDivElement;
    let youGot: HTMLDivElement;
    let youGotName: HTMLDivElement;

    let questionAnswers: { q: string, a: string }[] = [];
    let nums = [1]

    onMount(async () => {
        

        await new Promise((resolve) => setTimeout(resolve, ending.animation.delay + ending.animation.duration * 0.8));

        animateTetxOnEl(endingName, ending.endingName, () =>{
        animateTetxOnEl(endingDescription, ending.description, () => {
        animateTetxOnEl(youGot, "<b>You are:>", () => {
        animateTetxOnEl(youGotName, ending.studentName, () => {
        showQuestionAnswers()
        })})})});
    });

    function showQuestionAnswers() {
        for (const question of questions) {
            if (question.text.includes("mean")) {
                continue;
            }

            if (question.text.includes("disney")) {
                question.text = "What would you caption this photo?"
            }

            for (const answer of question.answers) {
                for (const student of answer.student) {
                    if (Student[student] == ending.studentName) {
                        questionAnswers.push({ q: question.text, a: answer.val });    
                    }
                }
            }
        }

        // svelte uses assignment to refresh, so refresh all answers like this
        questionAnswers = questionAnswers
    }
</script>

<div class="fixed w-screen h-screen {ending.bgclass}"> </div>

<div class="absolute w-screen p-10 xl:px-80 lg:px-60 md:px-40 sm:px-20 font-droid">
    <div class="w-full text-center text-3xl mb-20" bind:this={endingName}></div>
    <div class="w-full text-center text-lg mb-10 {ending.textclass}" bind:this={endingDescription}></div>
    <div class="w-full text-center text-xl mb-5 {ending.bigtextclass}" bind:this={youGot}></div>
    <div class="w-full text-center text-8xl mb-40 {ending.textclass}" bind:this={youGotName}></div>
    {#if questionAnswers.length > 0}
        <div in:fly={{ y: 50, delay: 500 }} class="w-full text-center text-3xl mb-10 {ending.textclass}">{ending.studentName}'s answers</div>
    {/if}

    {#each questionAnswers as { q, a }, i}
        <div in:fly={{ y: 50, delay: (i + 1) * 200 + 500 }} class="flex">
            <div class="font-bold w-1/2 text-lg p-5 {ending.textclass}">{q}</div>
            <div class="w-1/2 text-lg p-5 {ending.textclass}">{a}</div>
        </div>
    {/each}
</div>
