"use client";

import { Heading, Button, Img } from "@/components";
import React from "react";
import { useInView } from "react-hook-inview";

interface Props {
  className?: string;
  jobTitle?: React.ReactNode;
  prop?: React.ReactNode;
  requiredSkills?: React.ReactNode;
  prop1?: React.ReactNode;
  candidateDescription?: React.ReactNode;
  prop2?: React.ReactNode;
  jobResponsibilities?: React.ReactNode;
  entryTitle?: React.ReactNode;
  id?: string;
}

export default function JobDescription({
  id,
  jobTitle = "PHP Laravel\n開発者",
  prop = "必須スキル",
  requiredSkills = "PHP, jQuery, JavaScript, JSON, GIT, Bootstrap, DOM, Docker, Nodejs, Laravel, ReactJS",
  prop1 = "求める人材",
  candidateDescription = "バックエンドサービスとサーバーとユーザー間のデータのやり取りを管理するPHP Laravel 開発者を募集しています。また、フロントエンド開発者によって構築された要素をアプリケーションに統合する責任もあります。そのため、フロントエンド技術に基本的な理解が必要です。",
  prop2 = "業務内容",
  jobResponsibilities = (
    <>
      <span className="font-bold mr-2">• </span>
      フロントエンド開発者によって開発されたユーザー対応の要素を統合
      <br />
      <span className="font-bold mr-2">• </span>
      効率的でテスト可能、再利用可能なPHPモジュールの構築
      <br />
      <span className="font-bold mr-2">• </span>
      複雑なパフォーマンスの問題やアーキテクチャの課題の解決
      <br />
      <span className="font-bold mr-2">• </span>
      MySQLおよびMongoDBに精通
      <br />
      <span className="font-bold mr-2">• </span>
      オブジェクト指向のPHPプログラミング、HTML5、CSS、JavaScript、MVCなどのデザインパターンに精通
      <br />
      <span className="font-bold mr-2">• </span>
      Gitなどのコードバージョニングツールの熟練した理解
      <br />
      <span className="font-bold mr-2">• </span>
      React.jsおよびその基本原則の徹底理解
      <br />
      <span className="font-bold mr-2">• </span>
      人気のあるReact.jsのワークフロー（Redux）の経験
      <br />
      <span className="font-bold mr-2">• </span>
      ECMAScriptの新しい仕様に精通
      <br />
      <span className="font-bold mr-2">• </span>
      データ構造ライブラリの経験（例：Immutable.js）
      <br />
      <span className="font-bold mr-2">• </span>
      等価なReactの知識があれば尚可
      <br />
      <span className="font-bold mr-2">• </span>
      RESTful APIに精通
      <br />
      <span className="font-bold mr-2">• </span>
      JSON Web Tokenなどのモダンな認証メカニズムの理解
      <br />
      <span className="font-bold mr-2">• </span>
      モダンなフロントエンドビルドパイプラインやツールに精通
      <br />
      <span className="font-bold mr-2">• </span>
      Babel、Webpack、NPMなどの一般的なフロントエンド開発ツールの実務経験
      <br />
      <span className="font-bold mr-2">• </span>
      Node.jsおよびそのアーキテクチャの開発経験
    </>
  ),
  entryTitle = "Entry",
  ...props
}: Props) {
  const [ref, inView] = useInView({
    threshold: 0.9,
  });

  return (
    <div
      {...props}
      className={`${props.className} flex sm:flex-col relative md:flex-col  md:gap-4 items-start`}
    >
      <div id={id} className="absolute top-[-100px] left-0 w-full h-full"></div>
      <div className=" w-[30%] md:w-full relative ">
        {inView && (
          <Heading
            size="headingxl"
            as="pre"
            binary
            delay={0.5}
            className="w-full text-[36px] absolute top-0 left-0 font-bold leading-[53px] text-gray-900  md:text-[34px] sm:text-[32px]"
          >
            {jobTitle}
          </Heading>
        )}

        <Heading
          size="headingxl"
          as="pre"
          className="w-full text-[36px] absolute top-0 left-0 font-bold leading-[53px] !text-transparent  md:text-[34px] sm:text-[32px]"
        >
          {jobTitle}
        </Heading>
      </div>
      <div className="flex flex-1 flex-col gap-5 self-center border border-solid border-blue_gray-200 p-[30px] md:self-stretch sm:p-5">
        <div className="flex flex-col gap-7">
          {prop && (
            <div className="flex flex-col items-start gap-6">
              <Heading as="h6" className="text-[18px] font-bold text-gray-900">
                {prop}
              </Heading>

              {requiredSkills && (
                <Heading
                  as="p"
                  className="text-[16px] font-normal text-gray-900"
                >
                  {requiredSkills}
                </Heading>
              )}
            </div>
          )}
          <div ref={ref}></div>
          <div className="flex flex-col items-start gap-5">
            <Heading as="h6" className="text-[18px] font-bold text-gray-900">
              {prop1}
            </Heading>
            <Heading
              as="p"
              className="w-full text-[16px] font-normal leading-[200%] text-gray-900"
            >
              {candidateDescription}
            </Heading>
          </div>

          <div className="flex flex-col items-start gap-5">
            <Heading as="h6" className="text-[18px] font-bold text-gray-900">
              {prop2}
            </Heading>
            <Heading
              as="p"
              className="text-[16px] font-normal leading-[200%] text-gray-900"
            >
              {jobResponsibilities}
            </Heading>
          </div>
        </div>
        <div className="flex items-center justify-end gap-[21px]">
          <Heading
            as="h6"
            className="text-[18px] font-bold text-gray-900 underline"
          >
            {entryTitle}
          </Heading>
          <Button className="flex h-[40px] w-[40px] items-center justify-center rounded-[20px] group hover:bg-[#fff] hover:border-gray-900 hover:border hover:border-solid border-gray-900 bg-gray-900 px-3">
            <Img
              src="img_tdesign_swap_right.svg"
              width={16}
              height={4}
              className="group-hover:hidden"
            />
            <Img
              src="img_tdesign_swap_right_gray_900.svg"
              width={16}
              height={4}
              className="hidden group-hover:block"
            />
          </Button>
        </div>
      </div>
    </div>
  );
}
