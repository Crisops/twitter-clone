import { type Tables } from './database.types'

export type TweetInfo = {
    id: Tables<'tweets'>['id']
    content: Tables<'tweets'>['content']
    image_url: Tables<'tweets'>['image_url']
    likes: Tables<'tweets'>['likes']
    retuits: Tables<'tweets'>['retuits']
    comments: Tables<'tweets'>['comments']
    created_at: Tables<'tweets'>['created_at']
    creator: {
        name: Tables<'users'>['name'];
        username: Tables<'users'>['username'];
        avatar_url: Tables<'users'>['avatar_url'];
    } | null
}
