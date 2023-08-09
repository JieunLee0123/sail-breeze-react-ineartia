import React from "react";

const Subject = () => {
    return (
        <div className="flex flex-row justify-between">
          <h2 className="text-2xl font-bold text-gray_01">투자 상품</h2>
          <a href="/page?p=campaign-list" class="cursor-pointer flex items-center justify-center gap-2 text-sm text-gray_03 font-semibold py-3">
            <span>전체보기</span>
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
        </div>
    );
};

export default Subject;
