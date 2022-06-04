import { Params } from './types.d.ts'

export async function getJpSum(params: Params) : Promise<string> {
  const query = new URLSearchParams(params)
  const url = 'https://lorem-jpsum.vercel.app/api'
  const response = await fetch(`${url}?${query}`)
  const data = await response.json()
  return data.content
}
