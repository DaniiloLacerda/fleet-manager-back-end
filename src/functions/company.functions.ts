import { Database } from '@config/db';
import { CompanyFactory } from '@factories/company.factory';
import { handlerValidator } from '@middlewares/validations/base/handlerValidator';
import { companyValidator } from '@middlewares/validations/company.validator';
import { StatusHandler } from '@utils/responseHandler';
import { StatusCodes } from 'http-status-codes';

export const create = handlerValidator({
  validate: companyValidator,
  handler: async event => {
    try {
      const database = new Database();
      await database.createConnection();

      const companyService = CompanyFactory.createInstance();

      const data = await companyService.create(event.body);
      return StatusHandler.handlerSuccess({
        statusCode: StatusCodes.CREATED,
        data
      });
    } catch (error) {
      return StatusHandler.handleError({ data: error }, 'Company');
    }
  }
});
