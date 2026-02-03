# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

React + Vite + TypeScript + Tailwind CSS で構築された個人ポートフォリオサイト。

## 開発コマンド

```bash
npm run dev      # 開発サーバー起動 (Vite HMR)
npm run build    # TypeScriptチェック + 本番ビルド
npm run lint     # ESLint実行
npm run preview  # 本番ビルドのプレビュー
```

## アーキテクチャ

```
src/
├── main.tsx           # エントリーポイント (React 18 createRoot)
├── App.tsx            # ルートコンポーネント
├── index.css          # Tailwind CSSスタイル
├── components/        # UIコンポーネント (Header, Links)
└── assets/            # 画像・SVGアイコン
```

**ダークモード**: Tailwindの `dark:` プレフィックスを使用。アイコンはライト/ダーク用の2種類（例: `github-mark.svg` / `github-mark-white.svg`）を `dark:hidden` と `hidden dark:block` で切り替え。

## レガシーコード

`my-remix-app/` は以前のRemix実装。ルートレベルのメインアプリが現行コード。
