export interface Entry {
  id: number | string;
  email?: string;
  body: string;
  created_by: string;
  created_at: Date;
  updated_at: Date;
}

export interface User {
  name: string;
  email: string;
  image?: string;
}
