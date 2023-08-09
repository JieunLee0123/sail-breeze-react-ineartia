import React from "react";

const RewardType = ({ text, color }) => {
    return (
        <div className="px-2 py-[6px] bg-blue_02 text-sm text-white font-extrabold">
            {text}
        </div>
    );
};

export default RewardType;
