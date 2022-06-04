# deno-jpsum

いい感じのサンプルテキストが作れるCLIツール powered by
[Lorem JPsum \| 自然な日本語ダミーテキストを自動生成](https://lorem-jpsum.vercel.app/)

[Lorem JPsum](https://lorem-jpsum.vercel.app/)のAPIを利用しています。

## 使い方

### とりあえず使ってみる

0. Denoをインストールします

参考：[マニュアル \| Deno](https://deno-ja.vercel.app/manual@v1.9.1/getting_started/installation)

1. 以下のコマンドで実行します。

```bash
deno run --unstable --allow-run --allow-net https://raw.githubusercontent.com/IkumaTadokoro/deno-jpsum/main/mod.ts
```

### インストールして使う

0. Denoをインストールします

参考：[マニュアル \| Deno](https://deno-ja.vercel.app/manual@v1.9.1/getting_started/installation)

1. スクリプトをインストールします

```bash
deno install --unstable --allow-run --allow-net -n deno-jpsum https://raw.githubusercontent.com/IkumaTadokoro/deno-jpsum/main/mod.ts
```

2. 1のインストール先（インストール完了時に表示されるパス）に対してパスを通します。

- デフォルトは `$HOME/.deno`
- asdfを使っている場合、デフォルトは `$ASDF_INSTALL_PATH/.deno`

3. 以下のコマンドで実行します。

```bash
deno-jpsum
```
