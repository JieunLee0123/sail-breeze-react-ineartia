import React, { useState } from "react";
import { ReactComponent as FavoriteDefault } from "../../../../assets/img/FavoriteDefault.svg";
import { ReactComponent as FavoriteActive } from "../../../../assets/img/FavoriteActive.svg";

const Like = () => {
    const [isLike, setIsLike] = useState(false);

    const likeHandler = () => {
        setIsLike(!isLike);
    };
  
    return (
        <button
            className="w-8 h-8 rounded border-[1px] border-gray_04 flex justify-center items-center"
            onClick={likeHandler}
        >
            <div className="w-5 h-5">
                {isLike ? <FavoriteActive /> : <FavoriteDefault />}
            </div>
        </button>
    );
};

export default Like;
