import { supabase } from '@/utils/supabase';
import { NextResponse } from 'next/server';

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  const { data } = await supabase.from('notes').select().eq('id', id).single();

  return NextResponse.json(data);
}
