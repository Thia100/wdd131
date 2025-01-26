import sharp from 'sharp';
import { readdirSync } from 'fs';
const directory = 'images/';

readdirSync(directory).forEach(file => {
  sharp(`${directory}/${file}`)
    .resize(200, 100) // width, height
    .toFile(`${directory}/${file}-small.jpg`);
});