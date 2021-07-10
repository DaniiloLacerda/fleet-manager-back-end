import Joi from '@hapi/joi';
import { validateRules, ArgTypes } from './base/validationsTypes';

export const userValidator: validateRules = {
  requestValidation: {
    argType: ArgTypes.Body,
    rules: Joi.object({
      name: Joi.string().required(),
      username: Joi.string().required(),
      password: Joi.string().min(8).required(),
      companyId: Joi.string().required()
    })
  }
};

export const userUpdateValidator: validateRules = {
  requestValidation: {
    argType: ArgTypes.Body,
    rules: Joi.object({
      name: Joi.string().required(),
      username: Joi.string().required()
    })
  }
};

export const userChangePasswordValidator: validateRules = {
  requestValidation: {
    argType: ArgTypes.Body,
    rules: Joi.object({
      oldPassword: Joi.string().min(8).required(),
      newPassword: Joi.string().min(8).required()
    })
  }
};
