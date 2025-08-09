import { NextRequest, NextResponse } from 'next/server';
import * as XLSX from 'xlsx';
import path from 'path';
import fs from 'fs/promises';
import { existsSync } from 'fs';

export interface FeaturedAlumniMember {
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

// Fallback featured alumni data
const fallbackFeaturedAlumniData: FeaturedAlumniMember[] = [
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
    verified: 1
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
    verified: 1
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
    blue_verified: 1
  }
];

export async function GET(request: NextRequest) {
  try {
    console.log('Featured Alumni API called');
    
    // Try to read from Excel file first
    const dataDir = path.join(process.cwd(), 'data');
    const excelFilePath = path.join(dataDir, 'featured_alumni.xlsx');
    
    console.log('Looking for featured alumni Excel file at:', excelFilePath);
    
    if (!existsSync(excelFilePath)) {
      console.log('Featured alumni Excel file not found, using fallback data');
      const sortedFallbackData = [...fallbackFeaturedAlumniData].sort((a, b) => (b.Point || 0) - (a.Point || 0));
      return NextResponse.json({
        success: true,
        data: sortedFallbackData,
        count: sortedFallbackData.length
      });
    }

    try {
      // Read the Excel file
      const fileBuffer = await fs.readFile(excelFilePath);
      const workbook = XLSX.read(fileBuffer, { type: 'buffer' });
      
      // Get the first sheet name
      const sheetNames = workbook.SheetNames;
      if (!sheetNames || sheetNames.length === 0) {
        console.log('No worksheets found in featured alumni Excel file, using fallback data');
        const sortedFallbackData = [...fallbackFeaturedAlumniData].sort((a, b) => (b.Point || 0) - (a.Point || 0));
        return NextResponse.json({
          success: true,
          data: sortedFallbackData,
          count: sortedFallbackData.length
        });
      }
      
      const sheetName = sheetNames[0];
      console.log('Reading from sheet:', sheetName);
      
      if (!workbook.Sheets[sheetName]) {
        console.log('Sheet not found in featured alumni Excel file, using fallback data');
        const sortedFallbackData = [...fallbackFeaturedAlumniData].sort((a, b) => (b.Point || 0) - (a.Point || 0));
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
      const featuredAlumniData: FeaturedAlumniMember[] = rawData.map((row: any) => ({
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
      featuredAlumniData.sort((a, b) => (b.Point || 0) - (a.Point || 0));
      
      // Validate that we have data
      if (!featuredAlumniData || featuredAlumniData.length === 0) {
        console.log('No data in featured alumni Excel file, using fallback data');
        const sortedFallbackData = [...fallbackFeaturedAlumniData].sort((a, b) => (b.Point || 0) - (a.Point || 0));
        return NextResponse.json({
          success: true,
          data: sortedFallbackData,
          count: sortedFallbackData.length
        });
      }

      console.log(`Successfully loaded ${featuredAlumniData.length} featured alumni records from Excel file`);
      // Return the featured alumni data from Excel
      return NextResponse.json({
        success: true,
        data: featuredAlumniData,
        count: featuredAlumniData.length
      });
      
    } catch (excelError) {
      console.error('Error reading featured alumni Excel file:', excelError);
      console.log('Using fallback data due to Excel read error');
      const sortedFallbackData = [...fallbackFeaturedAlumniData].sort((a, b) => (b.Point || 0) - (a.Point || 0));
      return NextResponse.json({
        success: true,
        data: sortedFallbackData,
        count: sortedFallbackData.length
      });
    }
    
  } catch (error) {
    console.error('Error in featured alumni API:', error);
    // Return fallback data even on general errors
    const sortedFallbackData = [...fallbackFeaturedAlumniData].sort((a, b) => (b.Point || 0) - (a.Point || 0));
    return NextResponse.json({
      success: true,
      data: sortedFallbackData,
      count: sortedFallbackData.length
    });
  }
}

export async function POST(request: NextRequest) {
  return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
}

export async function PUT(request: NextRequest) {
  return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
}

export async function DELETE(request: NextRequest) {
  return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
}