import React from "react";

const Cta = ({ title }) => {
  return (
    <div className="">
      <h1 className="text-4xl">{title}</h1>
      <dir className="flex gap-2">
        <textarea name="" id="" cols="30" rows="10">
          Drop Your text here
        </textarea>
      </dir>
    </div>
  );
};

export default Cta;
