const HOSTNAME = 'http://localhost:8000/mentor'

export function callAPI(endpoint, hash) {

  return fetch(`${HOSTNAME}${endpoint}`, {
    headers: {
      'Authorization': `Basic ${hash}`
    }
  })
  .then(response => response.json().then(json => ({ json, response })))
  .then(({json, response}) => {
    if (response.ok === false) {
      return Promise.reject(json)
    }
    return json
  })

}
