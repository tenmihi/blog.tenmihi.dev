---
title: ' 2017 macbook proを初期化しようとして躓いた'
pubDate: 2024-01-30T15:00:00.000Z
updatedDate: 2024-01-30T15:00:00.000Z
---

とある事情から最近使わずに眠っていた2017年のmacbook proを初期化しようとしたところすんなり初期化できずに躓きました。

どういった手順で対応したか覚書を残しておきます。

## 踏むと良さそうな手順

* 初期化前のmacか別のmacでmistを使って起動可能なインストーラーを作る
* 復旧モードからボリュームを削除する
* 起動可能なインストーラー経由でmacosを再インストール

## 実際に踏んだ対応手順

* 復旧モードに入る
* ユーティリティウィンドウ => ディスクユーティリティからボリュームを削除
* ユーティリティウィンドウ => macosを再インストール
  * ここで PKDownload Error 8が出てコケる
  * 再起動後にもう一度同じ手順で再インストールを試すも同じようなタイミングでエラーが出てしまいうまく行かず
* メインのmacbook air m2を使ってターミナルを使って起動可能なインストーラを作成しようとするがうまく行かず
  * コマンドでもApp Store経由でもうまく取得できず
  * [https://support.apple.com/ja-jp/101578](https://support.apple.com/ja-jp/101578)
* mistをインストール
* mistを使って適当なリムーバブルディスクに起動可能なインストーラをセットアップ
* 起動可能なインストーラーを利用してmacbook pro 2017にmac osを再インストール

## 知らなかったこと

### command + option + rだとネットワーク経由で復旧する

厳密に言うとネットワーク経由で最新のmacosを引っ張ってきてくれて復旧できるようです。

[https://support.apple.com/ja-jp/102603](https://support.apple.com/ja-jp/102603)
