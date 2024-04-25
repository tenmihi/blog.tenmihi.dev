---
title: Netlifyの通知をdiscordに飛ばす
pubDate: 2024-04-24T15:00:00.000Z
---

家族との連絡の一部やRSSフィード、3DプリンタのプリントログなどをDiscordに流しており、Netlifyのdeploy通知をdiscordに試してみました。

### slack integrationは利用できない

![](</images/dev-posts/スクリーンショット 2024-04-25 22.05.49.png>)

[https://dev.to/rstacruz/netlify-discord-notifications-54fa](https://dev.to/rstacruz/netlify-discord-notifications-54fa)

調べてパッと出てくるいくつかのサイトではSlack integrationにdiscordのwebhookを指定してあげることで実現できるとあるんですが、2024/04/25現在だとSlack integrationはSlack appを利用する形に変わってしまっていてありません。

### val townでdiscordとnetlifyを仲介する

Http Handler(API), cronなんかを手軽に用意できるval.townというサービスがあったので使ってみました。

以下NetlifyからのHTTP Post notificationを受けてdiscordのwebhook宛に整形して送信してくれる君です。

[https://www.val.town/v/tenmihi/netlify\_deploy\_notification\_to\_discord](https://www.val.town/v/tenmihi/netlify_deploy_notification_to_discord)

クエリパラメータに `webhook_url`のキーでdiscordのwebhook\_urlを乗せてAPIを叩いてあげれば通知が飛んでくると思います。

![](</images/dev-posts/スクリーンショット 2024-04-25 21.55.46.png>)

さっとこういったAPIを作って公開できるのでなかなかおもしろいプラットフォームです。

レートリミット等はあるみたいなので、しっかり使う気があるのであればforkして使ってもらえると私としても安心です。
