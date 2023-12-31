import React from "react";

const Input = ({ id, onChange, value, label, type, name }) => {
  return (
    <div className="relative">
      <input
        onChange={onChange}
        value={value}
        type={type}
        name={name}
        id={id}
        className="block w-full px-6 pt-6 pb-1 text-black rounded-md appearance-none bg-gray-50 text-md focus:outline-none focus:ring-0 peer invalid:border-b-1"
        placeholder=" "
      />
      <label
        htmlFor={id}
        className="
        absolute 
        text-md
      text-black
        duration-150 
        transform 
        -translate-y-3 
        scale-75 
        top-4 
        z-10 
        origin-[0] 
        left-6
        peer-placeholder-shown:scale-100 
        peer-placeholder-shown:translate-y-0 
        peer-focus:scale-75
        peer-focus:-translate-y-3
      "
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
