import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface PayrollInterface {
  id?: string;
  salary: number;
  bonus?: number;
  deductions?: number;
  pay_date: any;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface PayrollGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
}
