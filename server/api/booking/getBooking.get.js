import { supabase } from '../../db/client'

export default defineEventHandler( async (event) => {
    const query = getQuery(event)

    let dbQuery = supabase
    .from('bookings')
    .select()

    if(query.name) {dbQuery = dbQuery.eq('name', query.name)}
    if(query.email) {dbQuery = dbQuery.eq('email', query.email)}
    if(query.phone_num) {dbQuery = dbQuery.eq('phone_num', query.phone_num)}
    if(query.date_booked) {dbQuery = dbQuery.eq('date_booked', query.date_booked)}
    
    const { data, error } = await dbQuery
    
    if(error){
      return error
    }
    return data
  })