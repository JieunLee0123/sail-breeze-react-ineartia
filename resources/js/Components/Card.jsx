import React from "react";
import FundingType from "./label/FundingType";
import RewardType from "./label/RewardType";
import Area from "./label/Area";
import Like from "./button/Like";

// "id": 744,
//         "amount": 4500,
//         "period": 12,
//         "preview": "4대 째 가업을 이은 양잠 농가, 고니골농장",
//         "rates2": 6,
//         "ratioOfUserAmounts": 1,
//         "step": 200,
//         "title": "고니골농장의 대환자금 펀딩",
//         "thumbnail": "https://benefitplus.kr/files/investment-thumbnails/230327/ca87c4d5feb04b435e3d71ab2f75ae91839eaa25.jpg",
//         "area": "경북 칠곡군",
//         "fundingType": "한살림펀딩",
//         "rewardType": "쿠폰형",
//         "raisingAmount": 300 //모집금액

const Card = ({ cardData }) => {
    const {
        amount,
        period,
        preview,
        rates2,
        title,
        thumbnail,
        area,
        fundingType,
        rewardType,
        raisingAmount,
    } = cardData;

    const formatNumber = amount.toLocaleString();
    return (
        <article className="w-full sm:w-[340px] flex flex-col mb-5 shadow-md">
            <div
                style={{
                    backgroundImage: `url(${thumbnail})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="h-[240px] p-[10px]">
                    <div className="flex flex-row gap-1">
                        <FundingType text={fundingType} />
                        <RewardType text={rewardType} />
                    </div>
                </div>
            </div>
            <div>
                <div className="px-4 pt-5">
                    <Area text={area} />
                    <div className="flex flex-row justify-between mt-4 mb-1">
                        <h3 className="w-5/6 text-2xl font-bold">{preview}</h3>
                        <Like />
                    </div>
                    <h3 className="text-gray_03 font-medium">{title}</h3>
                    <div className="flex flex-row justify-between my-6 text-lg font-bold text-gray_03">
                        <p className="text-blue_02">연 {rates2}%</p>
                        <p>{period}개월</p>
                        <p>{formatNumber}만원</p>
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
