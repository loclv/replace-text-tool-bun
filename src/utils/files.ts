import { promises as fs } from 'fs';
import { join } from 'path';
import { replaceTextInAFile } from './replace';

export const replaceTextInFiles = async (
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
				return replaceTextInAFile(
					join(directory, file),
					searchText,
					replaceText,
				);
			});

		console.log('filePromises.length =', filePromises.length);

		// Await all promises to complete
		await Promise.all(filePromises);

		console.log(`🍏 DONE! replaced "${searchText}" with "${replaceText}"!`);
	} catch (error) {
		console.error(`Error processing directory ${directory}:`, error);
	}
};
