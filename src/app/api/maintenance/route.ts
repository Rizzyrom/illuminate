import { NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';

export async function GET() {
  try {
    const filePath = join(process.cwd(), 'content/settings/site.json');
    const fileContent = await readFile(filePath, 'utf8');
    const settings = JSON.parse(fileContent);
    
    return NextResponse.json({
      maintenanceMode: settings.site?.maintenanceMode === true,
      maintenanceMessage: settings.site?.maintenanceMessage || 'Under maintenance',
      maintenanceReturnDate: settings.site?.maintenanceReturnDate || '2025-09-30T07:00:00.000Z'
    });
  } catch (error) {
    console.error('Error reading maintenance settings:', error);
    return NextResponse.json({
      maintenanceMode: false,
      maintenanceMessage: 'Under maintenance',
      maintenanceReturnDate: '2025-09-30T07:00:00.000Z'
    });
  }
}