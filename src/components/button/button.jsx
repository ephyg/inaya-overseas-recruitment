import React from "react";

function Button({ className, icon, onClick, iconSize, text }) {
  return (
    <>
      <button
        onClick={onClick}
        className={` rounded-md font-roboto flex justify-center items-center bg-btncol ${className}`}
      >
        <div className="flex justify-center gap-2 items-center text-white font-semibold">
          {text}
          {icon != null &&
            React.createElement(icon, {
              size: iconSize,
              className: `font-bold`,
            })}
        </div>
      </button>
    </>
  );
}

export default Button;
