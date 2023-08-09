import React, { useState } from "react";

const Header = () => {
    const [menu, setMenu] = useState(false);

    const onClickMenuBtn = (e) => {
      e.preventDefault();
      setMenu(!menu)
      console.log(menu)
    }

    return (
      <header className="flex justify-center item-center">
        <nav class="bg-white border-gray-200 py-5 container px-4">
          <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="https://flowbite.com" class="flex items-center">
              <img src="https://benefitplus.kr/static/dist/233fdab569a4e34edfbb805dcaae673e.png" class="h-6 sm:h-9" alt="Flowbite Logo" />
            </a>

            <div class="flex items-center lg:order-2">
              <a href="#" class="text-gray_01 bg-gray_05 font-semibold rounded-md text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2">로그인</a>
              <a href="#" class="text-gray_01 bg-yellow_01 font-semibold rounded-md text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2">회원가입</a>
              <button onClick={onClickMenuBtn} data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
            </div>

            <div class={`${menu ? 'hidden' : ''} justify-between items-center w-full lg:flex lg:w-auto lg:order-1`} id="mobile-menu-2">
              <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <a href="#" class="block py-2 pr-4 pl-3 text-gray_0 border-b border-gray-100 lg:hover:text-gray_01 lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:border-gray_02 font-semibold">투자하기</a>
                </li>
                <li>
                  <a href="#" class="block py-2 pr-4 pl-3 text-gray_0 border-b border-gray-100 lg:hover:text-gray_01 lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:border-gray_02 font-semibold">우리동네펀딩</a>
                </li>
                <li>
                  <a href="#" class="block py-2 pr-4 pl-3 text-gray_0 border-b border-gray-100 lg:hover:text-gray_01 lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:border-gray_02 font-semibold">한살림펀딩</a>
                </li>
                <li>
                  <a href="#" class="block py-2 pr-4 pl-3 text-gray_0 border-b border-gray-100 lg:hover:text-gray_01 lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:border-gray_02 font-semibold">대출하기</a>
                </li>
                <li>
                  <a href="#" class="block py-2 pr-4 pl-3 text-gray_0 border-b border-gray-100 lg:hover:text-gray_01 lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:border-gray_02 font-semibold">문의하기</a>
                </li>
                <li>
                  <a href="#" class="block py-2 pr-4 pl-3 text-gray_0 border-b border-gray-100 lg:hover:text-gray_01 lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:border-gray_02 font-semibold">스토리</a>
                </li>
                <li>
                  <a href="#" class="block py-2 pr-4 pl-3 text-gray_0 border-b border-gray-100 lg:hover:text-gray_01 lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:border-gray_02 font-semibold">비플러스</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
};

export default Header;
