const XLSX = require('xlsx');
const path = require('path');

// Function to generate alumni data
function generateAlumniData() {
  const firstNames = ['Md.', 'Mr.', 'Ms.', 'Dr.', 'Engr.', 'Prof.'];
  const maleNames = ['Ahmed', 'Rahman', 'Hassan', 'Ali', 'Khan', 'Islam', 'Hossain', 'Alam', 'Mahmud', 'Karim', 'Rashid', 'Salam', 'Haque', 'Uddin', 'Miah', 'Sheikh', 'Chowdhury', 'Sarkar', 'Das', 'Roy'];
  const femaleNames = ['Fatima', 'Rashida', 'Nasreen', 'Sultana', 'Khatun', 'Begum', 'Akter', 'Parvin', 'Yasmin', 'Rehana'];
  const lastNames = ['Ahmed', 'Rahman', 'Hassan', 'Ali', 'Khan', 'Islam', 'Hossain', 'Alam', 'Mahmud', 'Karim', 'Rashid', 'Salam', 'Haque', 'Uddin', 'Miah', 'Sheikh', 'Chowdhury', 'Sarkar', 'Das', 'Roy', 'Bhuiyan', 'Talukder', 'Mondal', 'Biswas'];
  
  const positions = [
    'Electrical Engineer', 'Software Engineer', 'Project Manager', 'Assistant Professor', 'Associate Professor',
    'Managing Director', 'General Manager', 'Deputy Manager', 'Assistant Manager', 'Senior Engineer',
    'System Engineer', 'Design Engineer', 'Maintenance Engineer', 'Quality Engineer', 'Safety Engineer',
    'Research Engineer', 'Development Engineer', 'Technical Lead', 'Team Lead', 'Consultant',
    'Director', 'Vice President', 'Chief Engineer', 'Principal Engineer', 'Senior Consultant'
  ];
  
  const institutes = [
    'University Of Asia Pacific', 'BUET', 'KUET', 'RUET', 'CUET', 'DUET',
    'Grameenphone Ltd', 'Robi Axiata Ltd', 'Banglalink Digital Communications',
    'BRAC Bank Ltd', 'Dutch-Bangla Bank Ltd', 'City Bank Ltd', 'Eastern Bank Ltd',
    'Beximco Ltd', 'Square Pharmaceuticals Ltd', 'ACI Limited', 'Bashundhara Group',
    'Walton Hi-Tech Industries Ltd', 'Samsung Electronics', 'LG Electronics',
    'Siemens Bangladesh', 'ABB Ltd', 'Schneider Electric', 'General Electric',
    'Microsoft Bangladesh', 'Google Bangladesh', 'Facebook Bangladesh',
    'DESCO', 'DPDC', 'BPDB', 'REB', 'PGCB', 'EGCB',
    'United Nations', 'World Bank', 'Asian Development Bank',
    'NIPSCO USA', 'Bernhard Schulte Ship Company', 'Rahim Afroze Solar'
  ];
  
  const batches = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th', '13th', '14th', '15th'];
  
  const alumniData = [];
  
  for (let i = 1; i <= 178; i++) {
    const isFemale = Math.random() < 0.3; // 30% female
    const prefix = firstNames[Math.floor(Math.random() * firstNames.length)];
    const firstName = isFemale ? 
      femaleNames[Math.floor(Math.random() * femaleNames.length)] :
      maleNames[Math.floor(Math.random() * maleNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    
    const name = `${prefix} ${firstName} ${lastName}`;
    const batch = batches[Math.floor(Math.random() * batches.length)];
    const position = positions[Math.floor(Math.random() * positions.length)];
    const institute = institutes[Math.floor(Math.random() * institutes.length)];
    const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}${i}@example.com`;
    const photo = `alumni_${i}.jpg`;
    const point = Math.floor(Math.random() * 31) + 70; // 70-100 points
    
    const nameForUrl = `${firstName}-${lastName}`.toLowerCase();
    
    alumniData.push({
      Name: name,
      Batch: batch,
      Position: position,
      Institute: institute,
      Email: email,
      Photo: photo,
      Point: point,
      LinkedIn: `https://linkedin.com/in/${nameForUrl}-${i}`,
      Facebook: `https://facebook.com/${nameForUrl}.${i}`,
      Instagram: `https://instagram.com/${nameForUrl}_${i}`
    });
  }
  
  return alumniData;
}

// Generate 178 alumni records
const alumniData = generateAlumniData();

// Create a new workbook
const workbook = XLSX.utils.book_new();

// Convert data to worksheet
const worksheet = XLSX.utils.json_to_sheet(alumniData);

// Add worksheet to workbook
XLSX.utils.book_append_sheet(workbook, worksheet, 'Alumni');

// Write the file
const filePath = path.join(__dirname, '..', 'data', 'alumni_new.xlsx');
XLSX.writeFile(workbook, filePath);

console.log('Excel file created successfully at:', filePath);