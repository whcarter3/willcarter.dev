export interface Entry {
  id: number | string;
  email?: string;
  body: string;
  created_by: string;
  created_at: Date | string;
  updated_at: Date | string;
}

export interface User {
  name: string;
  email: string;
  image?: string;
}
