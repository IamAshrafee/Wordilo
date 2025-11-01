/**
 * USAGE MANUAL
 *
 * This is a reusable TextareaBox component that is compatible with react-hook-form.
 *
 * PROPS
 * - id (string, required): The id of the textarea.
 * - name (string, required): The name of the textarea, used for form handling.
 * - label (string, required): The label for the textarea.
 * - rows (number, optional): The number of rows for the textarea. Defaults to 4.
 * - placeholder (string, optional): The placeholder text for the textarea.
 * - icon (React.Component, optional): The icon to display inside the textarea.
 * - error (string, optional): The error message to display.
 * - optional (boolean, optional): Whether the textarea is optional.
 * - ...props: Any other props will be spread to the textarea element.
 *
 * EXAMPLE
 *
 * import { useForm } from "react-hook-form";
 * import TextareaBox from "./TextareaBox";
 * import { ChatBubbleLeftRightIcon } from "@heroicons/react/16/solid";
 *
 * function MyForm() {
 *   const {
 *     register,
 *     handleSubmit,
 *     formState: { errors },
 *   } = useForm();
 *
 *   const onSubmit = (data) => {
 *     console.log(data);
 *   };
 *
 *   return (
 *     <form onSubmit={handleSubmit(onSubmit)}>
 *       <TextareaBox
 *         id="description"
 *         name="description"
 *         label="Description"
 *         placeholder="Enter a description"
 *         icon={ChatBubbleLeftRightIcon}
 *         error={errors.description?.message}
 *         {...register("description", { required: "Description is required" })}
 *       />
 *       <button type="submit">Submit</button>
 *     </form>
 *   );
 * }
 */

import React from "react";

const TextareaBox = React.forwardRef(
  (
    {
      id,
      name,
      label,
      rows = 2,
      placeholder,
      icon: Icon,
      error,
      optional = false,
      ...props
    },
    ref
  ) => {
    return (
      <div>
        <div className="flex justify-between">
          <label
            htmlFor={id}
            className="block text-sm/6 font-medium text-gray-900 dark:text-white"
          >
            {label}
          </label>
          {optional && (
            <span
              id={`${id}-optional`}
              className="text-sm/6 text-gray-500 dark:text-gray-400"
            >
              Optional
            </span>
          )}
        </div>
        <div className="mt-1 grid grid-cols-1">
          <textarea
            id={id}
            name={name}
            rows={rows}
            placeholder={placeholder}
            ref={ref}
            className={`col-start-1 row-start-1 block w-full rounded-md bg-white py-1.5 pr-3 pl-10 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:pl-9 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500 ${
              error &&
              "text-red-900 outline-red-300 placeholder:text-red-300 focus:outline-red-600 dark:text-red-400 dark:outline-red-500/50 dark:placeholder:text-red-400/70 dark:focus:outline-red-400"
            }`}
            {...props}
          />
          {Icon && (
            <Icon
              aria-hidden="true"
              className="pointer-events-none col-start-1 row-start-1 ml-3 mt-2 size-5 self-start text-gray-400 sm:size-4 dark:text-gray-500"
            />
          )}
        </div>
        {error && (
          <p id={`${id}-error`} className="mt-2 text-sm text-red-600 dark:text-red-400">
            {error}
          </p>
        )}
      </div>
    );
  }
);

TextareaBox.displayName = "TextareaBox";

export default TextareaBox;
