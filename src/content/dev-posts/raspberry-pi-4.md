---
title: Raspberry pi 3で動いているOctopiをRaspberry pi 4へ引っ越ししました
pubDate: 2023-12-28T15:00:00.000Z
---

今までPrusa mini+を制御していたOctopiをRaspberry pi 3 model bからRaspberry pi 4へ引っ越しました。\
数年前に購入してからあまり使っておらずここ1年前ほどからOctopiとして利用してきたRaspberry pi 3でしたが以下の問題を抱えていました。

* undervoltageの警告が出る
* 内臓のwifiモジュールが死んでる[^wifi]
* octopiのwebインターフェースを開くまでレスポンスが遅い

[^wifi]: 別途ドングルを用いてwifiに接続させてました

上2つは正直それほど気にしていない問題でしたが、レスポンスの悪さに使いづらさを感じていました。\
昨年Raspberry piの生産が強化されたことやRaspberry pi 5の発表もあってのことか、Raspberry pi 4の中古価格が下がっていたのでフリマサイトで購入して乗り換えてみました。

## 踏んだ手順

1. Raspberry pi 4向けにoctopiがインストールされたmicro sdを用意する
2. micro sdを指した状態でRaspberry pi 4を起動して問題なくoctopiのwebインターフェースが動作するかどうかを確認する
3. Raspberry pi 3のoctopiからバックアップを取得する
   * OctoPrint Settings > Backup & Restore
4. Raspberry pi 4で取得していおいたバックアップをリストアする

![](</images/dev-posts/スクリーンショット 2023-12-29 204007.png>)

## 換装してみて

octopiのバックアップ/リストア機能を使ってみましたがRaspberry pi 4側で特に追加で設定せずに移行できたので非常に便利な機能です。\
問題だったレスポンスもかなり改善して、webインターフェースのローディングインジケータが出てから1秒ほどで表示されるようになりました。(以前は5秒以上かかってました)\
電源供給も安定したので今後モジュールが手に入ればwebcamを使ってモニタリングも試していきたいです。
