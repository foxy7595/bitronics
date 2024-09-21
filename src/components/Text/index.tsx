import React from "react";

const sizes = {
  textxs: "text-[12px] font-normal not-italic",
  textmd: "text-[14px] font-normal not-italic",
  textlg: "text-[16px] font-normal not-italic",
  textxl: "text-[18px] font-normal not-italic",
};

export type TextProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  as,
  size = "textmd",
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-900 font-notosanscjkjp ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
