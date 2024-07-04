import { promises as fs } from "fs";
import { join } from "path";
import { directoryPath } from "./utils/constant";
import { replaceTextInFile } from "./utils/replace";

const replaceTextInFiles = async (
	directory: string,
	searchTexts: string[],
	replaceTexts: string[],
) => {
	// validation
	if (searchTexts.length !== replaceTexts.length) {
		console.error(
			`🍓 - Replacing texts length must be same with searching texts length! searchTexts.length: ${searchTexts.length}, replaceTexts.length: ${replaceTexts.length}`,
		);

		return;
	}

	for (let i = 0; i < searchTexts.length; i++) {
		const searchText = searchTexts[i];
		const replaceText = replaceTexts[i];

		console.log(`Start to replaced "${searchText}" with "${replaceText}"`);

		try {
			// Read all files in the specified directory
			const files = await fs.readdir(directory);

			// Filter out directories and keep only files
			const filePromises = files
				.filter(async (file) => {
					const stat = await fs.stat(join(directory, file));

					return !stat.isDirectory();
				})
				.map((file) => {
					return replaceTextInFile(
						join(directory, file),
						searchText,
						replaceText,
					);
				});

			console.log("filePromises.length =", filePromises.length);

			// Await all promises to complete
			await Promise.all(filePromises);
		} catch (error) {
			console.error(`Error processing directory ${directory}:`, error);
		}
	}

	console.log("DONE! replaced!");
};

console.log("Start!");

// Replace 'oldText' with 'newText' in all files in the directory
replaceTextInFiles(
	directoryPath,
	["oldText", "flower", "💮"],
	["newText", "lotus", "🧘"],
);
