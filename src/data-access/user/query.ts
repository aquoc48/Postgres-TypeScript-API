const query = (conn: any, models: any) => {
    return Object.freeze({
        createUser,
        checkEmailExist,
        selectOne,
        selectAll,
        deleteUser,
        checkEmailExistUpdate,
        putUser
    });

    async function checkEmailExist(data: any) {
        try {
            const pool = await conn();

            const { email } = data;

            const res = await new Promise((resolve) => {
                // select the user with the email passed as data
                const sql = `SELECT id FROM "Users" WHERE "email" = $1;`;
                const params = [email];
                pool.query(sql, params, (err: Error, res: Response) => {
                    pool.end();

                    if (err) resolve(err);
                    resolve(res);
                });
            });

            return res;
        } catch (e) {
            console.log('Error: ', e);
        }
    }

    async function createUser(data: Object) {
        try {
            const User = models.User;
            const user = await User.create(data);
            return user;
        } catch (e) {
            console.log('error:', e);
        }
    }

    async function selectOne(id: number) {
        try {
            const pool = await conn();

            const res = await new Promise((resolve) => {
                const sql = `SELECT * FROM "Users" WHERE id = $1;`;
                const params = [id];
                pool.query(sql, params, (err: Error, res: Response) => {
                    pool.end();

                    if (err) resolve(err);
                    resolve(res);
                });
            });

            return res;
        } catch (e) {
            console.log('Error: ', e);
        }
    }

    async function selectAll(limit: number, offset: number) {
        try {
            const pool = await conn();

            const res = await new Promise((resolve) => {
                const sql = `SELECT * FROM "Users";`;
                // LIMIT n OFFSET m
                // const query = [limit, offset];
                pool.query(sql, (err: Error, res: Response) => {
                    pool.end();

                    if (err) resolve(err);
                    resolve(res);
                });
            });

            return res;
        } catch (e) {
            console.log('Error: ', e);
        }
    }

    async function deleteUser(id: string) {
        try {
            // user sequelize
            const User = models.User;
            const res = await User.destroy({
                where: {
                    id
                }
            });
            return res;
        } catch (e) {
            console.log('error: ', e);
        }
    }

    async function checkEmailExistUpdate(data: any) {
        try {
            const pool = await conn();

            const { id, email } = data;

            const res = await new Promise((resolve) => {
                // find user with email === body.email and id != params.id, to check if email already existed on a user with different id
                const sql = `SELECT id FROM "Users" WHERE "email" = $2 AND id <> $1;`;
                const params = [id, email];
                pool.query(sql, params, (err: Error, res: Response) => {
                    pool.end();

                    if (err) resolve(err);
                    resolve(res);
                });
            });

            return res;
        } catch (e) {
            console.log('Error: ', e);
        }
    }

    async function putUser(data: any) {
        try {
            //use sequelize on update
            const User = models.User;
            const res = await User.update(
                {
                    name: data.name,
                    email: data.email,
                    password: data.password
                },
                {
                    where: {
                        id: data.id
                    }
                }
            );
            return res;
        } catch (e) {
            console.log('error: ', e);
        }
    }
};

export default query;
