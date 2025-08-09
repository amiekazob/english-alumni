const XLSX = require('xlsx');
const path = require('path');

// List of countries for random selection
const countries = [
  'Bangladesh', 'United States', 'Canada', 'United Kingdom', 'Australia',
  'Germany', 'France', 'Japan', 'South Korea', 'Singapore',
  'Malaysia', 'India', 'Pakistan', 'Sri Lanka', 'Nepal',
  'Thailand', 'Indonesia', 'Philippines', 'Vietnam', 'China',
  'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Switzerland',
  'Austria', 'Belgium', 'Italy', 'Spain', 'Portugal',
  'Brazil', 'Argentina', 'Chile', 'Mexico', 'South Africa',
  'Egypt', 'Turkey', 'UAE', 'Saudi Arabia', 'Qatar'
];

// Function to get random country
function getRandomCountry() {
  return countries[Math.floor(Math.random() * countries.length)];
}

// Path to the Excel file
const filePath = path.join(__dirname, '..', 'data', 'alumni_new.xlsx');

try {
  console.log('Reading Excel file:', filePath);
  
  // Read the existing workbook
  const workbook = XLSX.readFile(filePath);
  
  // Get the first worksheet
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  
  // Convert worksheet to JSON to work with data
  const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
  
  console.log('Current data structure:');
  console.log('Headers:', data[0]);
  console.log('Total rows:', data.length);
  
  // Check if Country column already exists
  const headers = data[0];
  const countryColumnIndex = headers.indexOf('Country');
  
  if (countryColumnIndex !== -1) {
    console.log('Country column already exists at index:', countryColumnIndex);
  } else {
    console.log('Adding Country column...');
    
    // Add 'Country' to headers
    headers.push('Country');
    
    // Add random country to each data row
    for (let i = 1; i < data.length; i++) {
      if (data[i] && data[i].length > 0) {
        data[i].push(getRandomCountry());
      }
    }
    
    console.log('Country column added successfully!');
  }
  
  // Convert back to worksheet
  const newWorksheet = XLSX.utils.aoa_to_sheet(data);
  
  // Replace the worksheet in workbook
  workbook.Sheets[sheetName] = newWorksheet;
  
  // Write the updated workbook back to file
  XLSX.writeFile(workbook, filePath);
  
  console.log('Excel file updated successfully!');
  console.log('New headers:', data[0]);
  console.log('Sample data with countries:');
  for (let i = 1; i <= Math.min(5, data.length - 1); i++) {
    if (data[i]) {
      console.log(`Row ${i}:`, data[i].slice(-3)); // Show last 3 columns including new Country
    }
  }
  
} catch (error) {
  console.error('Error processing Excel file:', error);
  process.exit(1);
}