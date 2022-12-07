import { reservationValidation } from '../../helpers/reservationHelpers'
import { supabase } from '../../db/client'

export default defineEventHandler( async (event) => {
  const body = await readBody(event)
  const validation = reservationValidation(body)

  if(validation.isValid == false){
    return validation
  }

  const { error } = await supabase
  .from('reservations')
  .insert({
    name: body.name,
    email: body.email,
    phone_num: body.phone_num,
    date_booked: body.date_booked,
  })

  if(error){
    return error
  }

  const dateBooked = new Date(body.date_booked)
  return {
    status: 'success',
    message: `Date Reserved! ${dateBooked.toLocaleString('en-GB', { timeZone: 'SST' })}`
  }
})

