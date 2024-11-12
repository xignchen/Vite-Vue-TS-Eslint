import axios from "../../../utils/request/request.ts";

export const getMessageList = () => {
  // return axios.get("/message/list");
    return Promise.resolve({
        code: 1,
        message: "success",
        total: 1,
        data: [
            {
                id: 1,
                title: '测试消息1',
                content: '这是一条测试消息',
                createTime: '2022-01-01 12:00:00'
            },
        ]
    })
};
