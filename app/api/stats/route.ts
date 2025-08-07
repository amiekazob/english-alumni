import { NextRequest, NextResponse } from 'next/server';
import * as XLSX from 'xlsx';
import path from 'path';
import fs from 'fs/promises';
import { existsSync } from 'fs';

export interface AlumniStats {
  totalAlumni: number;
  distinguishedAlumni: number;
  graduationBatches: number;
  careerReach: string;
}

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
      console.log('Excel file not found, using fallback stats');
      return NextResponse.json({
        success: true,
        data: {
          totalAlumni: 10,
          distinguishedAlumni: 10,
          graduationBatches: 5,
          careerReach: 'Global'
        }
      });
    }

    try {
      // Read file as buffer
      const fileBuffer = await fs.readFile(filePath);
      
      // Parse the buffer with XLSX
      const workbook = XLSX.read(fileBuffer, { type: 'buffer' });
      
      // Get the first worksheet
      const sheetName = workbook.SheetNames[0];
      if (!sheetName) {
        console.log('No worksheets found in Excel file');
        return NextResponse.json({
          success: true,
          data: {
            totalAlumni: 10,
            distinguishedAlumni: 10,
            graduationBatches: 5,
            careerReach: 'Global'
          }
        });
      }
      
      const worksheet = workbook.Sheets[sheetName];
      
      // Convert worksheet to JSON
      const rawData = XLSX.utils.sheet_to_json(worksheet);
      
      // Calculate statistics
      const totalAlumni = rawData.length;
      
      // Count distinguished alumni (those with points > 80 or specific criteria)
      const distinguishedAlumni = rawData.filter((row: any) => {
        const point = row.Point ? Number(row.Point) : 0;
        return point > 80; // Consider alumni with >80 points as distinguished
      }).length;
      
      // Count unique graduation batches
      const uniqueBatches = new Set(
        rawData.map((row: any) => row.Batch).filter(batch => batch)
      );
      const graduationBatches = uniqueBatches.size;
      
      // Determine career reach based on institute locations
      const institutes = rawData.map((row: any) => row.Institute || '').filter(inst => inst);
      const hasInternational = institutes.some(inst => 
        inst.toLowerCase().includes('usa') || 
        inst.toLowerCase().includes('uk') || 
        inst.toLowerCase().includes('canada') ||
        inst.toLowerCase().includes('australia') ||
        inst.toLowerCase().includes('germany') ||
        inst.toLowerCase().includes('singapore') ||
        inst.toLowerCase().includes('international')
      );
      
      const careerReach = hasInternational ? 'Global' : 'National';
      
      const stats: AlumniStats = {
        totalAlumni,
        distinguishedAlumni,
        graduationBatches,
        careerReach
      };
      
      console.log('Calculated stats:', stats);
      
      return NextResponse.json({
        success: true,
        data: stats
      });
      
    } catch (excelError) {
      console.error('Error reading Excel file:', excelError);
      return NextResponse.json({
        success: true,
        data: {
          totalAlumni: 10,
          distinguishedAlumni: 10,
          graduationBatches: 5,
          careerReach: 'Global'
        }
      });
    }
    
  } catch (error) {
    console.error('Error in stats API:', error);
    return NextResponse.json({
      success: true,
      data: {
        totalAlumni: 10,
        distinguishedAlumni: 10,
        graduationBatches: 5,
        careerReach: 'Global'
      }
    });
  }
}