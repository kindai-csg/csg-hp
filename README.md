# 近畿大学電子計算機研究会 Webサイト

このリポジトリは近畿大学電子計算機研究会のWebサイトのソースコードを管理しています。
GitHub Pagesを使用して公開されています。

## セットアップ方法

### ローカル開発環境のセットアップ

1. Rubyとjekyllをインストールする
   ```bash
   # Rubyがインストールされていることを確認
   ruby -v
   
   # Bundlerのインストール
   gem install bundler
   
   # 依存関係のインストール
   bundle install
   ```

2. ローカルサーバーを起動する
   ```bash
   bundle exec jekyll serve
   ```

3. ブラウザで http://localhost:4000 にアクセスする

## ファイル構造

- `_includes/` - ヘッダーやフッターなどの再利用可能なコンポーネント
- `_layouts/` - ページレイアウトテンプレート
- `assets/` - CSS、JavaScript、画像などの静的アセット
- `*.md` - 各ページのコンテンツ（Markdown形式）

## コントリビューション方法

1. このリポジトリをフォークする
2. 機能ブランチを作成する (`git checkout -b feature/amazing-feature`)
3. 変更をコミットする (`git commit -m 'Add some amazing feature'`)
4. ブランチにプッシュする (`git push origin feature/amazing-feature`)
5. プルリクエストを作成する

## 著作権

© 近畿大学電子計算機研究会, All rights reserved.