import { promises as fs } from "fs";

export const replaceTextInFile = async (
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
		const result = fileContent.replaceAll(searchText, replaceText);

		if (result !== fileContent) {
			// Write the updated content back to the file
			await fs.writeFile(filePath, result, "utf-8");

			console.log(
				`🌟 - Replaced "${searchText}" with "${replaceText}" in file: ${filePath}`,
			);
		} else {
			console.log("☘️ - Nothing to replace!");
		}
	} catch (error) {
		console.error(`Error processing file ${filePath}:`, error);
	}
};
