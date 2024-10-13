"use client";
import { Heading, Img } from "@/components";
import Link from "next/link";
import React, { useState } from "react";
import { MdClose } from "react-icons/md";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(0);

  const handleOpen = () => {
    setIsOpen(1);
    document.body.style.overflow = "hidden";
  };
  const handleClose = () => {
    setIsOpen(2);
    setTimeout(() => {
      setIsOpen(0);
      document.body.style.overflow = "auto";
    }, 300);
  };
  return (
    <div className={` ${isOpen ? "fixed w-screen" : "sticky"} top-0 z-50`}>
      <div className="flex items-center relative z-50  w-full justify-between gap-5 bg-white-a700 self-stretch px-[100px] md:px-[30px]  py-4 sm:px-5 ">
        <Link href="/">
          <Img
            src="img_logo.png"
            width={182}
            height={30}
            alt="Logo"
            className="h-[30px] w-[12%] min-w-[183px] object-contain"
          />
        </Link>
        {!isOpen ? (
          <Img
            src="img_tdesign_menu_application.svg"
            width={50}
            height={50}
            alt="Tdesignmenu"
            onClick={handleOpen}
            className="h-[50px] w-[50px] cursor-pointer"
          />
        ) : (
          <MdClose
            onClick={handleClose}
            className="w-[50px] h-[50px] text-gray-900 cursor-pointer"
          />
        )}
      </div>

      {isOpen !== 0 && (
        <div className=" relative z-40">
          <div
            className={`absolute  bg-white-a700 pt-[30px] h-[calc(100vh_-_80px)]  ${isOpen == 2
              ? " animate-hide-menu"
              : isOpen == 1
                ? "animate-show-menu"
                : ""
              } overflow-x-hidden overflow-y-auto  left-0 right-0 top-0 m-auto flex flex-1 flex-col items-center gap-[50px] sm:gap-[26px] px-14 md:px-5`}
          >
            <div className="container-xs relative z-20  animate-show-menu-item flex flex-col gap-[52px] sm:gap-[26px]">
              <div className="flex flex-col hover:opacity-70 transition-opacity duration-300 items-start gap-1">
                <Link href="/service" onClick={handleClose}>
                  {" "}
                  <div className="flex flex-wrap items-center gap-5 self-stretch">
                    <Heading
                      size="headingxs"
                      as="h1"
                      className="text-[32px] font-bold text-gray-900 md:text-[28px] sm:text-[20px] "
                    >
                      サービス
                    </Heading>
                    <Heading
                      as="h2"
                      className="font-urbanist text-[20px] sm:text-[15px] font-medium tracking-[0.60px] text-indigo-100"
                    >
                      Service
                    </Heading>
                  </div>
                </Link>
                <Link href="/service" className="hover:opacity-70 transition-opacity duration-300" onClick={handleClose}>
                  <Heading
                    as="h3"
                    className="text-[20px] sm:text-[16px] font-medium text-gray-900"
                  >
                    <span className="block sm:hidden">
                      システム開発事業 / 先端技術開発事業 / ソフトウェア品質保証
                    </span>
                    <span className="hidden sm:block">
                      システム開発事業 <br />
                      先端技術開発事業 <br />
                      ソフトウェア品質保証
                    </span>
                  </Heading>
                </Link>
              </div>
              <Link href="/mission" className="hover:opacity-70 transition-opacity duration-300" onClick={handleClose}>
                <div className="flex flex-wrap items-center gap-5">
                  <Heading
                    size="headingxs"
                    as="h4"
                    className="text-[32px] font-bold text-gray-900 md:text-[28px] sm:text-[20px]"
                  >
                    企業理念
                  </Heading>
                  <Heading
                    as="h5"
                    className="font-urbanist text-[20px] font-medium tracking-[0.60px] text-indigo-100"
                  >
                    Misson
                  </Heading>
                </div>
              </Link>
              <Link href="/works" className="hover:opacity-70 transition-opacity duration-300" onClick={handleClose}>
                <div className="flex flex-wrap items-start gap-5">
                  <Heading
                    size="headingxs"
                    as="h6"
                    className="self-center text-[32px] font-bold text-gray-900 md:text-[28px] sm:text-[20px]"
                  >
                    制作実績
                  </Heading>
                  <Heading
                    as="p"
                    className="mt-3.5 font-urbanist text-[20px] font-medium tracking-[0.60px] text-indigo-100"
                  >
                    Works
                  </Heading>
                </div>
              </Link>
            </div>

            <div className="container-xs pb-5 relative z-20 animate-show-menu-item flex flex-col gap-[50px] sm:gap-[26px]">
              <Link href="/about" className="hover:opacity-70 transition-opacity duration-300" onClick={handleClose}>
                <div className="flex flex-wrap items-start gap-5">
                  <Heading
                    size="headingxs"
                    as="h2"
                    className="self-center text-[32px] font-bold text-gray-900 md:text-[28px] sm:text-[20px]"
                  >
                    会社概要
                  </Heading>
                  <Heading
                    as="p"
                    className="mt-3.5 font-urbanist text-[20px] font-medium tracking-[0.60px] text-indigo-100"
                  >
                    About
                  </Heading>
                </div>
              </Link>
              <div className="flex flex-wrap items-start gap-5">
                <Heading
                  size="headingxs"
                  as="h2"
                  className="self-center text-[32px] font-bold text-gray-900 md:text-[28px] sm:text-[20px]"
                >
                  採用情報
                </Heading>
                <Heading
                  as="p"
                  className="mt-3.5 font-urbanist text-[20px] font-medium tracking-[0.60px] text-indigo-100"
                >
                  Recruit
                </Heading>
              </div>
              <div className="flex flex-wrap items-center gap-5">
                <Heading
                  size="headingxs"
                  as="h2"
                  className="text-[32px] font-bold text-gray-900 md:text-[28px] sm:text-[20px]"
                >
                  お問い合わせ
                </Heading>
                <Heading
                  as="p"
                  className="font-urbanist text-[20px] font-medium tracking-[0.60px] text-indigo-100"
                >
                  Contact
                </Heading>
              </div>
              <div className="flex flex-wrap items-center gap-5">
                <Heading
                  size="headingxs"
                  as="h2"
                  className="text-[32px] font-bold text-gray-900 md:text-[28px] sm:text-[20px]  whitespace-nowrap"
                >
                  プライバシーポリシー
                </Heading>
                <Link href="Privacy" target="_blank" rel="noreferrer">
                  <Heading
                    as="p"
                    className="font-urbanist text-[20px] font-medium tracking-[0.60px] text-indigo-100"
                  >
                    Privacy
                  </Heading>
                </Link>
              </div>
            </div>

            <img
              src="/images/haft-logo-vertical.png"
              alt="Haft logo"
              className="absolute animate-show-menu-item bottom-0 right-0 z-10 w-[40%] sm:w-[50%]"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
