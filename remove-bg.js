/* eslint-disable @typescript-eslint/no-require-imports */
const { removeBackground } = require('@imgly/background-removal-node');
const fs = require('fs');
const path = require('path');

async function processImage() {
  const inputPath = path.join(__dirname, 'public', 'profile.png');
  const outputPath = path.join(__dirname, 'public', 'profile-transparent.png');
  
  try {
    console.log("Loading image and running background removal...");
    // imgly expects a file:// URI or buffer for node
    const imageSource = 'file://' + inputPath.replace(/\\/g, '/');
    
    const blob = await removeBackground(imageSource);
    const arrayBuffer = await blob.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    
    fs.writeFileSync(outputPath, buffer);
    console.log("Background removed successfully! Saved to " + outputPath);
  } catch (err) {
    console.error("Error removing background:", err);
  }
}

processImage();
