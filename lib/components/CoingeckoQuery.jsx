import { useEffect } from 'react'
import { useInterval } from 'beautiful-react-hooks'
import { isEmpty } from 'lodash'

import { MAINNET_POLLING_INTERVAL } from 'lib/constants'
import { coingeckoDataVar } from 'lib/apollo/cache'

const COINGECKO_LAMBDA_PATH = `/.netlify/functions/coingecko-price-api`

const debug = require('debug')('pool-app:CoingeckoQuery')

export const CoingeckoQuery = (props) => {
  const { externalAwards } = props

  const externalErc20Awards = externalAwards?.daiPool?.externalErc20Awards

  const _getCoingeckoData = async () => {
    try {
      const addressesString = externalErc20Awards.map(award => award.address).join(',')
      const postData = {
        addressesString
      }
      debug({addressesString})
      
      const response = await fetch(COINGECKO_LAMBDA_PATH, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData) // body data type must match "Content-Type" header
      })
      const result = await response.json()
      debug({ result })

      // coingeckoDataVar([result])
      coingeckoDataVar({
        id: 0,
        ...result
      })
    } catch (error) {
      console.error(error)
    }
  }

  useInterval(() => {
    if (!isEmpty(externalErc20Awards)) {
      _getCoingeckoData()
    }
    return () => {}
  }, MAINNET_POLLING_INTERVAL)

  useEffect(() => {
    if (!isEmpty(externalErc20Awards)) {
      _getCoingeckoData()
    }
    return () => {}
  }, [externalErc20Awards])

  return null
}
