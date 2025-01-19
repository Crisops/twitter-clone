export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      comments: {
        Row: {
          content: string
          created_at: string
          image_url: string | null
          tweet_id: string
          user_id: string
        }
        Insert: {
          content: string
          created_at?: string
          image_url?: string | null
          tweet_id: string
          user_id: string
        }
        Update: {
          content?: string
          created_at?: string
          image_url?: string | null
          tweet_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'comments_tweet_id_fkey'
            columns: ['tweet_id']
            isOneToOne: false
            referencedRelation: 'tweets'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'comments_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'users'
            referencedColumns: ['id']
          },
        ]
      }
      favorites: {
        Row: {
          created_at: string
          tweet_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          tweet_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          tweet_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'favorites_tweet_id_fkey'
            columns: ['tweet_id']
            isOneToOne: false
            referencedRelation: 'tweets'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'favorites_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'users'
            referencedColumns: ['id']
          },
        ]
      }
      followers: {
        Row: {
          created_at: string
          user_id_follower: string
          user_id_following: string
        }
        Insert: {
          created_at?: string
          user_id_follower: string
          user_id_following: string
        }
        Update: {
          created_at?: string
          user_id_follower?: string
          user_id_following?: string
        }
        Relationships: [
          {
            foreignKeyName: 'followers_user_id_follower_fkey'
            columns: ['user_id_follower']
            isOneToOne: false
            referencedRelation: 'users'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'followers_user_id_following_fkey'
            columns: ['user_id_following']
            isOneToOne: false
            referencedRelation: 'users'
            referencedColumns: ['id']
          },
        ]
      }
      genders: {
        Row: {
          gender: string
          id: number
        }
        Insert: {
          gender?: string
          id?: number
        }
        Update: {
          gender?: string
          id?: number
        }
        Relationships: []
      }
      likes: {
        Row: {
          created_at: string
          tweet_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          tweet_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          tweet_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'likes_tweet_id_fkey'
            columns: ['tweet_id']
            isOneToOne: false
            referencedRelation: 'tweets'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'likes_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'users'
            referencedColumns: ['id']
          },
        ]
      }
      retuits: {
        Row: {
          created_at: string
          tweet_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          tweet_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          tweet_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'retuits_tweet_id_fkey'
            columns: ['tweet_id']
            isOneToOne: false
            referencedRelation: 'tweets'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'retuits_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'users'
            referencedColumns: ['id']
          },
        ]
      }
      tweets: {
        Row: {
          comments: number
          content: string
          created_at: string
          id: string
          image_url: string | null
          likes: number
          retuits: number
          user_id: string
        }
        Insert: {
          comments?: number
          content: string
          created_at?: string
          id?: string
          image_url?: string | null
          likes?: number
          retuits?: number
          user_id: string
        }
        Update: {
          comments?: number
          content?: string
          created_at?: string
          id?: string
          image_url?: string | null
          likes?: number
          retuits?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'tweets_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'users'
            referencedColumns: ['id']
          },
        ]
      }
      users: {
        Row: {
          avatar_url: string | null
          banner_url: string | null
          biography: string | null
          birthday: string | null
          created_at: string
          email: string
          followers: number | null
          following: number | null
          gender_id: number | null
          id: string
          location: string | null
          name: string
          password: string | null
          phone: number | null
          username: string
          web_site: string | null
        }
        Insert: {
          avatar_url?: string | null
          banner_url?: string | null
          biography?: string | null
          birthday?: string | null
          created_at?: string
          email?: string
          followers?: number | null
          following?: number | null
          gender_id?: number | null
          id: string
          location?: string | null
          name?: string
          password?: string | null
          phone?: number | null
          username?: string
          web_site?: string | null
        }
        Update: {
          avatar_url?: string | null
          banner_url?: string | null
          biography?: string | null
          birthday?: string | null
          created_at?: string
          email?: string
          followers?: number | null
          following?: number | null
          gender_id?: number | null
          id?: string
          location?: string | null
          name?: string
          password?: string | null
          phone?: number | null
          username?: string
          web_site?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'users_gender_id_fkey'
            columns: ['gender_id']
            isOneToOne: false
            referencedRelation: 'genders'
            referencedColumns: ['id']
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_user_posts_and_retweets: {
        Args: {
          user_uuid: string
        }
        Returns: {
          action_user_id: string
          name: string
          username: string
          avatar_url: string
          biography: string
          following: number
          followers: number
          tweet_id: string
          content: string
          image_url: string
          comments: number
          retuits: number
          likes: number
          created_at: string
          post_type: string
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, 'public'>]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema['Tables'] & PublicSchema['Views'])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] &
        PublicSchema['Views'])
    ? (PublicSchema['Tables'] &
        PublicSchema['Views'])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema['Enums']
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema['Enums']
    ? PublicSchema['Enums'][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema['CompositeTypes']
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes']
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes'][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema['CompositeTypes']
    ? PublicSchema['CompositeTypes'][PublicCompositeTypeNameOrOptions]
    : never
