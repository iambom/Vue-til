// 학습 노트 조작과 관련된 CRUD API 함수 파일
import { posts } from './index';

function fetchPosts() {
  return posts.get('/');
}

function fetchPost(postId) {
  return posts.get(postId);
}

function createPost(postData) {
  return posts.post('/', postData);
}

function deletePost(postId) {
  return posts.delete(postId);
}

function editPost(postId, postData) {
  return posts.put(postId, postData);
}

export { fetchPosts, fetchPost, createPost, deletePost, editPost };
