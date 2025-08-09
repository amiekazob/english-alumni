import { NextRequest, NextResponse } from 'next/server';
import * as XLSX from 'xlsx';
import path from 'path';
import fs from 'fs/promises';
import { existsSync } from 'fs';

export interface AlumniMember {
  Name: string;
  Batch: string;
  Position: string;
  Institute: string;
  Email: string;
  Photo: string;
  Point?: number;
  LinkedIn?: string;
  Facebook?: string;
  Instagram?: string;
  verified?: number;
  blue_verified?: number;
  Country?: string;
}

// Fallback alumni data
const fallbackAlumniData: AlumniMember[] = [
  {
    Name: "Ms. Sudeshna Khan",
    Batch: "1st",
    Position: "Electric System Protection Engineer",
    Institute: "NIPSCO, USA",
    Email: "Suparna_0086@yahoo.com",
    Photo: "sudeshna.jpg",
    Point: 95,
    LinkedIn: "https://linkedin.com/in/sudeshna-khan",
    Facebook: "https://facebook.com/sudeshna.khan",
    Instagram: "https://instagram.com/sudeshna_khan",
    blue_verified: 1
  },
  {
    Name: "Engr. Md. Ashafull Alam",
    Batch: "1st",
    Position: "Managing Director",
    Institute: "Safe Zone Bangladesh Ltd.",
    Email: "safezoneltd.bd@gmail.com",
    Photo: "ashafull.jpg",
    Point: 88,
    LinkedIn: "https://linkedin.com/in/ashafull-alam",
    Facebook: "https://facebook.com/ashafull.alam",
    verified: 1
  },
  {
    Name: "Mr. Mohammad Moniruzzaman",
    Batch: "1st",
    Position: "Electrical Engineer",
    Institute: "Bernhard Schulte Ship Company",
    Email: "mohammadmoniruzzaman504@gmail.com",
    Photo: "moniruzzaman.jpg",
    Point: 92,
    LinkedIn: "https://linkedin.com/in/mohammad-moniruzzaman",
    Instagram: "https://instagram.com/moniruzzaman504"
  }
];

export async function GET(request: NextRequest) {
  try {
    // Try multiple path approaches - prioritize alumni_new.xlsx
    const possiblePaths = [
      path.join(process.cwd(), 'data', 'alumni_new.xlsx'),
      path.resolve('data/alumni_new.xlsx'),
      path.resolve('./data/alumni_new.xlsx'),
      path.join(process.cwd(), 'data', 'alumni_updated.xlsx'),
      path.join(process.cwd(), 'data', 'alumni.xlsx'),
      path.resolve('data/alumni_updated.xlsx'),
      path.resolve('data/alumni.xlsx'),
      path.resolve('./data/alumni_updated.xlsx'),
      path.resolve('./data/alumni.xlsx')
    ];
    
    let filePath = '';
    let fileExists = false;
    
    // Find the correct path
    for (const testPath of possiblePaths) {
      if (existsSync(testPath)) {
        filePath = testPath;
        fileExists = true;
        console.log('Found Excel file at:', filePath);
        break;
      }
    }
    
    if (!fileExists) {
      console.log('Excel file not found in any of the expected locations');
      console.log('Checked paths:', possiblePaths);
      console.log('Using fallback data');
      // Sort fallback data by points as well
      const sortedFallbackData = [...fallbackAlumniData].sort((a, b) => (b.Point || 0) - (a.Point || 0));
      return NextResponse.json({
        success: true,
        data: sortedFallbackData,
        count: sortedFallbackData.length
      });
    }

    // Try to read the Excel file using buffer approach
    try {
      // Read file as buffer first
      const fileBuffer = await fs.readFile(filePath);
      
      // Parse the buffer with XLSX
      const workbook = XLSX.read(fileBuffer, { type: 'buffer' });
      
      // Get the first worksheet
      const sheetName = workbook.SheetNames[0];
      if (!sheetName) {
        console.log('No worksheets found in Excel file');
        const sortedFallbackData = [...fallbackAlumniData].sort((a, b) => (b.Point || 0) - (a.Point || 0));
        return NextResponse.json({
          success: true,
          data: sortedFallbackData,
          count: sortedFallbackData.length
        });
      }
      
      const worksheet = workbook.Sheets[sheetName];
      
      // Convert worksheet to JSON
      const rawData = XLSX.utils.sheet_to_json(worksheet);
      
      // Map and validate data with Point field
      const alumniData: AlumniMember[] = rawData.map((row: any) => ({
        Name: (row.Name || '').toString().trim(),
        Batch: (row.Batch || '').toString().trim(),
        Position: (row.Position || '').toString().trim(),
        Institute: (row.Institute || '').toString().trim(),
        Email: (row.Email || '').toString().trim(),
        Photo: (row.Photo || '').toString().trim(),
        Point: row.Point ? Number(row.Point) : 0,
        LinkedIn: (row.LinkedIn || '').toString().trim(),
        Facebook: (row.Facebook || '').toString().trim(),
        Instagram: (row.Instagram || '').toString().trim(),
        verified: row.verified ? Number(row.verified) : 0,
        blue_verified: row.blue_verified ? Number(row.blue_verified) : 0,
        Country: (row.Country || '').toString().trim()
      }));

      // Sort by points in descending order (highest points first)
      alumniData.sort((a, b) => (b.Point || 0) - (a.Point || 0));
      
      // Validate that we have data
      if (!alumniData || alumniData.length === 0) {
        console.log('No data in Excel file, using fallback data');
        const sortedFallbackData = [...fallbackAlumniData].sort((a, b) => (b.Point || 0) - (a.Point || 0));
        return NextResponse.json({
          success: true,
          data: sortedFallbackData,
          count: sortedFallbackData.length
        });
      }

      console.log(`Successfully loaded ${alumniData.length} alumni records from Excel file`);
      // Return the alumni data from Excel
      return NextResponse.json({
        success: true,
        data: alumniData,
        count: alumniData.length
      });
      
    } catch (excelError) {
      console.error('Error reading Excel file:', excelError);
      console.log('Using fallback data due to Excel read error');
      const sortedFallbackData = [...fallbackAlumniData].sort((a, b) => (b.Point || 0) - (a.Point || 0));
      return NextResponse.json({
        success: true,
        data: sortedFallbackData,
        count: sortedFallbackData.length
      });
    }
    
  } catch (error) {
    console.error('Error in alumni API:', error);
    // Return fallback data even on general errors
    const sortedFallbackData = [...fallbackAlumniData].sort((a, b) => (b.Point || 0) - (a.Point || 0));
    return NextResponse.json({
      success: true,
      data: sortedFallbackData,
      count: sortedFallbackData.length
    });
  }
}