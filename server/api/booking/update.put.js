import { supabase } from '../../db/client'

export default defineEventHandler( async (event) => {

  const body = await readBody(event)
  
  const { error } = await supabase
  .from('bookings')
  .update({
    date_booked: body.date_booked,
    email: body.email,
    phone_num: body.phone_num,
    name: body.name
  })
  .eq('id',body.id)

  if(error){
    return error
  }
  return 'Booking Updated!'
})