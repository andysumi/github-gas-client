[![clasp](https://img.shields.io/badge/built%20with-clasp-4285f4.svg)](https://github.com/google/clasp) ![Test](https://github.com/andysumi/github-gas-client/workflows/Test/badge.svg) ![Deploy](https://github.com/andysumi/github-gas-client/workflows/Deploy/badge.svg)

# github-gas-client

Google Apps Script用のGithub APIライブラリ

## スクリプトID

`1MuDI7EeOYxnbZQXu76YWZvXLdKX_VOMRircgEH-lxnN3JefGQhTgqkTT`

## 使い方

### 事前準備

1. [ライブラリをプロジェクトに追加する](https://developers.google.com/apps-script/guides/libraries)
2. APIトークンを取得し、PropertiesServiceを使って保存する

### コードサンプル

```js
function myFunction() {
  var app = GithubClient.create(PropertiesService.getUserProperties().getProperty('TOKEN'), 'your_owner', 'your_repository');

  var res = app.getSpecificIssue(1);
  Logger.log(JSON.stringify(res, null , '\t'));

  var res = app.createIssue('title', 'body', { labels: ['bug'] });
  Logger.log(JSON.stringify(res, null , '\t'));
}
```
