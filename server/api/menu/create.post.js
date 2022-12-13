// import { reservationValidation } from '../../helpers/reservationHelpers'
import { supabase } from '../../db/client'

export default defineEventHandler( async (event) => {
  const body = await readBody(event)

  const { error } = await supabase
  .from('menu')
  .insert({
    image: body.image,
    heading: body.heading,
    body: body.body,
    element: body.element,
    hp: body.hp,
    cost: body.cost,
    calories: body.calories,
    size: body.size,
    warning: body.warning
  })

  if(error){
    return error
  }

  const dateBooked = new Date(body.date_booked)
  return {
    status: 'success',
    message: `item added!`
  }
})

