import { CompanyRepository } from '@repositories/company.repository';
import { CompanyService } from '@services/company.service';

export class CompanyFactory {
  static createInstance() {
    const repository = new CompanyRepository();
    const service = new CompanyService(repository);
    return service;
  }
}
