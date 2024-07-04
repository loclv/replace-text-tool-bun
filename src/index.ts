import { directoryPath } from './utils/constant';
import { replaceTextInFiles } from './utils/files';

console.log('Start!');

// Replace 'oldText' with 'newText' in all files in the directory
replaceTextInFiles(directoryPath, 'oldText', 'newText');
