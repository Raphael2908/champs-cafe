import { createClient } from "@supabase/supabase-js";

const config = useRuntimeConfig()

const supabase = createClient(config.supabaseURL, config.supabaseKey)

export { supabase }