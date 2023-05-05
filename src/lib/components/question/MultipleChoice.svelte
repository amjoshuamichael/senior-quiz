<script lang="ts">
    import { Answer } from './questions';

    export let choices: Answer[]
    export let answered_callback: (chose: Answer) => void;
    
    let choiceForm: HTMLFormElement;
</script>

<style>
    .animated-inputs {
      max-width: 760px;
      margin: 1em auto;
    }

    .animated-inputs .each {
      margin: 0 auto;
      padding: 1em 0;
      position: relative;
      text-align: left;
      font-size: 20px;
    }

    .animated-inputs label {
      cursor: pointer;
      transition: 0.2s opacity ease;
    }

    .animated-inputs label::before {
      width: 50px;
      height: 50px;
      top: 50%;
      left: 0;
      margin-top: -25px;
      position: absolute;
      cursor: pointer;
      box-sizing: border-box;
    }

    .animated-inputs input[type="checkbox"] {
      opacity: 0;
      appearance: none;
      display: inline-block;
      vertical-align: middle;
      z-index: 100;
    }

    .animated-inputs svg {
      position: absolute;
      top: 50%;
      width: 40px;
      height: 40px;
      margin-top: -20px;
      left: 5px;
      pointer-events: none;
    }

    .animated-inputs svg path {
      stroke-width: 14px;
      stroke-linecap: round;
      stroke-linejoin: round;
      fill: none;
      transition: 0.8s stroke-dasharray ease, 0.8s stroke-dashoffset ease, 0.8s stroke ease;
    }

    /* animation */
    .checkbox input[type="checkbox"] + label svg path {
      stroke-dasharray: 100px 200px;
      stroke-dashoffset: 101px;
      transition: 0.2s stroke-dasharray ease, 0.2s stroke-dashoffset ease, 0.2s stroke ease;
    }

    .checkbox input[type="checkbox"]:checked + label svg path {
      stroke-dashoffset: 0px;
    }

    form:has(input[type="checkbox"]:checked) input[type="checkbox"]:not(:checked) + label {
        opacity: 0.5;
    }

    form:has(input[type="checkbox"]:checked) {
        pointer-events: none;
    }
</style>

<div class="pt-5">
    <form class="animated-inputs checkbox" bind:this={choiceForm}>
        {#each choices as choice, c}
            <div class="each">
                <input id="{c.toString()}" name="checks" type="checkbox" 
                    on:click={() => { 
                        answered_callback(choice) 
                        // disable form
                        var fields = choiceForm.getElementsByTagName('*');
                        for(var i = 0; i < fields.length; i++) {
                            fields[i].disabled = true;
                        }
                    }}>
                <label for="{c.toString()}" class="
                    before:content-[' '] before:border-slate-400 before:border-4 before:rounded-sm
                    select-none">
                    <svg class="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <path class="stroke-amber-500" 
                            d="M22.3,61.3c5.7,4.1,13.2,11.8,16.7,18C53,60.5,66,41,77.7,20.8"/>
                    </svg>
                    <div class="absolute w-full h-full top-1.5 flex flex-col justify-center pl-16 uppercase">
                        <div class="w-full pr-16 absolute top-0 bottom-0 m-auto">
                            {choice.val}
                        </div>
                    </div>
                </label>
            </div>
        {/each}
    </form>
</div>


