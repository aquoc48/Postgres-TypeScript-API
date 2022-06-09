import userUC from '../use-case/app';

import userAdd from './createUser';
import userRead from './readUser';

const userCreates = userAdd(userUC.addUsers);
const userReads = userRead(userUC.readUsers);

const userController = {
    userCreates,
    userReads
};

export default userController;
