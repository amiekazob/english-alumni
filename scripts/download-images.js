const https = require('https');
const fs = require('fs');
const path = require('path');

// Alumni photo filenames
const photoFilenames = [
  'sudeshna.jpg',
  'ashafull.jpg', 
  'moniruzzaman.jpg',
  'obaidur.jpg',
  'abdullah.jpg',
  'sadid.jpg',
  'fazlul.jpg',
  'ahad.jpg',
  'khairul.jpg',
  'fahim.jpg'
];

// Create alumni images directory if it doesn't exist
const imagesDir = path.join(__dirname, '..', 'public', 'images', 'alumni');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Function to download image
function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(imagesDir, filename);
    const file = fs.createWriteStream(filePath);
    
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${filename}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filePath, () => {});
      reject(err);
    });
  });
}

// Download all images
async function downloadAllImages() {
  console.log('Starting image downloads...');
  
  for (let i = 0; i < photoFilenames.length; i++) {
    const filename = photoFilenames[i];
    const url = `https://picsum.photos/400/400?random=${i + 1}`;
    
    try {
      await downloadImage(url, filename);
      // Add delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      console.error(`Failed to download ${filename}:`, error.message);
    }
  }
  
  console.log('Image downloads completed!');
}

downloadAllImages();