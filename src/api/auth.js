// 로그인, 회원가입, 회원 탈퇴
import { instance } from './index';
function registerUser(userData) {
  return instance.post('signup', userData);
}

function loginUser(userData) {
  return instance.post('login', userData);
}

export { registerUser, loginUser };
