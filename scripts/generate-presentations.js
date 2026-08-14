import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const presentationsDir = path.join(__dirname, '../src/app/[lang]/presentation');
const outputDir = path.join(__dirname, '../src/data');
const outputFile = path.join(outputDir, 'presentations.json');

function generatePresentationsList() {
  console.log('Generating presentations list...');
  
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  let presentations = [];

  try {
    if (fs.existsSync(presentationsDir)) {
      const items = fs.readdirSync(presentationsDir, { withFileTypes: true });
      presentations = items
        .filter(item => item.isDirectory())
        .map(dir => dir.name);
    } else {
      console.warn(`Directory ${presentationsDir} does not exist. Skipping.`);
    }

    fs.writeFileSync(outputFile, JSON.stringify(presentations, null, 2), 'utf-8');
    console.log(`Successfully wrote ${presentations.length} presentations to ${outputFile}`);
  } catch (error) {
    console.error('Error generating presentations list:', error);
    process.exit(1);
  }
}

generatePresentationsList();
