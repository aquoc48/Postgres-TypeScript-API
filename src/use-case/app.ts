import entity from '../entities/app';
import userDB from '../data-access/user/app';
import _ from '../functions/app';

import addUser from './createUser';
import readUser from './readUser';

const addUsers = addUser(entity.makeUsers, userDB);
const readUsers = readUser(userDB, _.dec);

const userUC = {
    addUsers,
    readUsers
};

export default userUC;
