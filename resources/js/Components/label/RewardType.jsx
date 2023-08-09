import { useState, useEffect } from "react";

const RewardType = ({ text }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [color, setColor] = useState("");

    useEffect(() => {
        const calculatedColor = bgColor(text);
        setColor(calculatedColor);
        setIsLoading(false);
    }, [text]);

    function bgColor(text) {
        switch (text) {
            case "쿠폰형":
                return "gray_02";
            case "금리형":
                return "blue_01";
            default:
                return "sub_pink";
        }
    }

    return (

        <>
            {isLoading ? (
                <div className="bg-sub_pink">Loading..</div>
            ) : (
                <div
                    className={`p-2 py-[6px] bg-${color} text-xs text-white font-extrabold`}
                >
                    {text}
                </div>
            )}
        </>
    );
};

export default RewardType;
