import React, { useContext } from 'react'
import { motion } from 'framer-motion'

import { useTranslation } from 'lib/../i18n'
import { PoolDataContext } from 'lib/components/contextProviders/PoolDataContextProvider'
import { AccountPoolRow } from 'lib/components/AccountPoolRow'
import { V2AccountPoolRow } from 'lib/components/V2AccountPoolRow'
import { BlankStateMessage } from 'lib/components/BlankStateMessage'
import { ButtonLink } from 'lib/components/ButtonLink'
import { IndexUILoader } from 'lib/components/IndexUILoader'

import TicketIcon from 'assets/images/PT-Depositing-2-simplified.svg'

export const AccountPoolsUI = () => {
  const { t } = useTranslation()
  const { pools, dynamicPlayerData, usersChainData} = useContext(PoolDataContext)

  const daiBalances = {
    poolBalance: usersChainData?.v2DaiPoolCommittedBalance,
    podBalance: usersChainData?.v2DaiPodCommittedBalance,
    podSharesBalance: usersChainData?.v2DaiPodSharesBalance,
  }

  const usdcBalances = {
    poolBalance: usersChainData?.v2UsdcPoolCommittedBalance,
    podBalance: usersChainData?.v2UsdcPodCommittedBalance,
    podSharesBalance: usersChainData?.v2UsdcPodSharesBalance,
  }

  let hasNoV2Balance = true
  hasNoV2Balance = daiBalances?.poolBalance?.lt('1000000') &&
    daiBalances?.podBalance?.lt('1000000') &&
    usdcBalances?.poolBalance?.lt('1000000') &&
    usdcBalances?.podBalance?.lt('1000000')

  return <>
    {!dynamicPlayerData ? <>
      <IndexUILoader />
    </> :
      (dynamicPlayerData.length === 0 && hasNoV2Balance) ? <>
        <BlankStateMessage>
          <div
            className='mb-10 font-bold'
          >
            <img
              src={TicketIcon}
              className='mx-auto w-16 mb-8'
            />

            {t('youCurrentlyHaveNoTickets')}
            <br />{t('depositInAPoolNow')}
          </div>
          <ButtonLink
            href='/'
            as='/'
          >
            {t('viewPools')}
          </ButtonLink>
        </BlankStateMessage>
      </> : <>
        <>
          <motion.ul>
            <V2AccountPoolRow
              v2dai
              key={`v2-dai-account-pool-row`}
            />
          
            <V2AccountPoolRow
              v2usdc
              key={`v2-usdc-account-pool-row`}
            />

            {!hasNoV2Balance && <hr />}

            {dynamicPlayerData.map(playerData => {
              const pool = pools.find(pool => pool.poolAddress === playerData.prizePool.id)

              console.log(dynamicPlayerData)
              console.log(pool)
              if (!pool) {
                return
              }

              return <AccountPoolRow
                key={`account-pool-row-${pool.poolAddress}`}
                pool={pool}
                player={playerData}
              />
            })}
          </motion.ul>
        </>
      </>
    }
  </>
}
