import { Document } from 'mongoose';

export interface ICompany extends Document {
  name: string;
  active: boolean;
  cnpj: string;
  street: string;
  number: string;
  state: string;
  city: string;
  neighborhood: string;
}
