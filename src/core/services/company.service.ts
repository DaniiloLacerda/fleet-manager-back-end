import { ICompany } from '@interfaces/models/company.interface';
import { CompanyRepository } from '@repositories/company.repository';
import { BaseService } from './base/baseService';

export class CompanyService extends BaseService<ICompany> {
  constructor(public repository: CompanyRepository) {
    super(repository);
  }
}
