import React from "react";
import { type FormInputProps } from "../../types/formTypes";

export const FormInput: React.FC<FormInputProps> = ({
  id,
  label,
  type = "text",
  placeholder,
  register,
  registerOptions,
  error,
  helperText
}) => {
  return (
    <div className="space-y-3">
      <label htmlFor={id} className="block text-base font-medium text-gray-700">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={`block w-full px-5 py-4 text-base rounded-lg border ${
          error
            ? "border-red-300 focus:border-red-500 focus:ring-red-500"
            : "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
        } shadow-sm focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-colors`}
        {...register(id, registerOptions)}
      />
      {error && (
        <p className="mt-2 text-sm text-red-600 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          {error.message}
        </p>
      )}
      {!error && helperText && (
        <p className="mt-2 text-sm text-gray-500">{helperText}</p>
      )}
    </div>
  );
}; 