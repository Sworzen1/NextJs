import { supabase } from '@/utils/supabase';
import { NextResponse } from 'next/server';

export async function GET() {
  const { data } = await supabase.from('notes').select();

  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const { title, content } = await request.json();
  const { data } = await supabase.from('notes').insert({
    title,
    content,
    date: new Date().toISOString(),
  });

  return NextResponse.json(data);
}
