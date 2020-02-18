import { get } from '../apiClient'

export async function fetchBeer (type) {
  const response = await get(
    `beers?page=1&per_page=80${type ? '&food=' + type : ''}`
  )
  return response.body
}
