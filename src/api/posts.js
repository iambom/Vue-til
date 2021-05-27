// 학습 노트 조작과 관련된 CRUD API 함수 파일
import { posts } from './index';

function fetchPosts() {
  return posts.get('/');
}

function createPost(postData) {
  return posts.post('/', postData);
}

export { fetchPosts, createPost };
