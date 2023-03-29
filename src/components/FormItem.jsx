import React from "react";

const FormItem = ({item}) => {
  return (
    <div className="flex flex-col justify-start gap-2">
      <label className="text-left">{item}</label>
      <input type={item} className="border p-2 mb-2 md:m-0" />
    </div>
  );
};

export default FormItem;
