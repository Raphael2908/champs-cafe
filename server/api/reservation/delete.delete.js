import { supabase } from '../../db/client'

export default defineEventHandler( async (event) => {

  const body = await readBody(event)
  
  const { error } = await supabase
  .from('reservations')
  .delete()
  .eq('id',body.id)

  if(error){
    return error
  }
  return 'reservation Deleted!'
})