
import React from "react";
import Service from "./service";


const data = [
  {
    title: "System\ndevelopment",
    subtitle: "システム開発事業",
    services: [
      {
        id: 1,
        image: "img_icon_service1.svg",
        name: "カスタムソフトウェア開発",
        description: "お客様の独自のビジネスニーズに対応し、Webやモバイルアプリケーション、API、その他のソフトウェア製品のためのパーソナライズされたソリューションを提供します。",
      },
      {
        id: 1,
        image: "img_icon_service2.svg",
        name: "Webアプリケーション開発",
        description: "ユーザビリティ、効率性、セキュリティに焦点を当て最新のWeb技術を活用してカスタムアプリケーションを構築します。",
      },

      {
        id: 1,
        image: "img_icon_service3.svg",
        name: "モバイルアプリケーション開発",
        description: "iOS、Android、およびクロスプラットフォーム向けに革新的で使いやすいモバイルアプリケーションを提供します。",
      },

      {
        id: 1,
        image: "img_icon_service4.svg",
        name: "ソフトウェアメンテナンスとリエンジニアリング",
        description: "お客様の既存のソフトウェアを効果的にメンテナンスし、リエンジニアリングして最新の技術や要件にアップグレードします。",
      },
    ]
  },

  {
    title: "Advanced\ntechnology\ndevelopment",
    subtitle: "先端技術開発事業",
    services: [
      {
        id: 1,
        image: "img_icon_service5.svg",
        name: "AIアプリケーション開発",
        description: "最新の人工知能技術を駆使し、お客様のビジネスに合わせた効果的で革新的なAIアプリケーションを開発します。",
      },
      {
        id: 1,
        image: "img_icon_service6.svg",
        name: "IoT開発",
        description: "IoTテクノロジーを駆使し、デバイス間のシームレスな通信とデータ収集からビジネスの効率向上までをサポートするIoT開発を提供します。",
      },

      {
        id: 1,
        image: "img_icon_service7.svg",
        name: "ブロックチェーン開発",
        description: "分散型台帳技術とスマートコントラクトを組み合わせ、取引プロセスの効率化、セキュリティ向上、透明性の向上を実現します。",
      },

      {
        id: 1,
        image: "img_icon_service8.svg",
        name: "VR開発",
        description: "最新のバーチャルリアリティ（VR）テクノロジーを活用し、没入型でインタラクティブな体験を提供します。",
      },
    ]
  },

  {
    title: "Software\nquality\nassurance",
    subtitle: "ソフトウェア品質保証",
    services: [
      {
        id: 1,
        image: "img_icon_service9.svg",
        name: "ソフトウェアのQAとテスト",
        description: "卓越した品質保証（QA）とテストサービスを提供し、ソフトウェア製品の信頼性安全性、パフォーマンスを向上させます。",
      },

    ]
  }

]
export default function Services() {
  return (
    <div className="flex flex-col items-center gap-[100px] self-stretch md:gap-[75px] sm:gap-[50px]">
      <div className="flex flex-col gap-[100px] self-stretch">
        {data.map((item, index) => (
          <Service key={index}
            mainHeading={item.title}
            subHeading={item.subtitle}
            services={item.services}
            className="mx-auto w-full max-w-[1240px]  sm:flex-col" />
        ))}

      </div>

    </div>
  );
}
