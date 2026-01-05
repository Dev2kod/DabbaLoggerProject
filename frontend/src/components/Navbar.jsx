import React from "react"

const Navbar = () => {
  return (
    <div
      className="
        absolute
        top-5
        left-1/2
        -translate-x-1/2
        px-8
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
      "
      style={{
        fontFamily: "Algance, sans-serif",
        backgroundColor: "#2B2730",
      }}
    >
      <div>Logo</div>
      <div>Dabba-Logger</div>
      <div>Profile</div>
    </div>
  )
}

export default Navbar
