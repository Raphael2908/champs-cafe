import { supabase } from '../../db/client'
import moment from 'moment'
export default defineEventHandler( async (event) => {
    const query = getQuery(event)
    
    if(query.col == undefined || query.col == ''){
      query.col = 'date_booked'
      query.asc = false
    }

    if
    (
      (query.name == undefined || query.name == '') && 
      (query.email == undefined || query.email == '') && 
      (query.phone_num == undefined || query.phone_num == '') && 
      (query.date_booked == undefined || query.date_booked == '')
    )
    {
      return 'Please enter a phone number'
    }

    let dbQuery = supabase
    .from('reservations')
    .select()

    if(query.name) {dbQuery = dbQuery.eq('name', query.name)}
    if(query.email) {dbQuery = dbQuery.eq('email', query.email)}
    if(query.phone_num) {dbQuery = dbQuery.eq('phone_num', query.phone_num)}
    if(query.date_booked) {dbQuery = dbQuery.eq('date_booked', query.date_booked)}
    
    query.asc = query.asc == 'true' // Because Javascript sends over a string and not a boolean

    const { data, error } = await dbQuery.order(query.col, { ascending: query.asc })
    
    if(error){
      return error
    }
    return data.map((element) => {
      return {
        name: element['name'],
        email: element['email'],
        phone_num: element['phone_num'],
        date_booked: moment(element['date_booked']).format('MMMM Do YYYY, h:mm a'),
        confirmed: element['confirmed'],
        test: Boolean(query.asc)
      }
    })
  })