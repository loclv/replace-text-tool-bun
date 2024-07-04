import { promises as fs } from "fs";
import { join } from "path";

const replaceTextInFile = async (
	filePath: string,
	searchText: string,
	replaceText: string,
) => {
	console.log("filePath", filePath);

	try {
		// Read the file content
		const fileContent = await fs.readFile(filePath, "utf-8");

		// for debug
		// console.log("fileContent", fileContent);

		// Replace all occurrences of the search text with the replace text
		const result = fileContent.split(searchText).join(replaceText);

		// Write the updated content back to the file
		await fs.writeFile(filePath, result, "utf-8");

		console.log(
			`Replaced "${searchText}" with "${replaceText}" in file: ${filePath}`,
		);
	} catch (error) {
		console.error(`Error processing file ${filePath}:`, error);
	}
};

const replaceTextInFiles = async (
	directory: string,
	searchText: string,
	replaceText: string,
) => {
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

		console.log("DONE! replaced!");
	} catch (error) {
		console.error(`Error processing directory ${directory}:`, error);
	}
};

console.log("Start!");

// Example usage:
// Replace 'oldText' with 'newText' in all files in the 'exampleDir' directory
replaceTextInFiles("exampleDir", "oldText", "newText");
