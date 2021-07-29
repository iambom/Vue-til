# Vue-til

회원가입, 로그인 등 인증 정보를 서버에 전달하고 데이터를 받아와 사용자를 식별하여 CRUD를 구현하는 강의를 듣고 클론 코딩한 프로젝트입니다.   

 ## 🛠 Skill & Tool
 **`HTML5`**  **`CSS3`**  **`Javascript`**  **`Vue.js`**  **`axios`**
 
## 💡 기능
### axios 라이브러리를 통한 네트워크 통신 🔗
### 토큰을 이용한 API 인증 처리 🔑
### 브라우저 저장소를 이용한 인증값 관리 🔐
### 데이터 처리(CRUD) 📜
 
## 📖 프로젝트를 하며 공부한 것
 - **코드 스플리팅**    
  페이지를 이동할 때마다 URL을 요청하는 시점에 해당 컴포넌트의 자원을 받아오는 것을 말한다. 코드 스플리팅을 하지 않으면 페이지 처음 로딩 시 모든 페이지의 정보가 들어 있다.
    ```
    // 코드 스플리팅 전
    export default new VueRouter({
      routes: [
        {
          path: '/login',
          component: 'LoginPage',
        },
        {
          path: '/signup',
          component: 'SignupPage',
        },
      ],
    })
    ```
    
    ```
    // 코드 스플리팅 후
    export default new VueRouter({
      routes: [
        {
          path: '/login',
          component: () => import('@/views/LoginPage.vue'),
        },
        {
          path: '/signup',
          component: () => import('@/views/SignupPage');		
        },
      ],
    })
    ```
    
  
 - **async & await으로 비동기 처리**    
 async & await은 자바스크립트의 비동기 처리 패턴 중 가장 최근에 나온 문법이다. 함수 앞에 async 라는 예약어를 붙이고 함수 내부 로직 중 HTTP 통신을 하는 비동기 처리 코드 앞에 await을 붙인다.
 비동기 처리 메소드가 Promise 객체를 반환해야 한다. 
   
    ```
    // api 호출 
    function registerUser(userData) {
       return instance.post('signup', userData);
    }
    ```
   
    ```
    // SignForm.vue 
    methods: {
      async submitForm() {
        const userData = { ... };
        const { data } = await registerUser(userData);
      }
    }
    ```
    async 함수의 리턴 값에 특정 데이터를 지정해주면 그 값에 프로미스가 이행(fulfilled)된 상태로 전달된다.
   
    ```
    async fetchData() {
      const { user } = await fetchUser();
      return user;
    }
    
    fetchData(); // 결과 값은 Promise.resolve(user)
    ```
    이행된 결과 값을 처리하는 방법
    
    ```
    // 1. Promise로 처리하는 방법
    fetchData().then(user => console.log(user));
    
    // 2. async로 처리하는 방법
    async someMethod() {
      const user = await fetchData();
      console.log(user);
    }
    ```
    
   
 - **Axios 인터셉터**    
 axios로 API 요청 전 추가 로직이 있을 때 사용한다.     
 사용자 식별 후 게시글을 불러오기 위해 로그인 시 생성 됐던 토큰을 스토어에 저장 후 axios의 headers의 authorization 속성을 이용해 API 요청과 함께 전달해야 한다. 
 그러나 로그인 후 authorization 토큰을 저장한 state의 초기값이 먼저 전달되어 호출되기 때문에 authorization이 빈 값인 상태로 API 요청이 가게 된다. 
   ```
   import axios from 'axios';
   import store from '@/store/index';

   const instance = axios.create({
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Authorization: store.state.token,
      },
   });
   ```
 
   따라서 API 요청 전 스토어에 저장된 토큰을 가지고 요청을 보내기 위해 인터셉터에 추가 로직을 넣어준다.
     ```
     export function setInterceptors() {
        // 요청할 때의 인터셉터
        axios.interceptors.request.use(
          function (config) {
            // 보내기 전
            config.headers.Authorization = store.state.token;
            return config;
          },
          function (error) {
            // 보낸 후 
            return Promise.reject(error);
          },
        );

        // 응답 받을 때의 인터셉터
        axios.interceptors.response.use(
          function (response) {
            // 받기 전
            return response;
          },
          function (error) {
            // 받은 후 
            return Promise.reject(error);
          },
        );
     }
     ```
   
  