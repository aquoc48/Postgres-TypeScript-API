import userUC from '../use-case/app';

import userAdd from './createUser';

const userCreates = userAdd(userUC.addUsers);

const userController = {
    userCreates
};

export default userController;
