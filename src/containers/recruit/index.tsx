import React from "react";
import MainContainer from "@/components/Layout/MainContainer";

import RecruitHeader from "./header";
import { Heading } from "@/components";
import TechStack from "./techstack";
import JobDescription from "./jobDescription";
import HeadingAnimation from "../headingAnimation";

export default function RecruitPage() {
  return (
    <MainContainer>
      <RecruitHeader />
      <div className="flex flex-col mx-[100px] mt-[80px] sm:mt-8 sm:mx-6 md:mx-6 mb-8">
        <div className="flex flex-col items-center justify-center self-stretch w-full">
          <div className=" w-full">
            <HeadingAnimation
              missionTitle={"Recruit"}
              missionSubtitle="採用情報"
            />
            <br />
          </div>
        </div>
        <div className="flex flex-col gap-[60px] sm:gap-[30px]">
          <Heading
            as="p"
            className="!text-[16px] font-normal leading-[200%] text-black-900"
          >
            <>
              Bitronicsは、常に革新的で情熱的なメンバーを歓迎します。
              <br />
              私たちは協力し合い、共に成長することを重視しています。
              <br />
              柔軟性と創造性を尊重し、各メンバーが自らのアイデアを発展させる環境を提供しています。
              <br />
              ビジョンを共有し、共に挑戦し、成功を分かち合うことが私たちのチームの基本です。
            </>
          </Heading>
          <div className="mx-[120px] flex flex-col gap-[30px] md:mx-0">
            <TechStack className="" />
          </div>

          <JobDescription id="job1" />
          <JobDescription
            id="job2"
            jobTitle={"Java スクリプト\nフルスタック\n開発者"}
            prop="必須スキル"
            requiredSkills="TypeScript, jQuery, JSON, GIT, Bootstrap, DOM, Docker, NodeJS, ReactJS, MongoDB"
            prop1="求める人材"
            candidateDescription={
              <>
                モチベーションが高く迅速な学習能力を持つフルスタック開発者を募集しています。アジャイルな手法を使用してソフトウェアを開発する知識と経験を持つ方を求めています。
                <br />
                強力なアーキテクチャのスキル
                <br />
                成長率が独自の要件をサポートする高度にスケーラブルで頑丈、障害耐性のあるサービスを構築する方法を知っています。最新のアーキテクチャのトレンドに常にアップデートされています。
              </>
            }
            prop2="業務内容"
            jobResponsibilities={
              <>
                <span className="font-bold mr-2">• </span>
                JavaScript、Bootstrap、DOM操作、およびJavaScriptオブジェクトモデルを含む、JavaScriptにおける強力な熟練度{" "}
                <br />
                <span className="font-bold mr-2">• </span>
                MySQLおよびMongoDBに精通 React.jsおよびその基本原則の徹底理解{" "}
                <br />
                <span className="font-bold mr-2">• </span>
                人気のあるReact.jsのワークフロー（Redux）の経験 <br />
                <span className="font-bold mr-2">• </span>
                ECMAScriptの新しい仕様に精通 <br />
                <span className="font-bold mr-2">• </span>
                データ構造ライブラリの経験（例：Immutable.js）
                <br />
                <span className="font-bold mr-2">• </span>
                Babel、Webpack、NPMなどの一般的なフロントエンド開発ツールの実務経験{" "}
                <br />
                <span className="font-bold mr-2">• </span>
                人気のあるReact.jsのワークフロー（Redux）の経験 <br />
                <span className="font-bold mr-2">• </span>
                モダンなフロントエンドビルドパイプラインやツールに精通 <br />
                <span className="font-bold mr-2">• </span>
                RESTful APIに精通 <br />
                <span className="font-bold mr-2">• </span>
                優れたUXおよびデザインの作成に貢献 <br />
                <span className="font-bold mr-2">• </span>
                サーバーサイドプログラミング言語（NodeJSが好ましい）の実務経験{" "}
                <br />
                <span className="font-bold mr-2">• </span>
                React、AngularなどのモダンなJavaScriptフレームワークの使用経験{" "}
                <br />
                <span className="font-bold mr-2">• </span>
                JavaScriptコンポーネントを含むフルウェブスタックでの単体テストの作成経験{" "}
                <br />
                <span className="font-bold mr-2">• </span>
                SASS、Grunt、Seleniumの経験およびJavaScriptデザインパターンに関する知識{" "}
                <br />
              </>
            }
            entryTitle="Entry"
          />
          <JobDescription
            id="job3"
            jobTitle={"Android 開発者\n- Kotlin"}
            prop="必須スキル"
            requiredSkills="Android、Java、Kotlin、マルチスレッディング、デザインパターン、OOPS、モバイルアプリアーキテクチャ、SDK、モバイルアプリデザイン、Flutter、RDBMSの概念と経験"
            prop1="求める人材"
            candidateDescription={
              <>
                最低2年から4年の経験を持つ Android-Kotlin
                開発者を求めています。この役割では、高品質なモバイルアプリケーションの開発、レスポンシブ性の確保、クロスファンクショナルなチームとの協力が含まれます。
              </>
            }
            prop2="業務内容"
            jobResponsibilities={
              <>
                <span className="font-bold mr-2">• </span>
                Android SDK、異なる Android
                バージョン、および異なる画面サイズの取り扱い
                <br />
                <span className="font-bold mr-2">• </span>
                Java、Kotlin、Flutter の知識
                <br />
                <span className="font-bold mr-2">• </span>
                OOPS デザインパターンとマルチスレッディング
                <br />
                <span className="font-bold mr-2">• </span>
                Android UI デザインの原則、パターン、およびベストプラクティス
                <br />
                <span className="font-bold mr-2">• </span>
                クラウドメッセージ API およびプッシュ通知
                <br />
                <span className="font-bold mr-2">• </span>
                Android SDK での豊富な経験
                <br />
                <span className="font-bold mr-2">• </span>
                データベースへの接続に JSON を使用した経験
                <br />
                <span className="font-bold mr-2">• </span>
                ソフトウェアプログラムのコーディング、テスト、デバッグ（業界標準に従って）
                <br />
                <span className="font-bold mr-2">• </span>
                Java、Kotlin、RxJava での経験と熟練度
                <br />
                <span className="font-bold mr-2">• </span>
                Android SDK、MVP、MVVM などのアーキテクチャパターンでの経験
                <br />
                <span className="font-bold mr-2">• </span>
                Android データベース、SQLite、ORM の概念とフレームワークでの経験
                <br />
                <span className="font-bold mr-2">• </span>
                Android SDK のすべての API
                レベル、デバッグ＆テストツール、AAPT、AVD マネージャでの経験
                <br />
                <span className="font-bold mr-2">• </span>
                Android UI/UX のベストプラクティスとデザインスタンダードの知識
                <br />
              </>
            }
            entryTitle="Entry"
          />

          <JobDescription
            id="job4"
            jobTitle={"iOS Swift \n開発者"}
            prop="必須スキル"
            requiredSkills="Swift、iOS、SQLite、Core Data、モバイルアプリケーション、アプリケーションプログラミング、ITサービス、XML、Webサービス"
            prop1="求める人材"
            candidateDescription={
              <>
                当社では、才能ある経験豊富なiOS
                Swift開発者を求めており、ダイナミックな開発チームに参加していただける方を募集しています。iOS
                Swift開発者として、クライアント向けに高品質なモバイルおよびデスクトップアプリケーションを設計、開発、維持管理するうえで重要な役割を果たします。Swiftの理解と効率的でユーザーフレンドリーなソフトウェアを作成する情熱が必要です。
              </>
            }
            prop2="業務内容"
            jobResponsibilities={
              <>
                <span className="font-bold mr-2">• </span>
                アプリケーション開発:
                Swiftを使用して高度なiOSアプリケーションを設計および実装
                <br />
                <span className="font-bold mr-2">• </span>
                ベストプラクティスとコーディングスタンダードに従って、清潔で保守可能かつスケーラブルなコードの開発
                <br />
                <span className="font-bold mr-2">• </span>
                iOS開発プロセスで主導的な役割を果たり、デザイナー、プロダクトマネージャー、他の開発者と協力してプロジェクト要件を定義し、技術的なソリューションを開発
                <br />
                <span className="font-bold mr-2">• </span>
                iOSアプリケーションをWebサービスおよびAPIと統合し、シームレスな通信とデータ同期を確保
                <br />
                <span className="font-bold mr-2">• </span>
                コードレビューの実施、問題のデバッグおよび解決、高品質なアプリケーションの提供を確認するためのユニットテストの実施
                <br />
                <span className="font-bold mr-2">• </span>
                UX/UIデザイナー、バックエンド開発者、QAエンジニアなどのクロスファンクショナルなチームと協力し、iOSアプリケーションのスムーズな統合と提供を確認
                <br />
                <span className="font-bold mr-2">• </span>
                Appleのデザイン原則とガイドラインの理解を持ち、視覚的に魅力的でユーザーフレンドリーなiOSアプリケーションを作成
                <br />
                <span className="font-bold mr-2">• </span>
                新しいフレームワーク、ツール、業界のベストプラクティスを含むiOS開発の最新トレンドと進歩に対してアップデート
                <br />
                <span className="font-bold mr-2">• </span>
                SwiftとAppleプラットフォームの最新情報を把握
              </>
            }
            entryTitle="Entry"
          />

          <JobDescription
            id="job5"
            jobTitle={"フラッター\n開発者"}
            prop="必須スキル"
            requiredSkills="GraphQL, Flutter, Flutter SDK, Firebase, Flutter Flow, Dark"
            prop1="求める人材"
            candidateDescription={
              <>
                Flutter
                Flow、Flutterを使用したUI開発の豊富な経験を持つテクノロジスト。最低2〜4年の関連する経験を有します。{" "}
              </>
            }
            prop2="業務内容"
            jobResponsibilities={
              <>
                <span className="font-bold mr-2">• </span>
                アプリケーションアーキテクチャの設計および技術的な意思決定。
                <br />
                <span className="font-bold mr-2">• </span>
                アプリケーションの設計および開発、基盤の異なるレイヤーで作業するチームとの調整。
                <br />
                <span className="font-bold mr-2">• </span>
                アプリケーションの早期段階でのビルド、デプロイ、リリース、およびサポート。
                <br />
                <span className="font-bold mr-2">• </span>
                優れた分析力と問題解決能力。
                <br />
                <span className="font-bold mr-2">• </span>
                Flutter SDKおよびDartプログラミング言語の豊富な経験。
                <br />
                <span className="font-bold mr-2">• </span>
                ステートマネージメント、API、UI/UX設計原則の専門知識。
                <br />
                <span className="font-bold mr-2">• </span>
                Firebase、RESTful
                APIの統合、GraphQL、およびサードパーティのライブラリ/プラグインの経験。
                <br />
                <span className="font-bold mr-2">• </span>
                モバイルアプリケーションのデバッグ、テスト、およびパフォーマンスの最適化に長けている。
                <br />
                <span className="font-bold mr-2">• </span>
                バックエンド技術とサーバーサイドの開発の知識。
                <br />
                <span className="font-bold mr-2">• </span>
                Firebaseなどのクラウドサービスに精通。
                <br />
                <span className="font-bold mr-2">• </span>
                細部への注意とセキュリティ攻撃への脆弱性への理解。
                <br />
                <span className="font-bold mr-2">• </span>
                Flutter Flowプロジェクトやアプリケーションのポートフォリオ。
                <br />
                <span className="font-bold mr-2">• </span>
                一般的なAndroid Framework API（Bluetooth、GPS、通知）の習熟。
              </>
            }
            entryTitle="Entry"
          />

          <JobDescription
            id="job6"
            jobTitle={"UI&UX\nデザイナー"}
            prop=""
            requiredSkills=""
            prop1="歓迎スキル"
            candidateDescription={
              <>
                <span className="font-bold mr-2">• </span> UI/UX
                デザイナーまたは同様の役割としての実績のある実務経験とデザインのポートフォリオ。
                <br />
                <span className="font-bold mr-2">• </span>
                細部に注意を払い、重要な部分を「ちょうどよく」ピクセル完璧に見せるよう努めます。
                <br />
                <span className="font-bold mr-2">• </span>
                モバイル アプリと最新のリアクティブ Web
                ダッシュボードの両方で共通の UI/UX
                パターンに精通しており、プラットフォームの規則を尊重しながら共通の
                Bitronics 設計言語を両方のプラットフォームに適用できる能力。
                <br />
                <span className="font-bold mr-2">• </span>
                ビジネスレベルの英語と日本語のスキル
                (当社のドキュメントはすべて英語ですが、当社の顧客は日本人です)。ネイティブレベルの日本語スキルは確実にプラスとなります。
                <br />
                <span className="font-bold mr-2">• </span>
                優れた時間管理とコミュニケーションスキル。
                <br />
                <span className="font-bold mr-2">• </span>
                強い創造性。
              </>
            }
            prop2="業務内容"
            jobResponsibilities={
              <>
                Bitronics のデザイナーとして、あなたは、[モバイルと WEB]
                アプリケーションとダッシュボードの UX と UI
                の進化と作成を担当します。あなたはプロダクト
                マネージャーやエンジニアリングと非常に緊密に連携しており、社内の営業チームや法人顧客と頻繁にやり取りします。
                Bitronics の設計言語を現代的で直感的な UX
                ソリューションに推進し、顧客に力を与えていると感じてもらうのはあなたの責任です。{" "}
                <br />
                Figma、Photoshop、Illustrator
                などのツールを使用して、ワイヤーフレームやストーリーボードから実際の
                UI 要素に至るまで、ソフトウェア製品のユーザー
                インターフェイスを設計した実績があることを期待しています。
                <br />
                <br />
                iOS および Android アプリの UI
                をデザインし、開発者にデザインとスタイル
                ガイドを提供し、デザインとコンセプトの実装を監督します。アプリやダッシュボードで使用する画像、アニメーション、HTML
                ページなどのアセットを準備します。
                ワイヤーフレームやストーリーボードで製品およびエンジニアリングと連携して、製品の実際のフローやインタラクションがどのように発生するかを定義します。
                場合によっては、次のような他の設計タスクも手伝います。単純なグラフィック
                デザイン (マーケティング、販促資料など) やドキュメント
                (マニュアルなど) として。
              </>
            }
            entryTitle="Entry"
          />

          <Heading
            size="headingmd"
            as="h5"
            className="mt-[50px] !text-[20px] font-semibold leading-[200%] text-black-900"
          >
            <>
              Bitronicsは、個々の能力を尊重し、多様性を重視する採用を行っております。
              <br />
              すべてのメンバーに平等な機会が与えられ、その能力が最大限に活かされる環境を提供しています。
            </>
          </Heading>
        </div>
      </div>
    </MainContainer>
  );
}
