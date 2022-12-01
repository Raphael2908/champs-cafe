import { bookingValidation } from '../../helpers/bookingHelpers'
import { supabase } from '../../db/client'

export default defineEventHandler( async (event) => {

  const body = await readBody(event)
  const validation = bookingValidation(body)
  if(validation.isValid == false){
    return validation.errorBag
  }

  const { error } = await supabase
  .from('bookings')
  .insert({
    'date_booked': body.date_booked,
    'email': body.email,
    'phone_num': body.phone_num,
    'name': body.name
  })

  if(error){
    return error
  }

  const dateBooked = new Date(body.date_booked)
  return `Date booked! ${dateBooked.toLocaleString('en-GB', { timeZone: 'SST' })}`
})

