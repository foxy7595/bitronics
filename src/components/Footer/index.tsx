import { Text, Heading, Img } from "./..";
import Link from "next/link";
import React from "react";

interface Props {
  className?: string;
}

export default function Footer({ ...props }: Props) {
  return (
    <footer
      {...props}
      className={`${props.className} flex flex-col w-full mb-[60px]`}
    >
      <div className=" flex max-w-[1200px] mx-auto w-full flex-col items-start gap-[0px] md:px-5 sm:gap-[30px]">
        <div className="flex items-start justify-between gap-5 self-stretch md:flex-col">
          <Img
            src="img_logomark_bg_1.png"
            width={100}
            height={100}
            alt="Logomarkbgone"
            className="h-[100px] w-[100px] object-cover "
          />
          <div className="flex w-[74%] items-start justify-between gap-5 self-center md:w-full  ">
            <div className="flex w-[54%] flex-col gap-[30px] md:w-full">
              <Link href="/service">
                <div className="flex flex-col items-start gap-2.5">
                  <div className="flex flex-wrap items-center gap-5 sm:flex-col sm:items-start sm:gap-2">
                    <Heading
                      as="h6"
                      className="!text-[18px] font-bold text-gray-900"
                    >
                      サービス
                    </Heading>
                    <Heading
                      size="texts"
                      as="p"
                      className="font-urbanist !text-[13px] font-medium tracking-[0.39px] text-indigo-100"
                    >
                      Service
                    </Heading>
                  </div>
                  <Text
                    as="p"
                    className="!text-[14px] font-medium text-gray-900 whitespace-nowrap"
                  >
                    <span className=" flex sm:hidden md:flex gap-1">
                      <Link
                        href="/service/03"
                        className="hover:opacity-70 transition-opacity duration-300"
                      >
                        {" "}
                        システム開発事業{" "}
                      </Link>{" "}
                      /{" "}
                      <Link
                        href="/service/05"
                        className="hover:opacity-70 transition-opacity duration-300"
                      >
                        {" "}
                        先端技術開発事業{" "}
                      </Link>{" "}
                      /{" "}
                      <Link
                        href="/service/09"
                        className="hover:opacity-70 transition-opacity duration-300"
                      >
                        {" "}
                        ソフトウェア品質保証{" "}
                      </Link>
                    </span>
                    <span className=" hidden sm:block md:hidden">
                      <Link
                        href="/service/03"
                        className="hover:opacity-70 transition-opacity duration-300"
                      >
                        {" "}
                        システム開発事業{" "}
                      </Link>{" "}
                      <br />
                      <Link
                        href="/service/05"
                        className="hover:opacity-70 transition-opacity duration-300"
                      >
                        {" "}
                        先端技術開発事業{" "}
                      </Link>{" "}
                      <br />
                      <Link
                        href="/service/09"
                        className="hover:opacity-70 transition-opacity duration-300"
                      >
                        {" "}
                        ソフトウェア品質保証{" "}
                      </Link>
                    </span>
                  </Text>
                </div>
              </Link>
              <Link href="/mission">
                <div className="flex flex-wrap items-center gap-5 sm:flex-col sm:items-start sm:gap-2">
                  <Heading
                    as="h6"
                    className="!text-[18px] font-bold text-gray-900"
                  >
                    企業理念
                  </Heading>
                  <Heading
                    size="texts"
                    as="p"
                    className="font-urbanist !text-[13px] font-medium tracking-[0.39px] text-indigo-100"
                  >
                    Misson
                  </Heading>
                </div>
              </Link>
              <Link href="/work">
                <div className="flex flex-wrap items-center gap-5 sm:flex-col sm:items-start sm:gap-2">
                  <Heading
                    as="h6"
                    className="!text-[18px] font-bold text-gray-900"
                  >
                    制作実績
                  </Heading>
                  <Heading
                    size="texts"
                    as="p"
                    className="font-urbanist !text-[13px] font-medium tracking-[0.39px] text-indigo-100"
                  >
                    Works
                  </Heading>
                </div>
              </Link>
            </div>
            <div className="flex w-[34%] flex-col gap-[30px] self-center md:w-full sm:flex-col sm:items-start sm:gap-2">
              <Link href="/about">
                {" "}
                <div className="flex flex-wrap items-center gap-5 sm:flex-col sm:items-start sm:gap-2">
                  <Heading
                    as="h6"
                    className="!text-[18px] font-bold text-gray-900"
                  >
                    会社概要
                  </Heading>
                  <Heading
                    size="texts"
                    as="p"
                    className="font-urbanist !text-[13px] font-medium tracking-[0.39px] text-indigo-100"
                  >
                    About
                  </Heading>
                </div>
              </Link>
              <Link href="/recruit">
                <div className="flex flex-wrap items-center gap-5 sm:flex-col sm:items-start sm:gap-2">
                  <Heading
                    as="h6"
                    className="!text-[18px] font-bold text-gray-900"
                  >
                    採用情報
                  </Heading>
                  <Heading
                    size="texts"
                    as="p"
                    className="font-urbanist !text-[13px] font-medium tracking-[0.39px] text-indigo-100 sm:flex-col sm:items-start sm:gap-2"
                  >
                    Recruit
                  </Heading>
                </div>
              </Link>
              <Link href="/contact">
                <div className="flex flex-wrap items-center gap-5 sm:flex-col sm:items-start sm:gap-2">
                  <Heading
                    as="h6"
                    className="!text-[18px] font-bold text-gray-900"
                  >
                    お問い合わせ
                  </Heading>
                  <Heading
                    size="texts"
                    as="p"
                    className="font-urbanist !text-[13px] font-medium tracking-[0.39px] text-indigo-100"
                  >
                    Contact
                  </Heading>
                </div>
              </Link>
              <Link href="/privacy">
                <div className="flex  items-center gap-5 sm:flex-col sm:items-start sm:gap-2">
                  <Heading
                    as="h6"
                    className="!text-[18px] font-bold text-gray-900 whitespace-nowrap"
                  >
                    プライバシーポリシー
                  </Heading>
                  <Link href="Privacy" target="_blank" rel="noreferrer">
                    <Heading
                      size="texts"
                      as="p"
                      className="font-urbanist !text-[13px] font-medium tracking-[0.39px] text-indigo-100"
                    >
                      Privacy
                    </Heading>
                  </Link>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <Text
          size="textxs"
          as="p"
          className="!text-[12px] font-normal text-gray-900"
        >
          All rights reserved 2024 © Bitronics
        </Text>
      </div>
    </footer>
  );
}
