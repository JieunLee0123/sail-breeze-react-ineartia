import React from "react";
import FundingType from "./label/FundingType";
import RewardType from "./label/RewardType";
import Area from "./label/Area";
// import Like from "./button/Like";

const Card = () => {
    return (
        <article className="w-full sm:w-[340px] flex flex-col mb-5 shadow-md">
            <div className="bg-gray_04">
                <div className="h-[240px] p-[10px]">
                    <div className="flex flex-row gap-1">
                        <FundingType text="우리동네펀딩" />
                        <RewardType text="쿠폰형" />
                    </div>
                </div>
            </div>
            <div>
                <div className="px-4 pt-5">
                    <Area text="경북 칠곡군" />
                    <div className="flex flex-row justify-between mt-4 mb-1">
                        <h3 className="text-2xl font-bold">
                            므므흐스 부엉이버거
                        </h3>
                        {/* <Like /> */}
                    </div>
                    <h3 className="text-gray_03 font-medium">
                        대구 근교 수제버거 맛집
                    </h3>
                    <div className="flex flex-row justify-between my-6 text-lg font-bold text-gray_03">
                        <p className="text-blue_02">연 9%</p>
                        <p>6개월</p>
                        <p>1,200만원</p>
                    </div>
                    <p className="text-right text-sm font-medium">
                        <span className="text-blue_02">10.0%</span> 달성
                    </p>
                </div>

                <div className="h-2 bg-gray_bg mt-2">
                    <div></div>
                </div>
            </div>
        </article>
    );
};

export default Card;
