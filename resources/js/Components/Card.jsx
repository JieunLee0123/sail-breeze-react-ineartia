import React from "react";
import FundingType from "./label/FundingType";
import RewardType from "./label/RewardType";
import Area from "./label/Area";
// import Like from "./button/Like";

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

    const formatAmount = amount.toLocaleString();

    function percent(raisingAmount, amount) {
        const calculatePercent = (raisingAmount / amount) * 100;
        return calculatePercent;
    }

    const formattedPercent = percent(raisingAmount, amount).toFixed(1);

    return (
        <article className="w-full lg:w-[32%] flex flex-col sm:flex-row lg:flex-col mb-7 shadow-md cursor-pointer">
            <div
                style={{
                    backgroundImage: `url(${thumbnail})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
                className="sm:w-[50%] lg:w-auto"
            >
                <div className="h-[240px] p-[10px]">
                    <div className="flex flex-row gap-1">
                        <FundingType text={fundingType} />
                        <RewardType text={rewardType} />
                    </div>
                </div>
            </div>
            <div className="sm:w-[50%]  lg:w-auto">
                <div className="px-4 pt-5">
                    <Area text={area} />
                    <div className="flex flex-row justify-between mt-4 mb-1">
                        <h3 className="w-5/6 text-lg lg:text-xl font-bold truncate">
                            {preview}
                        </h3>
                        {/* <Like /> */}
                    </div>
                    <h3 className="text-gray_03 font-medium text-sm lg:text-base truncate">
                        {title}
                    </h3>
                    <div className="flex flex-row justify-between my-7 text-lg lg:text-xl font-bold text-gray_03">
                        <p className="text-blue_02">연 {rates2}%</p>
                        <p>{period}개월</p>
                        <p>{formatAmount}만원</p>
                    </div>
                    <p className="text-right text-sm font-medium">
                        <span className="text-blue_02">
                            {formattedPercent}%
                        </span>{" "}
                        달성
                    </p>
                </div>

                <div className="h-2 bg-gray_bg mt-2 relative">
                    <div
                        style={{ width: `${formattedPercent}%` }}
                        className="bg-yellow_00 absolute h-full"
                    />
                </div>
            </div>
        </article>
    );
};

export default Card;
