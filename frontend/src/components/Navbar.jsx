import React from "react";

const Navbar = () => {
  return (
    <div
      className="
        sticky
        top-5
        px-5
        w-[95%]
        max-w-6xl
        h-16
        flex
        items-center
        justify-between
        text-2xl
        text-[#E7F2EF]
        rounded-full
        shadow-xl
        backdrop-blur-md
        z-50
                mx-auto

      "
      style={{
        fontFamily: "Algance, sans-serif",
        backgroundColor: "#2B2730",
      }}
    >
      <img
        width="48"
        className="hover:scale-110 transition-transform duration-500 cursor-pointer"
        src="https://img.icons8.com/fluency/96/meal.png"
        alt="meal"
      />
      <div className="text-4xl">Dabba-Logger</div>
      <img
        width="48"
        className="hover:scale-110 transition-transform duration-500 cursor-pointer"
        src="https://img.icons8.com/fluency/96/user-male-circle--v1.png"
        alt="user-male-circle--v1"
      />
    </div>
  );
};

export default Navbar;
