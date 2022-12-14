import { supabase } from '../../db/client'

export default defineEventHandler( async (event) => {
    let dbQuery = supabase
    .from('reservations')
    .select()
    
    const { data, error } = await dbQuery
    
    if(error){
      return error
    }
    return data
  })