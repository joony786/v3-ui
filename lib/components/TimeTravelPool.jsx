import { useContext } from 'react'
import { useQueryCache } from 'react-query'

import { POOLS } from 'lib/constants'
import { AuthControllerContext } from 'lib/components/contextProviders/AuthControllerContextProvider'
import { useHistoricalPool } from 'lib/services/useHistoricalPool'
import { usePoolsQuery } from 'lib/hooks/usePoolsQuery'

export function TimeTravelPool(props){
  const {
    children,
    blockNumber,
    poolAddress,
    prize,
    querySymbol
  } = props

  const queryCache = useQueryCache()
  
  const { chainId } = useContext(AuthControllerContext)

  const { data: graphPools, error } = usePoolsQuery([poolAddress], blockNumber)

  if (error) {
    console.warn(error)
  }


  const graphPool = graphPools?.find(_graphPool => _graphPool.id === poolAddress)
  
  const poolInfo = POOLS[chainId]?.find(POOL => POOL.symbol === querySymbol)
  const timeTravelPool = useHistoricalPool(
    chainId,
    poolInfo,
    queryCache,
    graphPool,
    poolAddress,
    blockNumber,
    prize
  )

  return children(timeTravelPool)
}
