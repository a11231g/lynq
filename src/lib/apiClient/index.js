import pick from 'lodash/pick'

const BASE_URL = 'https://api.punkapi.com/v2/'

let pendingJwtRefresh

async function buildResponse (response) {
  let body = {}

  try {
    body = await response.json()
  } catch (error) {}

  return {
    // spread syntax didn't work for the original response object
    // TypeError: One of the sources for assign has an enumerable key on the prototype chain [...]
    ...pick(response, ['status', 'statusText', 'ok', 'headers', 'url']),
    body
  }
}

export async function request (
  url,
  method,
  headers = {},
  body,
  refreshJwt = true
) {
  if (pendingJwtRefresh && refreshJwt) {
    await pendingJwtRefresh
  }

  const requestUrl = /^https?:\/\//.test(url) ? url : BASE_URL + url

  const params = {
    method,
    headers: {
      Accept: 'application/json',
      ...headers
    }
  }

  if (body) {
    params.body = body
  }
  const call = fetch(requestUrl, params)
  const fetchResponse = await call
  const response = await buildResponse(fetchResponse)
  return response
}

function bodyHeaders (headers) {
  return {
    'Content-Type': 'application/json',
    ...headers
  }
}

export async function get (url, headers = {}, refreshJwt = true) {
  return request(url, 'GET', headers, undefined, refreshJwt)
}

export async function post (url, body, headers = {}, refreshJwt = true) {
  return request(
    url,
    'POST',
    bodyHeaders(headers),
    JSON.stringify(body),
    refreshJwt
  )
}

export async function patch (url, body, headers = {}, refreshJwt = true) {
  return request(
    url,
    'PATCH',
    bodyHeaders(headers),
    JSON.stringify(body),
    refreshJwt
  )
}

export async function remove (url, body, headers = {}, refreshJwt = true) {
  return request(
    url,
    'DELETE',
    bodyHeaders(headers),
    JSON.stringify(body),
    refreshJwt
  )
}
