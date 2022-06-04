#!/usr/bin/env -S deno --unstable --allow-net --allow-run

import { Number, Select, Toggle, prompt, bold, green, brightBlue, writeAll } from './deps.ts'
import { getJpSum } from "./api.ts";
import { Params } from "./types.d.ts"

const { sentence_count, format, source, clipboard } = await prompt([{
  name: "sentence_count",
  message: "パラグラフの長さを指定してください",
  hint: "最小値： 1、最大値: 50",
  min: 1,
  max: 50,
  type: Number
}, {
  name: "format",
  message: "フォーマットを選択してください",
  hint: "カーソルで移動、Enterで決定",
  type: Select,
  options: [
    { name: "プレーンテキスト", value: "plain"},
    { name: "HTML", value: "html"},
    { name: "Markdown", value: "markdown"}
  ]
}, {
  name: "source",
  message: "作品を選択してください",
  hint: "カーソルで移動、Enterで決定",
  type: Select,
  options: [
    { name: "銀河鉄道の夜（宮沢賢治）", value: "ginga-tetsudo" },
    { name: "こころ（夏目漱石）", value: "kokoro" }
  ]
}, {
  name: "clipboard",
  message: "クリップボードに貼り付けますか？",
  hint: "Noの場合、ターミナルに出力します",
  type: Toggle
}])

const params: Params = {
  sentence_count: String(sentence_count),
  format,
  source
}

const content = await getJpSum(params)

if (clipboard) {
  const encoder = new TextEncoder();
  const process = Deno.run({ cmd: ["pbcopy"], stdin: "piped" })
  await writeAll(process.stdin, encoder.encode(content))
  process.stdin.close()
  await process.status()

  console.log(bold(green("Success: クリップボードにコピーしました!")))
} else {
  const border = "-------------------------------------"
  console.log(border)
  console.log(bold(brightBlue(content)))
  console.log(border)
}
