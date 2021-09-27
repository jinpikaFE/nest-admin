export type UserTypeOpt = {
  email: string;
  phone: number;
  avatar?: any;
  userName: string;
  password: string;
  roleName?: string;
  address?: string[];
  detailAddress?: string;
  currentAuthority?: string;
  type?: 'account' | 'phone';
  registerTime?: string;
};
