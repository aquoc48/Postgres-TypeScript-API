import userUC from '../use-case/app';

import userAdd from './createUser';
import userRead from './readUser';
import userDelete from './deleteUser';

const userCreates = userAdd(userUC.addUsers);
const userReads = userRead(userUC.readUsers);
const userDeletes = userDelete(userUC.deleteUsers);

const userController = {
    userCreates,
    userReads,
    userDeletes
};

export default userController;
