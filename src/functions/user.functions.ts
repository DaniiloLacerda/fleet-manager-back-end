import { Database } from '@config/db';
import { UserFactory } from '@factories/user.factory';
import { handlerValidator } from '@middlewares/validations/base/handlerValidator';
import {
  userChangePasswordValidator,
  userUpdateValidator,
  userValidator
} from '@middlewares/validations/user.validator';
import { ITEM_UPDATED } from '@utils/constants';
import { StatusCodes } from 'http-status-codes';
import { StatusHandler } from '../core/utils/responseHandler';

export const create = handlerValidator({
  validate: userValidator,
  handler: async event => {
    try {
      const database = new Database();
      await database.createConnection();

      const userService = UserFactory.createInstance();
      const { password: pwd, ...dataUser } = await (await userService.create(event)).toJSON();

      return StatusHandler.handlerSuccess({
        statusCode: StatusCodes.CREATED,
        data: dataUser
      });
    } catch (error) {
      return StatusHandler.handleError({ data: error }, 'User');
    }
  }
});

export const update = handlerValidator({
  validate: userUpdateValidator,
  handler: async event => {
    try {
      const database = new Database();
      await database.createConnection();

      const userService = UserFactory.createInstance();
      const { body } = event;
      const { id } = event.pathParameters;

      await userService.updateById(id, body);

      return StatusHandler.handlerSuccess({
        statusCode: StatusCodes.OK,
        data: { message: ITEM_UPDATED }
      });
    } catch (error) {
      return StatusHandler.handleError({ data: error });
    }
  }
});

export const changePassword = handlerValidator({
  validate: userChangePasswordValidator,
  handler: async event => {
    try {
      const database = new Database();
      await database.createConnection();
      const userService = UserFactory.createInstance();

      const {
        body: { oldPassword, newPassword }
      } = event;

      const { id } = event.pathParameters;
      await userService.changePassword(id, oldPassword, newPassword);
      return StatusHandler.handlerSuccess({
        statusCode: StatusCodes.OK,
        data: { message: ITEM_UPDATED }
      });
    } catch (error) {
      return StatusHandler.handleError({ data: error });
    }
  }
});
