const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

// List of countries to randomly assign
const countries = [
  'Bangladesh', 'United States', 'Canada', 'United Kingdom', 'Germany',
  'Australia', 'Singapore', 'Malaysia', 'Japan', 'South Korea',
  'India', 'Pakistan', 'China', 'France', 'Netherlands',
  'Sweden', 'Norway', 'Denmark', 'Switzerland', 'Austria',
  'Italy', 'Spain', 'Belgium', 'Finland', 'New Zealand',
  'South Africa', 'UAE', 'Saudi Arabia', 'Qatar', 'Kuwait'
];

// Function to get a random country
function getRandomCountry() {
  return countries[Math.floor(Math.random() * countries.length)];
}

// Path to the featured alumni Excel file
const filePath = path.join(__dirname, '..', 'data', 'featured_alumni.xlsx');

try {
  // Read the Excel file
  const workbook = XLSX.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  
  // Convert to JSON
  const data = XLSX.utils.sheet_to_json(worksheet);
  
  console.log(`Found ${data.length} featured alumni records`);
  
  // Add Country column to each record
  const updatedData = data.map(record => {
    return {
      ...record,
      Country: getRandomCountry()
    };
  });
  
  // Convert back to worksheet
  const newWorksheet = XLSX.utils.json_to_sheet(updatedData);
  
  // Replace the worksheet in the workbook
  workbook.Sheets[sheetName] = newWorksheet;
  
  // Write the updated workbook back to file
  XLSX.writeFile(workbook, filePath);
  
  console.log('Successfully added Country column to featured alumni Excel file!');
  console.log('Sample data with Country:');
  console.log('Headers:', Object.keys(updatedData[0]));
  console.log('First few records:');
  updatedData.slice(0, 3).forEach((record, index) => {
    console.log(`Record ${index + 1}:`, {
      Name: record.Name || record.name || 'N/A',
      Country: record.Country
    });
  });
  
} catch (error) {
  console.error('Error processing featured alumni Excel file:', error);
}