const readUser = (userDB: any, decrypt: Function) => {
    return async function read(info: any) {
        let data = [];
        const { id, page } = info;

        if (id) {
            //select one with id
            const res = await userDB.selectOne(id);
            if (res.rowCount > 0) {
                const items = res.rows;
                for (let i = 0; i < items.length; i++) {
                    const e = items[i];

                    data.push({
                        id: e.id,
                        name: e.name,
                        email: e.email,
                        role: e.role,
                        password: e.password ? decrypt(e.password) : null,
                        createdAt: e.createdAt,
                        updatedAt: e.updatedAt
                    });
                }
            }
        } else {
            //select all
            const res = await userDB.selectAll(page);
            if (res.rowCount > 0) {
                const items = res.rows;
                for (let i = 0; i < items.length; i++) {
                    const e = items[i];

                    data.push({
                        id: e.id,
                        name: e.name,
                        email: e.email,
                        role: e.role,
                        password: e.password ? decrypt(e.password) : null,
                        createdAt: e.createdAt,
                        updatedAt: e.updatedAt
                    });
                }
            }
        }
        return data;
    };
};

export default readUser;
