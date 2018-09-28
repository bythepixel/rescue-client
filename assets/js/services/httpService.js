import axios from 'axios'
import https from 'https'

export { getDogs }

function getDogs() {
  // At request level
  const agent = new https.Agent({
    rejectUnauthorized: false,
  })
  let response = axios.get('https://api/pets', { httpsAgent: agent })
  return response.then(r => {
    return r.data
  })
}
