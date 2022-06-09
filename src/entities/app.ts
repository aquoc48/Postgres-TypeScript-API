import _ from "../functions/app";

import makeUser from "./make-user";

const makeUsers = makeUser(_.enc);

const entity = {
  makeUsers,
};

export default entity;
