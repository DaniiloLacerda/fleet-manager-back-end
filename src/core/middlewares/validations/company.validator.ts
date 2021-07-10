import Joi from '@hapi/joi';
import { ArgTypes, validateRules } from './base/validationsTypes';

export const companyValidator: validateRules = {
  requestValidation: {
    argType: ArgTypes.Body,
    rules: Joi.object({
      name: Joi.string().required(),
      cnpj: Joi.string().required().min(14).max(14),
      street: Joi.string().max(60),
      number: Joi.string().max(5),
      state: Joi.string().max(2),
      city: Joi.string().max(30),
      neighborhood: Joi.string().max(30)
    })
  }
};
