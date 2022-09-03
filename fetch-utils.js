const SUPABASE_URL = 'https://fjidvhxajekcfrrjsnla.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqaWR2aHhhamVrY2ZycmpzbmxhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjAxNDU2ODYsImV4cCI6MTk3NTcyMTY4Nn0._zi_gZoOt0ksKYa3J9htU9w6oH8ojf_WkKrLHWGaswo';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);



export async function getBooks() {
    const response = await client
        .from('books')
        .select('*');
   
    return checkError(response.data);
}

export async function getBookByID(id) {
    const response = await client
        .from('books')
        .select('*')
        .match({ id })
        .single();

   return checkError(response.data);
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;  
}
 
