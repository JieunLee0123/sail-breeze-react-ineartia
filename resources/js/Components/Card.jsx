import React from "react";

const Card = () => {
    return (
        <article className="w-full sm:w-[340px] flex flex-col sm:flex-row lg:flex-col">
            <div className="bg-gray_04">
                <div className="flex flex-row h-[240px]">
                    <div>우리동네펀딩</div>
                    <div>쿠폰형</div>
                </div>
            </div>
            <div>
                <div>경북 칠곡군</div>
                <div className="flex flex-row justify-between">
                    <h3>므므흐스 부엉이버거</h3>
                    <button>하트</button>
                </div>
                <h3>대구 근교 수제버거 맛집</h3>
                <div className="flex flex-row justify-between">
                    <p>연 9%</p>
                    <p>6개월</p>
                    <p>1,200만원</p>
                </div>
                <div>
                    <p>10.0% 달성</p>
                    <div></div>
                </div>
            </div>
        </article>
    );
};

export default Card;
