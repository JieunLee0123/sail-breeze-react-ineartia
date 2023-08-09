import React from "react";

const Button = ({ btnText, btnOnClick, btnColor, btnSize, btnDisabled }) => {
  return (
    <button className={`bg-${btnColor} font-bold py-2 px-4 rounded text-black`}>
      {btnText}
    </button>
  );
};

export default Button;
