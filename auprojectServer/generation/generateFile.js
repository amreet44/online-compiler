const fs = require("fs");
const path = require("path");
const { v4: uuid } = require("uuid");

const dirCodes = path.join(__dirname, "codes");

if (!fs.existsSync(dirCodes)) {
  fs.mkdirSync(dirCodes, { recursive: true });
}

/**
 * Generates a file with the given format and content in the "codes" directory.
 * @param {string} format - The file format (e.g., 'txt', 'json', etc.).
 * @param {string} content - The content to write to the file.
 * @returns {Promise<string>} - The path to the generated file.
 */
const generateFile = async (format, content) => {
  try {
    const jobID = uuid();
    const fileName = `${jobID}.${format}`;
    const filePath = path.join(dirCodes, fileName);

    // Write the content to the file asynchronously
    await fs.promises.writeFile(filePath, content);

    return filePath;
  } catch (error) {
    // Handle any errors that occurred during file generation
    console.error("Error generating file:", error);
    throw error; // Optionally rethrow the error for further handling
  }
};

module.exports = generateFile;
