#! usr/bin/env node

import inquirer from "inquirer";

const answer: {sentence: string} = await inquirer.prompt({
	name: "sentence",
	type: "input",
   message: "Enter a sentence to get its word count:"
});

const words = answer.sentence.trim().split(" ");

console.log(`Your sentence word count is ${words.length}`);