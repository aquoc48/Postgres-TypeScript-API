import entity from '../entities/app';
import userDB from '../data-access/user/app';
import _ from '../functions/app';

import addUser from './createUser';

const addUsers = addUser(entity.makeUsers, userDB);

const userUC = {
    addUsers
};

export default userUC;
