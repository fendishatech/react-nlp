import React from "react";
import Cta from "../../components/cta";

const POS = () => {
  return (
    <div>
      <h1 className="text-4xl">Parts of speech</h1>
      <dir className="flex gap-2">
        <textarea
          className="bg-slate-300 outline-none"
          name=""
          id=""
          cols="30"
          rows="10"
        >
          Drop Your text here
        </textarea>
      </dir>
    </div>
  );
};

export default POS;
