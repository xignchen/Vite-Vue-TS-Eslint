import axios from "../../../utils/request/request.ts"
export const getUserList = (params) => {
  // return axios.get('/user/list', { params })
    return Promise.resolve({
        code: 1,
        message: '请求成功',
        total: 8,
        data: [
            {
                id: '1',
                username: 'admin',
                name: '张三',
                idCard: '123456789012345678',
                phone: '12345678901',
                address: 'No. 189, Grove St, Los Angeles'
            },
            {
                id: '2',
                username: 'user',
                name: '李四',
                idCard: '987654321098765432',
                phone: '9876543210',
                address: 'No. 189, Grove St, Los Angeles'
            },
            {
                id: '3',
                username: 'guest',
                name: '王五',
                idCard: '55555555555555555',
                phone: '555555555',
                address: 'No. 189, Grove St, Los Angeles'
            },
            {
                id: '4',
                username: 'test',
                name: '赵六',
                idCard: '66666666666666666',
                phone: '666666666',
                address: 'No. 189, Grove St, Los Angeles'
            },
            {
                id: '5',
                username: 'demo',
                name: '孙七',
                idCard: '77777777777777777',
                phone: '777777777',
                address: 'No. 189, Grove St, Los Angeles'
            },
            {
                id: '6',
                username: 'example',
                name: '周八',
                idCard: '88888888888888888',
                phone: '888888888',
                address: 'No. 189, Grove St, Los Angeles'
            },
            {
                id: '7',
                username: 'sample',
                name: '吴九',
                idCard: '99999999999999999',
                phone: '999999999',
                address: 'No. 189, Grove St, Los Angeles'
            },
            {
                id: '8',
                username: 'dummy',
                name: '郑十',
                idCard: '00000000000000000',
                phone: '000000000',
                address: 'No. 189, Grove St, Los Angeles'
            }
        ]
    })
}

export default {
    getUserList
}
