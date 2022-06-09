const query = (conn: any, models: any) => {
    return Object.freeze({
        createUser,
        checkEmailExist,
        selectOne,
        selectAll
    });

    async function checkEmailExist(data: any) {
        try {
            const pool = await conn();

            const { email } = data;

            const res = await new Promise((resolve) => {
                const sql = `SELECT id FROM "Users" WHERE "email" = $2;`;
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

    async function selectAll() {
        try {
            const pool = await conn();

            const res = await new Promise((resolve) => {
                const sql = `SELECT * FROM "Users";`;
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
};

export default query;
