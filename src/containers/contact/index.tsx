"use client";

import React, { useState } from "react";
import MainContainer from "@/components/Layout/MainContainer";

import ContactHeader from "./header";
import { Button, Heading } from "@/components";
import { CheckBox } from "@/components/CheckBox";
import { Input } from "@/components/Input";
import { Radio } from "@/components/Radio";
import { RadioGroup } from "@/components/RadioGroup";
import { TextArea } from "@/components/TextArea";
import HeadingAnimation from "../headingAnimation";
import ReCAPTCHA from "react-google-recaptcha";

import Modal from "react-modal";
import { useRouter } from "next/navigation";

const customStyles = {
  content: {
    top: "35%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "450px",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

export default function ContactPage() {
  const [require, setRequire] = useState<string>("");

  const [contact, setContact] = useState<string>("");

  const [company, setCompany] = useState<string>("");

  const [firstName, setFirstName] = useState<string>("");

  const [lastName, setLastName] = useState<string>("");

  const [email, setEmail] = useState<string>("");

  const [phone, setPhone] = useState<string>("");

  const [agree, setAgree] = useState<boolean>(false);

  const [verify, setVerify] = useState<boolean>(false);

  const [isSubmit, setIsSubmit] = useState<boolean>(false);

  const [modalIsOpen, setIsOpen] = useState(false);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setIsSubmit(false);
    setRequire("");
    setContact("");
    setCompany("");
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setAgree(false);

    router.push("/");
  }

  const onSubmit = async () => {
    setIsSubmit(true);

    if (!require || !contact || !company || !email || !phone || !agree) {
      return;
    }

    const data = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        require,
        contact,
        company,
        firstName,
        lastName,
        email,
        phone,
        agree,
      }),
    }).then((res) => res.json());
    openModal();
  };

  React.useEffect(() => {
    // Ensure the component is mounted before scrolling
    if (typeof window !== "undefined") {
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, 300);

      setTimeout(() => {
        setIsLoading(true);
      }, 1500);
    }
  }, []);

  const onChange = (value: string) => {
    console.log(value);
  };

  return (
    <MainContainer>
      <ContactHeader />

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="relative">
          {/* <button
            onClick={closeModal}
            className="absolute -top-6 -right-4 bg-red-500"
          >
            <IoClose size={24} />
          </button> */}
        </div>
        <h2 className="text-[24px] font-bold text-gray-900 text-center">
          お問い合わせいただき、誠にありがとうございます。
        </h2>
        <div className="text-[16px] font-normal mt-4 text-gray-900 text-center  ">
          ご入力いただいた内容を確認し、担当者より折り返しご連絡させていただきます。
          少々お待ちいただけますようお願い申し上げます。{" "}
        </div>
      </Modal>

      <div className=" mt-[80px] sm:mt-8 mx-[100px] sm:mx-6 md:mx-6 ">
        <HeadingAnimation
          missionTitle={"Contact"}
          missionSubtitle="お問い合わせ"
        />
      </div>
      <div className="flex flex-col gap-[90px] mt-6 mx-[100px] sm:mx-6 md:mx-6 mb-8">
        <div className="flex flex-col items-start gap-9 ">
          <Heading
            size="textlg"
            as="p"
            className="text-[16px] font-normal leading-[200%] text-black-900"
          >
            <>
              ご依頼・ご相談など各種お問い合わせは、以下のフォームに必要事項をご記入ください。
              <br />
              担当者より折り返しご連絡いたします。
            </>
          </Heading>
          <div className="flex w-[68%] flex-col items-start gap-[30px] self-end lg:w-full">
            <div className="flex flex-col gap-5 self-stretch">
              <div className="flex items-end gap-5">
                <Button className="mt-2 flex h-[26px] min-w-[44px] flex-row items-center justify-center bg-light_blue-a200 px-2.5 text-center text-[12px] text-gray-900">
                  必須
                </Button>
                <Heading
                  size="headings"
                  as="h4"
                  className="text-[16px] font-bold text-gray-900"
                >
                  お問い合わせ内容
                </Heading>
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex  md:flex-col">
                  <RadioGroup
                    name="require"
                    className="flex  flex-wrap  md:flex-col gap-y-6 gap-x-8"
                    onChange={setRequire}
                  >
                    <Radio
                      value="system"
                      name="require"
                      id="system"
                      label="システム開発について"
                      className="flex gap-5 text-[16px] text-gray-900"
                    />
                    <Radio
                      value="advanced"
                      name="require"
                      id="advanced"
                      label="先端技術開発について"
                      className="flex gap-5 text-[16px] text-gray-900"
                    />
                    <Radio
                      value="quality"
                      name="require"
                      id="quality"
                      label="ソフトウェア品質保証について"
                      className="flex gap-5 text-[16px] text-gray-900"
                    />
                    <Radio
                      value="general"
                      name="require"
                      id="general"
                      label="業務全般・その他"
                      className="flex gap-5 text-[16px] text-gray-900"
                    />
                    <Radio
                      value="recruit"
                      name="require"
                      id="recruit"
                      label="採用について"
                      className=" flex gap-5 text-[16px] text-gray-900"
                    />
                  </RadioGroup>
                </div>
                {isSubmit && require === "" && (
                  <div className="text-[16px] text-red-500 italic">
                    必須項目を選択してください
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-5 self-stretch">
              <div className="flex items-end gap-5">
                <Button className="mt-2 flex h-[26px] min-w-[44px] flex-row items-center justify-center bg-light_blue-a200 px-2.5 text-center text-[12px] text-gray-900">
                  必須
                </Button>
                <Heading
                  size="headings"
                  as="h5"
                  className="text-[16px] font-bold text-gray-900"
                >
                  お問い合わせ詳細
                </Heading>
              </div>
              <TextArea
                onChange={setContact}
                name="frameeighty"
                placeholder={`ご依頼・ご相談などお問い合わせ内容の詳細をご記入ください`}
                className="min-h-[136px] !outline-none  active:outline-none focus:outline-none !border-none active:border-none  bg-[#F3F7F8] p-2.5 !text-[16px] placeholder:!text-[16px]  !text-gray-900 !placeholder:text-[#AABAC8]"
              />
              {isSubmit && contact === "" && (
                <div className="text-[16px] text-red-500 italic">
                  必須項目を入力してください
                </div>
              )}
            </div>
            <div className="flex flex-col gap-[30px] self-stretch">
              <div className="flex flex-col items-start gap-5">
                <Heading
                  size="headings"
                  as="h6"
                  className="text-[16px] font-bold !text-gray-900"
                >
                  会社名
                </Heading>
                <Input
                  name="company"
                  placeholder={`株式会社 Bitronics`}
                  className="flex h-[44px] items-center justify-center self-stretch text-[16px] text-blue_gray-200 placeholder:!text-[16px] placeholder:text-[#AABAC8]"
                  classNameInput=" bg-[#F3F7F8] px-2.5 "
                  onChange={(e) => setCompany(e.target.value)}
                />
                {isSubmit && company === "" && (
                  <div className="text-[16px] text-red-500 italic">
                    必須項目を入力してください
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-5">
                  <Button className="flex h-[26px] min-w-[44px] flex-row items-center justify-center bg-light_blue-a200 px-2.5 text-center text-[12px] !text-gray-900">
                    必須
                  </Button>
                  <Heading
                    size="headings"
                    as="h6"
                    className="text-[16px] font-bold text-gray-900"
                  >
                    お名前
                  </Heading>
                </div>
                <div className="flex gap-5 md:flex-col">
                  <Input
                    name="firstName"
                    placeholder={`山田`}
                    className="flex h-[44px] w-full items-center justify-center   text-[16px] text-blue_gray-200 placeholder:!text-[16px] placeholder:text-[#AABAC8]"
                    classNameInput="px-2.5 bg-[#F3F7F8]"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <Input
                    name="lastName"
                    placeholder={`太郎`}
                    className="flex h-[44px] w-full items-center justify-center  text-[16px] text-blue_gray-200 placeholder:!text-[16px] placeholder:text-[#AABAC8]"
                    classNameInput="px-2.5 bg-[#F3F7F8]"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-5">
                  <Button className="flex h-[26px] min-w-[44px] flex-row items-center justify-center bg-light_blue-a200 px-2.5 text-center text-[12px] text-gray-900  ">
                    必須
                  </Button>
                  <Heading
                    size="headings"
                    as="h6"
                    className="text-[16px] font-bold text-gray-900"
                  >
                    メールアドレス
                  </Heading>
                </div>
                <Input
                  type="email"
                  name="email"
                  placeholder={`example@bitronics.io`}
                  className="flex h-[44px] items-center justify-center  text-[16px] text-blue_gray-200 placeholder:!text-[16px] placeholder:text-[#AABAC8]"
                  classNameInput="px-2.5 bg-[#F3F7F8]"
                  onChange={(e) => setEmail(e.target.value)}
                />
                {isSubmit && email === "" && (
                  <div className="text-[16px] text-red-500 italic">
                    必須項目を入力してください
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-5">
                  <Button className="flex h-[26px] min-w-[44px] flex-row items-center justify-center bg-light_blue-a200 px-2.5 text-center text-[12px] text-gray-900">
                    必須
                  </Button>
                  <Heading
                    size="headings"
                    as="h6"
                    className="text-[16px] font-bold text-gray-900"
                  >
                    電話番号
                  </Heading>
                </div>
                <Input
                  name="phone"
                  placeholder={`00-0000-0000`}
                  className="flex h-[44px] items-center justify-center text-[16px] text-blue_gray-200 placeholder:!text-[16px] placeholder:text-[#AABAC8]"
                  classNameInput="px-2.5 bg-[#F3F7F8]"
                  onChange={(e) => setPhone(e.target.value)}
                />
                {isSubmit && phone === "" && (
                  <div className="text-[16px] text-red-500 italic">
                    必須項目を入力してください
                  </div>
                )}
              </div>
              <CheckBox
                name="個人情報保護方針の内容に同意す"
                label={
                  <span>
                    <span
                      className="underline cursor-pointer"
                      onClick={() => {
                        window.open("/privacy", "_blank");
                      }}
                    >
                      個人情報保護方針
                    </span>
                    の内容に同意する
                  </span>
                }
                id="Data"
                className="flex gap-5 py-1.5 items-center text-[16px] text-gray-900"
                onChange={(e: boolean) => setAgree(e)}
              />
            </div>
            {isLoading && (
              <ReCAPTCHA
                sitekey="6Ldw5ZYqAAAAACkpctRH2t7emUEb5Zm_HSgBIbM6"
                onChange={(token) => {
                  console.log(token);
                  setVerify(true);
                }}
              />
            )}
            <div className="flex justify-start  md:justify-center  w-full">
              <Button
                onClick={onSubmit}
                disabled={!(agree && verify)}
                className={`flex h-[44px] ${
                  agree && verify
                    ? "hover:bg-gray-900 hover:text-[#fff]"
                    : "!bg-gray-300 !text-gray-500 !border-none"
                }  transition-all duration-200 hover:border-gray-900 min-w-[300px] sm:w-full flex-row items-center justify-center rounded-[22px] border border-solid border-gray-900 px-[33px] text-center text-[16px] text-gray-900 sm:px-5`}
              >
                送信
              </Button>
            </div>
          </div>
        </div>
      </div>
    </MainContainer>
  );
}
