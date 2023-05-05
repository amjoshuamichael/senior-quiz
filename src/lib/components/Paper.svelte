<script lang="ts">
	import MultipleChoice from './question/MultipleChoice.svelte';
    import { Question, QuestionType, Answer } from './question/questions';

    export let question: Question;
    export let answered_callback: (chose: Answer) => void;

</script>

<div class="w-full h-full bg-white rounded-sm drop-shadow-md font-courier p-4"> 
    {#if question.type == QuestionType.Choice}
        <h1 class="font-bold text-3xl underline decoration-dashed underline-offset-8">
            {question.text}
        </h1>

        <MultipleChoice choices={question.answers} answered_callback={answered_callback}/>
    {/if}
    {#if question.type == QuestionType.PhotoCaption}
        <h1 class="font-bold text-3xl">
            If you posted this photo on Instagram, what would you caption it?
        </h1>

        <div class="w-full flex flex-row place-content-center">
            <img class="w-1/2" src="/{question.text}" alt="A thing on the screen" />
        </div>

        <MultipleChoice choices={question.answers} answered_callback={answered_callback}/>
    {/if}
</div>
