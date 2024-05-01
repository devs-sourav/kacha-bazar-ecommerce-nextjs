import React from "react";

export default function SelectInput({
  label,
  name,
  register,
  className = "sm:col-span-2",
  options = [],
  multiple = false
}) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 dark:text-slate-50 text-gray-900 mb-2 "
      >
        {label}
      </label>
      <div className="mt-2">
        <select
          {...register(`${name}`)}
          id={name}
          multiple = {multiple}
          name={name}
          className="dark:bg-slate-800 bg-white block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-slate-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6 placeholder:dark:text-slate-500 dark:text-white"
        >
          {options.map((option, i) => {
            return (
              <option key={i} value={option.id}>
                {option.title}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}