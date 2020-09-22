export default {
    endpoints: {
        TASK_API: {
            getList: {
                uri: 'https://test.megapolis-it.ru/api/list',
                method: 'GET'
            },
            create: {
                uri: 'https://test.megapolis-it.ru/api/list',
                method: 'POST'
            },
            update: {
                uri: (id : number) => `https://test.megapolis-it.ru/api/list/${id}`,
                method: 'POST'
            },
            delete: {
                uri: (id : number) => `https://test.megapolis-it.ru/api/list/${id}`,
                method: 'DELETE'
            },
        }
    }
}