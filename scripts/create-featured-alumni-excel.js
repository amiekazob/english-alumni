const XLSX = require('xlsx');
const path = require('path');

// Function to generate featured alumni data
function generateFeaturedAlumniData() {
  const featuredAlumni = [
    {
      Name: "Dr. Rashida Sultana",
      Batch: "1st",
      Position: "Chief Technology Officer",
      Institute: "Microsoft Bangladesh",
      Email: "rashida.sultana@microsoft.com",
      Photo: "rashida_sultana.jpg",
      Point: 98,
      LinkedIn: "https://linkedin.com/in/rashida-sultana",
      Facebook: "https://facebook.com/rashida.sultana",
      Instagram: "https://instagram.com/rashida_sultana",
      verified: 0,
      blue_verified: 1
    },
    {
      Name: "Engr. Mohammad Hassan Ali",
      Batch: "2nd",
      Position: "Managing Director",
      Institute: "Grameenphone Ltd",
      Email: "hassan.ali@grameenphone.com",
      Photo: "hassan_ali.jpg",
      Point: 96,
      LinkedIn: "https://linkedin.com/in/hassan-ali",
      Facebook: "https://facebook.com/hassan.ali",
      Instagram: "https://instagram.com/hassan_ali",
      verified: 1,
      blue_verified: 0
    },
    {
      Name: "Prof. Dr. Fatima Rahman",
      Batch: "1st",
      Position: "Professor & Head",
      Institute: "BUET",
      Email: "fatima.rahman@buet.ac.bd",
      Photo: "fatima_rahman.jpg",
      Point: 95,
      LinkedIn: "https://linkedin.com/in/fatima-rahman",
      Facebook: "https://facebook.com/fatima.rahman",
      Instagram: "https://instagram.com/fatima_rahman",
      verified: 0,
      blue_verified: 1
    },
    {
      Name: "Mr. Ahmed Karim Sheikh",
      Batch: "3rd",
      Position: "Senior Vice President",
      Institute: "Samsung Electronics",
      Email: "ahmed.karim@samsung.com",
      Photo: "ahmed_karim.jpg",
      Point: 94,
      LinkedIn: "https://linkedin.com/in/ahmed-karim",
      Facebook: "https://facebook.com/ahmed.karim",
      Instagram: "https://instagram.com/ahmed_karim",
      verified: 1,
      blue_verified: 0
    },
    {
      Name: "Ms. Nasreen Akter Chowdhury",
      Batch: "2nd",
      Position: "Director of Engineering",
      Institute: "Google Bangladesh",
      Email: "nasreen.akter@google.com",
      Photo: "nasreen_akter.jpg",
      Point: 93,
      LinkedIn: "https://linkedin.com/in/nasreen-akter",
      Facebook: "https://facebook.com/nasreen.akter",
      Instagram: "https://instagram.com/nasreen_akter",
      verified: 0,
      blue_verified: 1
    }
  ];

  // Generate additional featured alumni to reach 50 total
  const firstNames = ['Dr.', 'Mr.', 'Ms.', 'Engr.', 'Prof.'];
  const maleNames = ['Rahman', 'Hassan', 'Ali', 'Khan', 'Islam', 'Hossain', 'Alam', 'Mahmud', 'Karim', 'Rashid', 'Salam', 'Haque', 'Uddin', 'Sheikh', 'Chowdhury', 'Sarkar', 'Bhuiyan', 'Talukder', 'Mondal', 'Biswas'];
  const femaleNames = ['Fatima', 'Rashida', 'Nasreen', 'Sultana', 'Khatun', 'Begum', 'Akter', 'Parvin', 'Yasmin', 'Rehana', 'Ruma', 'Salma', 'Shireen', 'Taslima', 'Rubina'];
  const lastNames = ['Ahmed', 'Rahman', 'Hassan', 'Ali', 'Khan', 'Islam', 'Hossain', 'Alam', 'Mahmud', 'Karim', 'Rashid', 'Salam', 'Haque', 'Uddin', 'Miah', 'Sheikh', 'Chowdhury', 'Sarkar', 'Das', 'Roy', 'Bhuiyan', 'Talukder', 'Mondal', 'Biswas'];
  
  const seniorPositions = [
    'Chief Executive Officer', 'Chief Technology Officer', 'Managing Director', 'Executive Director',
    'Senior Vice President', 'Vice President', 'General Manager', 'Deputy Managing Director',
    'Professor & Head', 'Associate Professor', 'Principal Engineer', 'Chief Engineer',
    'Director of Engineering', 'Director of Operations', 'Senior Director', 'Technical Director',
    'Research Director', 'Innovation Director', 'Strategy Director', 'Business Director'
  ];
  
  const prestigiousInstitutes = [
    'Microsoft Bangladesh', 'Google Bangladesh', 'Samsung Electronics', 'Apple Inc.',
    'BUET', 'University Of Asia Pacific', 'MIT', 'Stanford University',
    'Grameenphone Ltd', 'Robi Axiata Ltd', 'BRAC Bank Ltd', 'Dutch-Bangla Bank Ltd',
    'Siemens Bangladesh', 'ABB Ltd', 'General Electric', 'Schneider Electric',
    'United Nations', 'World Bank', 'Asian Development Bank', 'UNDP',
    'NIPSCO USA', 'Bernhard Schulte Ship Company', 'Tesla Inc.', 'SpaceX'
  ];
  
  const batches = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th'];
  
  // Generate remaining 45 featured alumni
  for (let i = 6; i <= 50; i++) {
    const isFemale = Math.random() < 0.35; // 35% female for featured alumni
    const prefix = firstNames[Math.floor(Math.random() * firstNames.length)];
    const firstName = isFemale ? 
      femaleNames[Math.floor(Math.random() * femaleNames.length)] :
      maleNames[Math.floor(Math.random() * maleNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    
    const name = `${prefix} ${firstName} ${lastName}`;
    const batch = batches[Math.floor(Math.random() * batches.length)];
    const position = seniorPositions[Math.floor(Math.random() * seniorPositions.length)];
    const institute = prestigiousInstitutes[Math.floor(Math.random() * prestigiousInstitutes.length)];
    const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${institute.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '')}.com`;
    const photo = `${firstName.toLowerCase()}_${lastName.toLowerCase()}.jpg`;
    const point = Math.floor(Math.random() * 11) + 85; // 85-95 points for featured alumni
    
    const nameForUrl = `${firstName}-${lastName}`.toLowerCase();
    
    // Random verification status (higher chance for featured alumni)
    const hasVerification = Math.random() < 0.7; // 70% chance of having some verification
    const isBlueVerified = hasVerification && Math.random() < 0.4; // 40% of verified are blue verified
    
    featuredAlumni.push({
      Name: name,
      Batch: batch,
      Position: position,
      Institute: institute,
      Email: email,
      Photo: photo,
      Point: point,
      LinkedIn: `https://linkedin.com/in/${nameForUrl}`,
      Facebook: `https://facebook.com/${nameForUrl}`,
      Instagram: `https://instagram.com/${nameForUrl}`,
      verified: isBlueVerified ? 0 : (hasVerification ? 1 : 0),
      blue_verified: isBlueVerified ? 1 : 0
    });
  }
  
  // Sort by points in descending order
  featuredAlumni.sort((a, b) => b.Point - a.Point);
  
  return featuredAlumni;
}

// Generate 50 featured alumni records
const featuredAlumniData = generateFeaturedAlumniData();

// Create a new workbook
const workbook = XLSX.utils.book_new();

// Convert data to worksheet
const worksheet = XLSX.utils.json_to_sheet(featuredAlumniData);

// Add worksheet to workbook
XLSX.utils.book_append_sheet(workbook, worksheet, 'Featured_Alumni');

// Write the file
const filePath = path.join(__dirname, '..', 'data', 'featured_alumni.xlsx');
XLSX.writeFile(workbook, filePath);

console.log('Featured Alumni Excel file created successfully at:', filePath);
console.log(`Generated ${featuredAlumniData.length} featured alumni records`);
console.log('Sample records:');
featuredAlumniData.slice(0, 3).forEach((alumni, index) => {
  console.log(`${index + 1}. ${alumni.Name} - ${alumni.Position} at ${alumni.Institute} (${alumni.Point} points)`);
});