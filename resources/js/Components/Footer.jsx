import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray_02 footer">
      <div className="container px-4 py-10 lg:py-20 flex flex-col gap-5 text-white mx-auto">
        <div className="lg:flex justify-between">
          <img className="w-[200px] lg:w-[22%] mb-10" src="https://benefitplus.kr/static/dist/fb23fdbc46f2af634804e316c398821c.png" alt="" />

          <div className="flex flex-col sm:flex-row gap-7 lg:w-[70%]">
            <div className="sm:w-[50%] lg:w-[33%]">
              <span className="text-sm leading-6 font-semibold">고객센터 02-733-0703</span>
              <p className="text-sm leading-6">평일 10시 ~ 18시 (점심 12시 ~ 13시)</p>
              <p className="text-sm leading-6">대표메일 info@benefitplus.kr</p>
              <p className="text-sm leading-6">대출문의 loan@benefitplus.kr</p>
            </div>
            <div className="sm:w-[25%] lg:w-[33%]">
              <span className="text-sm leading-6 font-semibold">이용약관</span>
              <p className="text-sm leading-6">개인정보 처리 방침</p>
              <p className="text-sm leading-6">온라인연계투자약관</p>
              <p className="text-sm leading-6">온라인연계대출약관</p>
            </div>
            <div className="sm:w-[25%] lg:w-[33%]">
              <span className="text-sm leading-6 font-semibold">전자금융거래기본약관</span>
              <p className="text-sm leading-6">신용정보활용체제</p>
              <p className="text-sm leading-6">리워드 발송 동의</p>
            </div>
          </div>
        </div>

        <hr class="h-[2px] my-8 bg-gray_03 border-0" />

        <div className="flex flex-col sm:flex-row gap-7 sm:gap-10 lg:justify-between">
          <div className="hidden lg:block lg:w-[15%]" style={{ width: "15%" }}></div>

          <div className="flex flex-col gap-7 sm:flex-row w-full sm:justify-between lg:flex lg:w-[70%]">
            <div className="w-full sm:w-[50%]">
              <span className="text-sm leading-6 font-semibold">플랫폼 사업자 (주)비플러스</span>
              <p className="text-sm leading-6">비플러스 대표 : 박기범</p>
              <p className="text-sm leading-6">사업자번호 : 476-81-00550</p>
              <p className="text-sm leading-6">온라인투자연계금융업 등록번호 2022-71</p>
              <p className="text-sm leading-6">통신판매업 2017-서울성동-1271</p>
              <p className="text-sm leading-6">주소 : 서울특별시 종로구 새문안로3길 7, 한글회관 303호</p>
            </div>
            <div className="w-full sm:w-[50%]">
              <span className="text-sm leading-6 font-semibold text-blue_02">(주)비플러스는 투자원금과 수익을 보장하지 않으며
                투자손실에 대한 책임은 모두 투자자에게 있습니다.</span>
              <p className="text-sm leading-6 mt-3">대출금리 연 19.9%이내(연체금리 약정금리 +3%이내, 법정최고금리 20%이내), 취급 수수료 외 기타 부대비용은 없습니다.(다만, 대출실행건에 한하여 신용조회비가 발생할 수 있습니다.)중도상환 시 수수료가 발생할 수 있습니다.중개수수료를 요구하거나 받는 행위는 불법입니다.대출받기 전 꼭 필요한지 생각해 보세요.대출 시 귀하의 신용등급이 하락할 수 있습니다.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
