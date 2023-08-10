# Full-Stack Single Page Application 
* with Laravel 9, MySQL, Inertia, Jetstreamm ( Vue ), Breeze ( React ), Sail<br />

<br />

## Installation

[빌드 & 세일 업]<br />
1. /vendor/bin/sail up -d<br />

<br />

[in laravel.test container]<br />
1. npm install<br />
2. npm run dev<br />
3. php artisan migration<br />

<br />

[localhost]<br />
1. localhost/test<br />

<br />

## Start

1. alias sail='[ -f sail ] && bash sail || bash vendor/bin/sail'
2. sail up
3. [in container] npm ci
3. [in container] npm run dev

<br />

## Library
1. icons<br />
  [vite-plugin-svgr](https://www.npmjs.com/package/vite-plugin-svgr)<br />

2. tailwind<br />
  [How I setup Sails and Tailwind CSS](https://blog.sailscasts.com/how-I-setup-tailwindcss-and-sails)<br />
  [tailwind](https://tailwindcss.com/)<br />
  [material-tailwind](https://www.material-tailwind.com/)<br />

3. pagination<br />
  [react-js-pagination](https://velog.io/@eunjitech/react-js-pagination-pagination-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0)<br />

<br />

## 기록

[jetstream & breeze]<br />
- jetstream 은 vue 가 디폴트라서 설치할 때 react 로 설정을 해야함<br />
- 후에 breeze 와 react 를 같이 설치함, 그러자 jetstream 인식안되고 breeze 만 인식함<br />
- jetstream, breeze 둘다 ineartia 와 같이 설치할 수 있다.<br />
- jetstream, breeze 둘다 인증기능을 구현, breeze 보다 jetstream 이 기능이 훨씬 많다.<br />

<br />

<br />

## 트러블 슈팅

1. alias sail='[ -f sail ] && bash sail || bash vendor/bin/sail'<br />
2. [http://0.0.0.0:5173/@vite/client net::ERR_ADDRESS_INVALID](https://joeyantonisse.medium.com/laravel-9-sail-vite-err-address-invalid-3bb50f2887bd)<br />
3. [Failed to load resource: net::ERR_ADDRESS_INVALID](https://stackoverflow.com/questions/76360158/failed-to-load-resource-neterr-address-invalid-when-including-js-file-in-lara)<br />
4. usePage must be used within the Inertia component - import { usePage } from '@inertiajs/react' 이렇게 써야함<br />

<br />

## 참고링크

[set]<br />
[How to Build a Full-Stack Single Page Application](https://www.freecodecamp.org/news/how-to-build-a-full-stack-single-page-application-with-laravel-mysql-vue-and-docker/) - Laravel 9, MySQL, Vue.js, Inertia, Jetstream and Docker<br />
[Laravel, Docker, Breeze and ReactJS easy startup](https://grafxflow.co.uk/blog/mvc/laravel-docker-breeze-reactjs-easy-startup) - breeze & react<br />

[CRUD]<br />
[Laravel Inertia js CRUD with React Tutorial](https://larainfo.com/blogs/laravel-inertia-js-crud-with-react-tutorial)<br /><br />

[Breeze & Jetstream | 인증]<br />
[Laravel Breeze vs Laravel Jetstream](https://www.twilio.com/blog/laravel-breeze-vs-laravel-jetstream)<br />
[laravel breeze 와 jetstream](https://e2xist.tistory.com/771) - 둘 중 하나 선택하여 사용하는 듯<br /><br />

[모델]<br />
[모델 팩토리](https://laravel.kr/docs/8.x/database-testing#%EB%AA%A8%EB%8D%B8%20%ED%8C%A9%ED%86%A0%EB%A6%AC%20%EC%A0%95%EC%9D%98)<br />
[$fillable](https://zetawiki.com/wiki/%EC%97%98%EB%A1%9C%ED%80%80%ED%8A%B8_$fillable)<br />

[validation]<br />
[Laravel Artisan Generator Command: The make:request Command](https://stillat.com/blog/2016/12/07/laravel-artisan-generator-command-the-makerequest-command) - App\Http\Requests<br />

[Inertia & React]<br />
[Inertia](https://inertiajs.com/)<br />
[[usePage] Accessing shared data](https://inertiajs.com/shared-data)<br />
[[useForm] Form helper](https://inertiajs.com/forms)<br />
[Server-side & Client-side](https://inertiajs.com/server-side-rendering) - SSR, SPA use both<br />