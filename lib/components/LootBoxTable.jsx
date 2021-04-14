import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

import { useTranslation } from 'lib/../i18n'
import { ContributeToLootBoxDropdown } from 'lib/components/ContributeToLootBoxDropdown'
import { EtherscanAddressLink } from 'lib/components/EtherscanAddressLink'
import { PoolNumber } from 'lib/components/PoolNumber'
import { Erc20Image } from 'lib/components/Erc20Image'
import { useReducedMotion } from 'lib/hooks/useReducedMotion'
import { numberWithCommas } from 'lib/utils/numberWithCommas'

import { Card, CardDetailsList } from 'lib/components/Card'
import { useAllErc20Awards } from 'lib/hooks/useAllErc20Awards'

/**
 * Table use in PoolShow
 * @param {*} props
 * @returns
 */
export const PoolShowLootBoxTable = (props) => {
  const { pool } = props
  const allAwards = useAllErc20Awards(pool.prize).sort(
    (a, b) => Number(b.totalValueUsd) - Number(a.totalValueUsd)
  )
  return (
    <LootBoxTable
      allAwards={allAwards}
      basePath={`/pools/${pool.symbol}`}
      totalExternalAwardsValueUsd={pool.prize.totalExternalAwardsValueUsd}
      lootBoxAddress={pool.prize.lootBox?.address}
    />
  )
}

/**
 * Table use in PrizeShow
 * @param {*} props
 * @returns
 */
export const PrizeShowLootBoxTable = (props) => {
  const { prize, poolSymbol } = props
  const allAwards = useAllErc20Awards(prize).sort(
    (a, b) => Number(b.totalValueUsd) - Number(a.totalValueUsd)
  )
  return (
    <LootBoxTable
      historical
      allAwards={allAwards}
      totalExternalAwardsValueUsd={prize.external.totalValueUsd}
      basePath={`/prizes/${poolSymbol}/${prize.id}`}
    />
  )
}

/**
 * Base component for the table
 * @param {*} props
 * @returns
 */
export const LootBoxTable = (props) => {
  const { basePath, historical, allAwards, totalExternalAwardsValueUsd, lootBoxAddress } = props

  const { t } = useTranslation()
  const router = useRouter()
  const [moreVisible, setMoreVisible] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const allAwardsSorted = allAwards.sort(
    (a, b) => Number(b.totalValueUsd) - Number(a.totalValueUsd)
  )

  const originalAwardsCount = allAwardsSorted.length

  let awards = []
  if (originalAwardsCount > 0) {
    awards = moreVisible ? allAwardsSorted : allAwardsSorted.slice(0, 10)
  }

  const handleShowMore = (e) => {
    e.preventDefault()

    setMoreVisible(true)

    router.push(`${basePath}#loot-box-table`)
  }

  if (!awards || (awards.length === 0 && !lootBoxAddress)) {
    return null
  }

  return (
    <Card>
      <h5 className='font-normal'>{t('lootBox')}</h5>

      <div className='flex flex-col sm:flex-row justify-between sm:items-center mb-4'>
        <div>
          <h3>
            $
            <PoolNumber>
              {numberWithCommas(totalExternalAwardsValueUsd || '0', { precision: 2 })}
            </PoolNumber>
          </h3>
        </div>

        {!historical && lootBoxAddress && <ContributeToLootBoxDropdown address={lootBoxAddress} />}
      </div>

      {awards.length === 0 && (
        <CardDetailsList>
          <span className='text-accent-1 text-xs xs:text-base'>
            {t('beTheFirstToAddToLootbox')}
          </span>
        </CardDetailsList>
      )}

      {awards.length > 0 && (
        <CardDetailsList>
          <h6 className='text-green mb-4'>
            {t('amountTokens', {
              amount: originalAwardsCount
            })}
          </h6>
          {awards.map((award) => (
            <AwardRow key={award?.address} award={award} />
          ))}
          {originalAwardsCount > 10 && (
            <div className='text-right'>
              <motion.button
                border='none'
                onClick={handleShowMore}
                className='mt-6 mb-3 underline text-xxs xs:text-base sm:text-lg text-accent-1'
                animate={moreVisible ? 'exit' : 'enter'}
                initial='enter'
                transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
                variants={{
                  enter: {
                    opacity: 1,
                    y: 0
                  },
                  exit: {
                    y: -10,
                    opacity: 0
                  }
                }}
              >
                {t('showMore')}
              </motion.button>
            </div>
          )}
        </CardDetailsList>
      )}
    </Card>
  )
}

const AwardRow = (props) => {
  const { award } = props

  const name = award.name

  if (!name) {
    return null
  }

  return (
    <li className='w-full flex text-xxs sm:text-base mb-2 last:mb-0'>
      <span className='flex w-1/3 items-center text-left'>
        <Erc20Image address={award.address} />{' '}
        <EtherscanAddressLink address={award.address} className='truncate text-accent-1'>
          {name}
        </EtherscanAddressLink>
      </span>
      <span className='w-1/3 sm:pl-6 text-right text-accent-1 truncate'>
        <PoolNumber>{numberWithCommas(award.amount, { precision: 2 })}</PoolNumber> {award.symbol}
      </span>
      <span className='w-1/3 text-right'>
        {award.totalValueUsd ? (
          <span>
            $<PoolNumber>{numberWithCommas(award.totalValueUsd, { precision: 2 })}</PoolNumber>
          </span>
        ) : (
          <span className='text-accent-1 opacity-40'>$ --</span>
        )}
      </span>
    </li>
  )
}
