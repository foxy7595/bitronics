"use client";
import React from "react";

const variants = {
  primary: "border-[#AABAC8] border border-solid   ",
} as const;
const sizes = {
  xs: "h-[30px] w-[30px]",
} as const;

export type RadioProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  "size" | "prefix" | "type" | "onChange"
> &
  Partial<{
    className: string;
    name: string;
    label: string;
    id: string;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
  }>;
const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      className = "",
      name = "",
      label = "",
      id = "radio_id",
      variant = "primary",
      size = "xs",
      ...restProps
    },
    ref
  ) => {
    return (
      <div className="inline-flex items-center">
        <label
          className={
            "relative flex items-center cursor-pointer border-[#AABAC8] border border-solid   rounded-full " +
            className
          }
          htmlFor={id}
        >
          <input
            className={`peer h-[30px] w-[30px] cursor-pointer appearance-none rounded-full opacity-0 border border-slate-300 checked:border-slate-400 transition-all ${
              (size && sizes[size]) || ""
            } `}
            ref={ref}
            type="radio"
            name={name}
            {...restProps}
            id={id}
            aria-labelledby={id + "-label"}
          />
          <span className="absolute bg-blue-800 w-5 h-5 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
        </label>

        <label
          className="ml-2 text-slate-600 cursor-pointer text-[16px]"
          htmlFor={id}
        >
          {label}
        </label>
      </div>
    );
  }
);

{
  /* <div className="inline-flex items-center">
<label className="relative flex items-center cursor-pointer" for="html">
  <input
    name="framework"
    type="radio"
    className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all"
    id="html"
  />
  <span className="absolute bg-slate-800 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
</label>
<label
  className="ml-2 text-slate-600 cursor-pointer text-sm"
  for="html"
>
  HTML
</label>
</div> */
}

export { Radio };
