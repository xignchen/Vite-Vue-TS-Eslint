import useRouter from '../router'

const router = useRouter;

// 退出登录
export const loginOut = () => {
    localStorage.clear();
    router.push('/login').then(r => r);
};

// 获取token
export const getToken = () => {
  const token = localStorage.getItem('token');
  if (token) {
     return token;
  }
  return null;
};
