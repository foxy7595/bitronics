"use client";
import React from "react";

const variants = {
  primary:
    "border-blue_gray-200 border border-solid checked:border-blue_gray-200 checked:border-[3px] checked:border-solid checked:bg-blue_gray-200 checked:focus:bg-blue_gray-200 checked:focus:border-blue_gray-200 checked:hover:bg-blue_gray-200 checked:hover:border-blue_gray-200",
} as const;
const sizes = {
  xs: "h-[36px] w-[36px] sm:h-[28px] sm:w-[28px]",
} as const;

type CheckboxProps = Omit<
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
    onChange: Function;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    onClick: () => void;
  }>;
const CheckBox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className = "",
      name = "",
      label = "",
      id = "checkbox_id",
      onChange,
      variant = "primary",
      size = "xs",
      ...restProps
    },
    ref
  ) => {
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      if (onChange) onChange(e?.target?.checked);
    };

    return (
      <>
        <div className={className}>
          <input
            className={` ${(size && sizes[size]) || ""} ${
              (variant && variants[variant]) || ""
            }`}
            ref={ref}
            type="checkbox"
            name={name}
            onChange={handleChange}
            id={id}
            {...restProps}
          />
          {!!label && <label htmlFor={id}>{label}</label>}
        </div>
      </>
    );
  }
);

export { CheckBox };
