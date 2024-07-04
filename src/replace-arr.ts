import { directoryPath } from './utils/constant';
import { replaceTextInFiles } from './utils/files';

const replaceTextArrInFiles = async (
	directoryPath: string,
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

		await replaceTextInFiles(directoryPath, searchText, replaceText);
	}

	console.log('🌟 DONE! replaced!');
};

console.log('Start!');

// Replace 'oldText' with 'newText' in all files in the directory
replaceTextArrInFiles(
	directoryPath,
	['oldText', 'flower', '💮'],
	['newText', 'lotus', '🧘'],
);
