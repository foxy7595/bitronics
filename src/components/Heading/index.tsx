"use client";
import React, { useEffect, useState } from "react";
import { take } from "lodash";

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
  textxs: "text-[12px] font-normal not-italic",
  textlg: "text-[16px] font-normal not-italic",
  textxl: "text-[18px] font-normal not-italic",
};
let interval: NodeJS.Timeout | undefined = undefined;
export type HeadingProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
  binary?: boolean;
  textAnimate?: boolean;
  delay?: number;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "headingxs",
  as,
  binary,
  textAnimate,
  delay,
  ...restProps
}) => {
  const Component = as || "h6";

  const [text, setText] = useState("");
  const textValue = children as string;

  useEffect(() => {
    if (interval) {
      clearInterval(interval);
    }
    if (binary) {
      let i = 0;
      setTimeout(() => {
        const interval = setInterval(() => {
          if (i === textValue.length + 1) {
            clearInterval(interval);

            return;
          } else {
            setText(textValue.slice(0, i));
            i++;
          }
        }, textValue.length > 10 ? 50 : 80);
      }, delay || 0);
    } else if (textAnimate) {
      let i = 0;
      setTimeout(() => {
        const interval = setInterval(() => {
          if (i === textValue.length + 1) {
            clearInterval(interval);
          } else {
            setText(textValue.slice(0, i));
            i++;
          }
        }, 100);
      }, delay || 0);
    }

    return () => clearInterval(interval);
  }, [children, binary, textAnimate]);

  const mixStringCharacter = (text1: string): string => {
    return take(text1.split(""), Math.min(textValue.length - text.length, 8))
      .map((char) => {
        return text1[Math.floor(Math.random() * text.length)];
      })
      .join("");
  };

  const binaryText = (): string => {
    const randomBinary = () =>
      Math.floor(Math.random() * 2) + 1 == 1 ? "0" : "1";
    return mixStringCharacter(
      Array(8)
        .fill(0)
        .map(() => randomBinary())
        .join("")
    );
  };
  return (
    <Component
      className={`text-gray-900 font-notosanscjkjp  ${className} ${sizes[size]}`}
      {...restProps}
    >
      {binary ? text + binaryText() : textAnimate ? text : children}
    </Component>
  );
};

export { Heading };
