export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      comments: {
        Row: {
          id: number;
          body: string | null;
          created_at: string | null;
          creator_uuid: string;
          post_id: number;
        };
        Insert: {
          id?: number;
          body?: string | null;
          created_at?: string | null;
          creator_uuid?: string;
          post_id: number;
        };
        Update: {
          id?: number;
          body?: string | null;
          created_at?: string | null;
          creator_uuid?: string;
          post_id?: number;
        };
      };
      likes: {
        Row: {
          id: number;
          created_at: string | null;
          creator_uuid: string;
          post_id: number;
        };
        Insert: {
          id?: number;
          created_at?: string | null;
          creator_uuid?: string;
          post_id: number;
        };
        Update: {
          id?: number;
          created_at?: string | null;
          creator_uuid?: string;
          post_id?: number;
        };
      };
      posts: {
        Row: {
          id: number;
          image_url: string | null;
          description: string | null;
          created_at: string | null;
          creator_uuid: string;
          archived_at: string | null;
        };
        Insert: {
          id?: number;
          image_url?: string | null;
          description?: string | null;
          created_at?: string | null;
          creator_uuid?: string;
          archived_at?: string | null;
        };
        Update: {
          id?: number;
          image_url?: string | null;
          description?: string | null;
          created_at?: string | null;
          creator_uuid?: string;
          archived_at?: string | null;
        };
      };
      users: {
        Row: {
          first_name: string | null;
          last_name: string | null;
          image_url: string | null;
          uuid: string;
          created_at: string | null;
        };
        Insert: {
          first_name?: string | null;
          last_name?: string | null;
          image_url?: string | null;
          uuid: string;
          created_at?: string | null;
        };
        Update: {
          first_name?: string | null;
          last_name?: string | null;
          image_url?: string | null;
          uuid?: string;
          created_at?: string | null;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
}
