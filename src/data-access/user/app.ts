import conn from "../app";
import models from "../sequelize/models/index";
import query from "./query";

const userDB = query(conn, models);

export default userDB;
