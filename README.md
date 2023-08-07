# Full-Stack Single Page Application 
* with Laravel 9, MySQL, Vue.js, Inertia, Jetstreamm, React.js, Breeze and Docker<br />

<br />

## Installation

jetstream - vue ( default )<br />
breeze - react<br />
[tailwind](https://blog.sailscasts.com/how-I-setup-tailwindcss-and-sails)<br />

<br />

## 기록

- jetstream 은 vue 가 디폴트라서 설치할 때 react 로 설정을 해야할 듯함<br />
- 후에 breeze 와 react 를 같이 설치함, 그러자 jetstream 인식안되고 breeze 만 인식하는 것 같음<br />
- jetstream, breeze 둘다 ineartia 와 같이 설치할 수 있다.<br />
- jetstream, breeze 둘다 인증기능을 구현, breeze 보다 jetstream 이 기능이 훨씬 많다.<br />

<br />

- store -> 403 forbidden error POST 도무지 왜이런지 모르겠음 xdebug 설치해서 확인해봐야할 듯

<br />

## 트러블 슈팅

1. alias sail='[ -f sail ] && bash sail || bash vendor/bin/sail'<br />
2. [http://0.0.0.0:5173/@vite/client net::ERR_ADDRESS_INVALID](https://joeyantonisse.medium.com/laravel-9-sail-vite-err-address-invalid-3bb50f2887bd)<br />
3. [Failed to load resource: net::ERR_ADDRESS_INVALID](https://stackoverflow.com/questions/76360158/failed-to-load-resource-neterr-address-invalid-when-including-js-file-in-lara)<br />

<br />

## 참고링크

[set]<br />
[How to Build a Full-Stack Single Page Application](https://www.freecodecamp.org/news/how-to-build-a-full-stack-single-page-application-with-laravel-mysql-vue-and-docker/) - Laravel 9, MySQL, Vue.js, Inertia, Jetstream and Docker<br />
[Laravel, Docker, Breeze and ReactJS easy startup](https://grafxflow.co.uk/blog/mvc/laravel-docker-breeze-reactjs-easy-startup) - breeze & react<br /><br />

[Breeze & Jetstream | 인증]<br />
[Laravel Breeze vs Laravel Jetstream](https://www.twilio.com/blog/laravel-breeze-vs-laravel-jetstream)<br />
[laravel breeze 와 jetstream](https://e2xist.tistory.com/771) - 둘 중 하나 선택하여 사용하는 듯<br /><br />

[모델]<br />
[모델 팩토리](https://laravel.kr/docs/8.x/database-testing#%EB%AA%A8%EB%8D%B8%20%ED%8C%A9%ED%86%A0%EB%A6%AC%20%EC%A0%95%EC%9D%98)<br />
