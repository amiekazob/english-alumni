const XLSX = require('xlsx');
const path = require('path');

// Path to the Excel file
const excelFilePath = path.join(__dirname, '..', 'data', 'alumni_new.xlsx');

try {
  // Read the existing Excel file
  const workbook = XLSX.readFile(excelFilePath);
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  
  // Convert to JSON to work with data
  const data = XLSX.utils.sheet_to_json(worksheet);
  
  console.log(`Found ${data.length} alumni records`);
  
  // Add verification columns to each record
  const updatedData = data.map((alumni, index) => {
    return {
      ...alumni,
      verified: index % 3 === 0 ? 1 : 0, // Every 3rd alumni is verified
      blue_verified: index % 7 === 0 ? 1 : 0 // Every 7th alumni is blue verified
    };
  });
  
  // Convert back to worksheet
  const newWorksheet = XLSX.utils.json_to_sheet(updatedData);
  
  // Replace the worksheet in the workbook
  workbook.Sheets[sheetName] = newWorksheet;
  
  // Write the updated workbook back to file
  XLSX.writeFile(workbook, excelFilePath);
  
  console.log('✅ Successfully added verification columns to Excel file!');
  console.log('Added columns: verified, blue_verified');
  console.log(`Updated ${updatedData.length} alumni records`);
  
  // Show sample of updated data
  console.log('\nSample updated records:');
  updatedData.slice(0, 5).forEach((alumni, index) => {
    console.log(`${index + 1}. ${alumni.Name} - Verified: ${alumni.verified}, Blue Verified: ${alumni.blue_verified}`);
  });
  
} catch (error) {
  console.error('❌ Error updating Excel file:', error.message);
  
  if (error.code === 'ENOENT') {
    console.log('Excel file not found. Please ensure alumni_new.xlsx exists in the data folder.');
  }
}