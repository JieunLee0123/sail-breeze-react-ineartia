import React from "react";

const Subject = ({ data, setDisplayedCardData }) => {
    const allShowHandler = () => {
        setDisplayedCardData(data);
    };
    return (
        <div className="flex flex-row justify-between">
            <h2 className="text-2xl font-bold text-gray_01">투자 상품</h2>
            <div
                className="cursor-pointer flex items-center justify-center gap-2 text-sm text-gray_03 font-semibold py-3"
                onClick={allShowHandler}
            >
                <span>전체보기</span>
                <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                </svg>
            </div>
        </div>
    );
};

export default Subject;
