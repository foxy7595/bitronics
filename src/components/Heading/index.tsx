import React from "react";

const sizes = {
  texts: "text-[13px] font-medium",
  text2xl: "text-[64px] font-medium md:text-[48px]",
  text3xl: "text-[300px] font-medium md:text-[48px]",
  headingxs: "text-[18px] font-bold",
  headings: "text-[20px] font-bold",
  headingmd: "text-[24px] font-bold md:text-[22px]",
  headinglg: "text-[32px] font-bold md:text-[30px] sm:text-[28px]",
  headingxl: "text-[36px] font-bold md:text-[34px] sm:text-[32px]",
  heading2xl: "text-[48px] font-semibold italic md:text-[44px] sm:text-[38px]",
  heading3xl: "text-[90px] font-bold md:text-[48px]",
  heading4xl: "text-[150px] font-extrabold md:text-[48px]",
};

export type HeadingProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "headingxs",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-900 font-notosanscjkjp ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
