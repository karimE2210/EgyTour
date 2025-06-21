import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Accept filename as argument
const filename = process.argv[2] || 'en.ts';
const filePath = path.join(__dirname, 'src', 'translations', filename);
const content = fs.readFileSync(filePath, 'utf8');

// Extract the object content (remove export const ... = { and closing })
const objectContent = content.replace(/^export const [a-z]+ = \{\s*/i, '').replace(/\s*};?\s*$/, '');

// Split into lines and process
const lines = objectContent.split('\n');
const seenKeys = new Set();
const cleanedLines = [];

for (const line of lines) {
  const trimmedLine = line.trim();
  
  // Skip empty lines and comments
  if (!trimmedLine || trimmedLine.startsWith('//')) {
    cleanedLines.push(line);
    continue;
  }
  
  // Extract key from line
  const keyMatch = trimmedLine.match(/^"([^"]+)":/);
  if (keyMatch) {
    const key = keyMatch[1];
    if (seenKeys.has(key)) {
      console.log(`Removing duplicate key: ${key}`);
      continue; // Skip this line
    }
    seenKeys.add(key);
  }
  
  cleanedLines.push(line);
}

// Reconstruct the file
const cleanedContent = `export const ${filename.replace(/\.ts$/, '')} = {\n${cleanedLines.join('\n')}\n};`;

// Write the cleaned file
fs.writeFileSync(filePath, cleanedContent, 'utf8');
console.log('Translation file cleaned successfully!'); 