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
        id: Tables<'users'>['id'];
        name: Tables<'users'>['name'];
        username: Tables<'users'>['username'];
        biography: Tables<'users'>['biography']
        following: Tables<'users'>['following']
        followers: Tables<'users'>['followers']
        avatar_url: Tables<'users'>['avatar_url'];
    } | null,
    post_type?: string
}

export type TweetPostAndRetweet = {
    action_user_id: Tables<'users'>['id'],
    name: Tables<'users'>['name'],
    username: Tables<'users'>['username'],
    avatar_url: Tables<'users'>['avatar_url'],
    tweet_id: Tables<'tweets'>['id'],
    content: Tables<'tweets'>['content'],
    image_url: Tables<'tweets'>['image_url'],
    comments: Tables<'tweets'>['comments'],
    retuits: Tables<'tweets'>['retuits'],
    likes: Tables<'tweets'>['likes'],
    created_at: Tables<'tweets'>['created_at'],
    post_type: string
}
