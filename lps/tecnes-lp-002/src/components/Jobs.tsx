"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

const jobs = [
  {
    title: "機械設計エンジニア",
    type: "正社員",
    summary:
      "産業機械・自動化装置の構造設計を担当。要件定義から3D-CAD設計、出図、立ち上げ立会いまで一気通貫で関わります。",
    requirements: [
      "機械設計の実務経験3年以上",
      "3D-CAD（SolidWorks / Inventor 等）の使用経験",
      "顧客との要件折衝に前向きに取り組める方",
    ],
  },
  {
    title: "制御ソフトウェアエンジニア",
    type: "正社員",
    summary:
      "PLC / モーション制御、HMI、上位システム連携。装置のソフトウェア全般を、ハード設計者と並走しながら開発します。",
    requirements: [
      "PLC（三菱・キーエンス等）またはC/C++での組込み開発経験",
      "シーケンス制御の基礎知識",
      "現場での立ち上げ業務に抵抗のない方",
    ],
  },
  {
    title: "電気設計エンジニア",
    type: "正社員",
    summary:
      "制御盤・配線設計から、安全カテゴリーへの対応まで。装置の「動き」を支える電気回りを設計します。",
    requirements: [
      "電気設計の実務経験2年以上",
      "EPLAN / E3.series などの設計ツール経験歓迎",
      "安全規格（ISO13849等）に関する知識歓迎",
    ],
  },
  {
    title: "プロジェクトマネージャー",
    type: "正社員",
    summary:
      "複数案件の進行管理、リソース配置、お客様との折衝。技術と経営の両方を理解できるポジションです。",
    requirements: [
      "製造業向けプロジェクトのマネジメント経験",
      "技術系バックグラウンド（設計・開発のいずれか）",
      "顧客折衝・予算管理経験",
    ],
  },
  {
    title: "技術アシスタント",
    type: "契約社員 / パート",
    summary:
      "図面チェック、書類作成、検査記録のとりまとめなど、エンジニアの周辺業務を支えるポジション。",
    requirements: [
      "Excel・基本的なPC操作ができる方",
      "ものづくりに関心がある方",
      "未経験歓迎",
    ],
  },
  {
    title: "新卒採用（2027卒）",
    type: "新卒",
    summary:
      "機械・電気・情報系の学部・大学院卒の方を対象に、設計・制御開発職の新卒採用を行っています。",
    requirements: [
      "機械・電気・情報系の専攻、または独学で技術を学んだ方",
      "ものをつくる現場に関わりたい意欲",
      "チームで動くことを楽しめる方",
    ],
  },
];

export default function Jobs() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="jobs" className="bg-[#f5f6f8] py-24 md:py-36">
      <div className="mx-auto max-w-[1080px] px-6 md:px-10">
        <SectionTitle
          eyebrow="JOBS"
          title={
            <>
              募集職種・
              <br className="md:hidden" />
              エントリー
            </>
          }
          description="気になるポジションがあれば、エントリーフォームよりご連絡ください。職種が決まっていない場合の「キャリア相談」も歓迎しています。"
        />

        <ul className="mt-14 md:mt-20 space-y-3">
          {jobs.map((job, i) => {
            const isOpen = open === i;
            return (
              <Reveal as="li" key={job.title}>
                <div className="bg-white rounded-xl overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 px-6 md:px-8 py-5 md:py-6 text-left"
                  >
                    <span className="flex items-center gap-4 md:gap-6">
                      <span className="text-[10px] tracking-[0.3em] text-accent shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-serif font-black text-base md:text-xl text-ink">
                        {job.title}
                      </span>
                      <span className="hidden md:inline text-xs text-muted border border-line px-3 py-1 rounded-full">
                        {job.type}
                      </span>
                    </span>
                    <span
                      className={`shrink-0 w-9 h-9 rounded-full border border-ink/20 flex items-center justify-center transition-transform ${
                        isOpen ? "rotate-45 bg-ink text-white" : "text-ink"
                      }`}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 md:px-8 pb-7 md:pb-8 pt-1 border-t border-line">
                        <p className="text-sm leading-loose text-ink/80 mt-5">
                          {job.summary}
                        </p>
                        <p className="mt-6 text-[11px] tracking-[0.3em] text-accent">
                          REQUIREMENTS
                        </p>
                        <ul className="mt-3 space-y-2 text-sm text-ink/80">
                          {job.requirements.map((r) => (
                            <li key={r} className="flex gap-3">
                              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                              <span>{r}</span>
                            </li>
                          ))}
                        </ul>
                        <a
                          href="#"
                          className="mt-7 inline-flex items-center gap-2 bg-ink text-white text-xs md:text-sm px-6 py-3 rounded-full hover:bg-navy transition"
                        >
                          このポジションにエントリー
                          <span aria-hidden>→</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
