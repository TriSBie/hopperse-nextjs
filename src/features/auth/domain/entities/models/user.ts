export type User = {
  id: number;
  email: string;
  password: string;
};

export type UserInsert = {
  email: string;
  password: string;
};
