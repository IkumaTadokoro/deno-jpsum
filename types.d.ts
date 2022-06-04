export type Format = 'plain' | 'html' | 'markdown'
export type Source = 'kokoro' | 'ginga-tetsudo'
export type Params = {
  sentence_count: string
  format: Format
  source: Source
}
