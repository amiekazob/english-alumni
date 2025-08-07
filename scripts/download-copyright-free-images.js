const fs = require('fs');
const path = require('path');
const https = require('https');

// Unsplash API configuration
const UNSPLASH_ACCESS_KEY = 'YOUR_UNSPLASH_ACCESS_KEY'; // You'll need to get this from unsplash.com/developers
const UNSPLASH_API_URL = 'https://api.unsplash.com';

// Use reliable placeholder images with professional look
const PLACEHOLDER_IMAGES = [
  {
    name: 'professional-1.jpg',
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400'
  },
  {
    name: 'professional-2.jpg', 
    url: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400'
  },
  {
    name: 'professional-3.jpg',
    url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400'
  },
  {
    name: 'professional-4.jpg',
    url: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400'
  },
  {
    name: 'professional-5.jpg',
    url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400'
  },
  {
    name: 'professional-6.jpg',
    url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400'
  },
  {
    name: 'professional-7.jpg',
    url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400'
  },
  {
    name: 'professional-8.jpg',
    url: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400'
  },
  {
    name: 'professional-9.jpg',
    url: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400'
  },
  {
    name: 'professional-10.jpg',
    url: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400'
  }
];

// Function to download image from URL
function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filename);
    
    https.get(url, (response) => {
      if (response.statusCode === 302 || response.statusCode === 301) {
        // Handle redirects
        return downloadImage(response.headers.location, filename).then(resolve).catch(reject);
      }
      
      if (response.statusCode !== 200) {
        console.log(`⚠️  Failed to download ${path.basename(filename)}: ${response.statusCode}`);
        resolve(); // Continue with other downloads
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`✓ Downloaded: ${path.basename(filename)}`);
        resolve();
      });
      
      file.on('error', (err) => {
        fs.unlink(filename, () => {}); // Delete the file on error
        reject(err);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

// Main function to download all images
async function downloadCopyrightFreeImages() {
  const alumniImagesDir = path.join(__dirname, '..', 'public', 'images', 'alumni');
  
  // Ensure directory exists
  if (!fs.existsSync(alumniImagesDir)) {
    fs.mkdirSync(alumniImagesDir, { recursive: true });
  }
  
  console.log('🚀 Starting download of copyright-free professional images...');
  console.log(`📁 Target directory: ${alumniImagesDir}`);
  
  try {
    for (const image of PLACEHOLDER_IMAGES) {
      const filePath = path.join(alumniImagesDir, image.name);
      
      // Skip if file already exists
      if (fs.existsSync(filePath)) {
        console.log(`⏭️  Skipped (already exists): ${image.name}`);
        continue;
      }
      
      await downloadImage(image.url, filePath);
      
      // Add a small delay to be respectful to the API
      await new Promise(resolve => setTimeout(resolve, 500));
    }
    
    console.log('\n✅ All images downloaded successfully!');
    console.log('\n📝 Note: These images are from Unsplash and are free to use under the Unsplash License.');
    console.log('   You can use them for any purpose, including commercial use.');
    console.log('   Attribution is appreciated but not required.');
    
  } catch (error) {
    console.error('❌ Error downloading images:', error.message);
    process.exit(1);
  }
}

// Run the script
if (require.main === module) {
  downloadCopyrightFreeImages();
}

module.exports = { downloadCopyrightFreeImages };