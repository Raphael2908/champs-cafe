import { supabase } from '../../db/client'
export default defineEventHandler( async(event) => {
    const { data, error } = await supabase
    .from('menu')
    .select()

    return data.map((element) => {
        return {
            'image': element['image'],
            'heading': element['heading'],
            'body': element['body'],
            'element': element['element'],
            'hp': element['hp'],
            'cost': element['cost'],
            'calories': element['calories'],
            'warning': element['warning'],
            'size': element['size'],
            'category': element['category']
        }
    })
})