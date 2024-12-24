import { QueryData } from "@supabase/supabase-js"
import { createClient } from "./server"

export const getTweets = async () => {

    try {
        const supabase = await createClient()

        const tweetsQuery = supabase.from("tweets").select('*, creator:users!tweets_user_id_fkey (name, username, avatar_url)').order('created_at', {ascending: false })
    
        type Tweets = QueryData<typeof tweetsQuery>
    
        const {data, error} = await tweetsQuery
    
        if(error) throw new Error('Error. No se pudieron obtener los tweets')
    
        const tweets: Tweets = data 
    
        return tweets
        
    } catch (error) {
        console.log(error);
        throw error
    }


}