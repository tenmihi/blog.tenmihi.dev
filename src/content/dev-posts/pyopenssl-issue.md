---
title: localstackで"module 'lib' has no attribute 'X509_V_FLAG_CB_ISSUER_CHECK'"が出る
pubDate: 2022-09-21T15:00:00.000Z
---

## 前提

- WSL2 ubuntu 20.04 LTS
- python3.8

## 概要

WSL2上のubuntuにlocalstackを導入してlocalstackコマンドを打った際に発生しました

localstack導入前にpipが入っていなかったので導入しました
もともとubuntuにpython3が入っていたので、get-pip.pyでpipだけ導入しました

https://github.com/pypa/get-pip

pipが22.2.2であればpip upgradeが動く状態でしたが、20.0.2ではpip install xxx --upgradeを実行する場合も同じエラーが出てしまって積んでました
(get-pip.pyで22.2.2が、aptで20.0.2が導入できる状況でした)

## 解決策

StackExchangeで触れられている通り、pyOpenSSLのバージョンを上げることで解決します

```
pip3 install pyOpenSSL --upgrade
```

参考:

https://askubuntu.com/questions/1428181/module-lib-has-no-attribute-x509-v-flag-cb-issuer-check

ただし、先程の通り22.2.2でなければそもそもpyOpenSSLのアップグレード自体がコケるので、pip以外からアップグレードをかけるかpipそのもののバージョンを上げる必要があります
