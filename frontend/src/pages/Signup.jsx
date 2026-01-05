import React from "react";
import { Link } from "react-router-dom";
const Signup = () => {
  const [formData, setFormData] = React.useState({
    username: "",
    password: "",
  });
    const handleSubmit = () => {
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  }
  return (
    <div className="bg-[#030303] min-h-screen text-white flex flex-col items-center justify-center gap-4">
      <div className="text-white">SignUp Page</div>
      <div>
        <form onSubmit={() => handleSubmit()} className="flex flex-col gap-4 ">
          <input
            type="text"
            placeholder="Username"
            value={formData.username}
            onChange={(e) =>
              setUsername({username: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Password"
            value={formData.confirmPassword}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <button
            onClick={() => handleSubmit()}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
