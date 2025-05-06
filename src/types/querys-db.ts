import { type Tables } from '@/types/database.types'
import { TableRelationships } from '@/types/generics'

export type CreatorTweet = {
    id: Tables<'users'>['id']
    name: Tables<'users'>['name'];
    username: Tables<'users'>['username'];
    biography: Tables<'users'>['biography']
    following: Tables<'users'>['following']
    followers: Tables<'users'>['followers']
    avatar_url: Tables<'users'>['avatar_url'];
} | null

export type TweetInfo = {
    id: Tables<'tweets'>['id'] | Tables<'comments'>['tweet_id']
    content: Tables<'tweets'>['content'] | Tables<'comments'>['content']
    image_url: Tables<'tweets'>['image_url'] | Tables<'comments'>['image_url']
    likes: Tables<'tweets'>['likes']
    retuits: Tables<'tweets'>['retuits']
    comments: Tables<'tweets'>['comments']
    created_at: Tables<'tweets'>['created_at'] | Tables<'comments'>['created_at']
    creator: CreatorTweet
    post_type?: string
} | null

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

export interface UserFollower {
    id: Tables<'users'>['id'];
    src: Tables<'users'>['avatar_url'];
    name: Tables<'users'>['name'];
    username: Tables<'users'>['username'];
    biography: Tables<'users'>['biography'];
    followers: Tables<'users'>['followers'];
    following: Tables<'users'>['following'];
}

export interface UsersFollowers {
    idFollower: keyof Tables<'followers'>
    idFollowing: keyof Tables<'followers'>
    user: UserFollower;
}

export type GetFollowersPage = {
  idUser: Tables<'users'>['id']
  filterColumn: keyof Tables<'followers'>
  columnRelation: TableRelationships<'followers'>
}

export type GetAllFollowersProps = {
    following: string[]
}

type NonNullableTweetInfo = Exclude<TweetInfo, null>

export type CommentInfo = Omit<NonNullableTweetInfo, 'likes' | 'retuits' | 'comments'>

export type UsersSearch = {
    id: Tables<'users'>['id']
    name: Tables<'users'>['name']
    username: Tables<'users'>['username']
    src: Tables<'users'>['avatar_url']
}

export type BookMarksUserTweet = {
    tweet: TweetInfo
}
