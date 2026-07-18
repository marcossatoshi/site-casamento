'use server';

import { supabase } from './supabase';

// Mock data storage in-memory for fallback when no Supabase URL is set
let mockMessages = [
  { id: '1', name: 'João & Maria', message: 'Desejamos toda a felicidade do mundo para vocês!', created_at: new Date().toISOString() }
];

export async function getMessages() {
  if (process.env.NEXT_PUBLIC_SUPABASE_URL) {
    const { data, error } = await supabase
      .from('messages')
      .select('*')
      .order('created_at', { ascending: false });
      
    if (error) {
      console.error('Error fetching messages:', error);
      return [];
    }
    return data;
  }
  return mockMessages;
}

export async function addMessage(formData: FormData) {
  const name = formData.get('name') as string;
  const message = formData.get('message') as string;

  if (process.env.NEXT_PUBLIC_SUPABASE_URL) {
    const { error } = await supabase
      .from('messages')
      .insert([{ name, message }]);
      
    if (error) {
      console.error('Error adding message:', error);
      return { success: false, error: error.message };
    }
    return { success: true };
  }
  
  mockMessages.unshift({
    id: Date.now().toString(),
    name,
    message,
    created_at: new Date().toISOString()
  });
  console.log('Mock addMessage success:', { name, message });
  return { success: true };
}

export async function submitRSVP(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const attending = formData.get('attending') === 'true';
  const guests_count = parseInt(formData.get('guests_count') as string || '0', 10);

  if (process.env.NEXT_PUBLIC_SUPABASE_URL) {
    const { error } = await supabase
      .from('rsvp')
      .insert([{ name, email, attending, guests_count }]);
      
    if (error) {
      console.error('Error submitting RSVP:', error);
      return { success: false, error: error.message };
    }
    return { success: true };
  }

  console.log('Mock submitRSVP success:', { name, email, attending, guests_count });
  return { success: true };
}
