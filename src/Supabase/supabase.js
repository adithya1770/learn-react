import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://zzcxyxpiexbtypfwqlch.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp6Y3h5eHBpZXhidHlwZndxbGNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI2NjkwNDQsImV4cCI6MjAyODI0NTA0NH0.oNyAg2IQFy24uR2iOwKjKk7-VG210BOPgxSv5YyRO3Q')