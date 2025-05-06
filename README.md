![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=flat-square&logo=postgresql&logoColor=white)


### 概要
日々のタスクを簡単に管理できる、シンプルなToDoアプリケーションです。ReactとTypeScriptを使ったSPA（シングルページアプリ）として設計し、Node.js＋PostgreSQLによるバックエンドと連携しています。  

### デモ
[デモはこちら](https://todoapp-gilt-mu.vercel.app/)

### 主な機能
- タスクの追加
- タスクの削除
- タスクの完了/未完了の切り替え

### 技術スタック
- フロントエンド: TypeScript + React + MUI 
- バックエンド: Node.js + Express（タスク管理用のAPIを構築）
- データベース: PostgreSQL

### ディレクトリ構成

```bash
.
├── client
│   ├── README.md
│   ├── package-lock.json
│   ├── package.json
│   ├── public
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   └── robots.txt
│   ├── src
│   │   ├── App.tsx
│   │   ├── Form.tsx
│   │   ├── Item.tsx
│   │   ├── List.tsx
│   │   ├── api.ts
│   │   ├── declarations.d.ts
│   │   ├── index.css
│   │   ├── index.tsx
│   │   └── styles
│   │       ├── App.module.css
│   │       ├── Form.module.css
│   │       └── Item.module.css
│   ├── tsconfig.json
│   └── yarn.lock
└── server
    ├── index.js
    ├── package-lock.json
    └── package.json
```

### 開発環境
yarn 1.22.22
npm 10.8.2
Node.js v20.18.3

### なぜTODOアプリを選んだのか ＆ 学び・気づき
記事作成中
