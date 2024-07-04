let directoryPath = 'exampleDir';

if (process.env.DIR) {
	directoryPath = process.env.DIR;
} else {
	console.log('You are not using directory path from environment variable.');
}

export { directoryPath };
