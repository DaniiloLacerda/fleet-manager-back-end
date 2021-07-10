import { ICompany } from '@interfaces/models/company.interface';
import { BaseRepository } from './base/base.repository';
import { Company } from './schemas/company.schema';

export class CompanyRepository extends BaseRepository<ICompany> {
  constructor() {
    const company = new Company();
    super(company.model);
  }
}
