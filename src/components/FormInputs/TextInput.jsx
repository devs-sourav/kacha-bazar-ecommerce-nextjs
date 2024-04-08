import React from 'react'

export default function TextInput({
    label,
    name,
    register,
    errors,
    isRequired = true,
    type = "text",
    className = "sm:col-span-2",
    defaultValue=""
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
          <input
            {...register(`${name}`, { required: isRequired })}
            type={type}
            name={name}
            id={name}
            defaultValue={defaultValue}
            autoComplete={name}
            className="dark:bg-slate-800 bg-slate-50 block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-slate-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6 placeholder:dark:text-slate-500 dark:text-white"
            placeholder={`Type the ${label.toLowerCase()}`}
          />
          {errors[`${name}`] && (
            <span className="text-sm text-red-600 ">{label} is required</span>
          )}
        </div>
      </div>
    );
  }
