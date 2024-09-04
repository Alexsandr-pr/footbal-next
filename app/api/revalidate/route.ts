import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';


export async function GET() {
    const filePath = path.join(process.cwd(), 'revalidate.json');
    
    const jsonData = fs.readFileSync(filePath, 'utf8');
    const revalidateValues = JSON.parse(jsonData);

    return NextResponse.json(revalidateValues);
}
