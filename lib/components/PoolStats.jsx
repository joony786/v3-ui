import React from 'react'
import { ethers } from 'ethers'

import { useTranslation } from 'lib/../i18n'
import { DEFAULT_TOKEN_PRECISION, PRIZE_POOL_TYPES, SECONDS_PER_DAY } from 'lib/constants'
import {
  CUSTOM_YIELD_SOURCE_NAMES,
  CUSTOM_YIELD_SOURCE_IMAGES
} from 'lib/constants/customYieldSourceImages'
import { PoolNumber } from 'lib/components/PoolNumber'
import { Tooltip } from 'lib/components/Tooltip'
import { Card, CardDetailsList } from 'lib/components/Card'
import { displayPercentage } from 'lib/utils/displayPercentage'
import { numberWithCommas } from 'lib/utils/numberWithCommas'
import { BlockExplorerLink, LinkIcon } from 'lib/components/BlockExplorerLink'

import CompSvg from 'assets/images/comp.svg'

export const PoolStats = (props) => {
  const { t } = useTranslation()

  return (
    <>
      <Card>
        <div className='flex justify-between'>
          <h3>{t('poolsStats')}</h3>
        </div>
        <CardDetailsList>
          <StatsList {...props} />
        </CardDetailsList>
      </Card>
    </>
  )
}

const StatsList = (props) => {
  const { pool } = props

  return (
    <>
      <DepositsStat pool={pool} />
      <SponsorshipStat pool={pool} />
      <ReserveStat pool={pool} />
      <ReserveRateStat pool={pool} />
      <YieldSourceStat pool={pool} />
      <AprStats pool={pool} />
    </>
  )
}

// Generic stat component

const Stat = (props) => {
  const {
    title,
    tokenSymbol,
    convertedValue,
    sourceName,
    sourceImage,
    tokenAmount,
    value,
    percent,
    tooltip
  } = props

  return (
    <li className='flex justify-between mb-2 last:mb-0'>
      <span className='text-accent-1 flex'>
        {title}:{' '}
        {tooltip && <Tooltip id={title} className='ml-2 my-auto text-accent-1' tip={tooltip} />}
      </span>
      {(sourceImage || value) && (
        <span className='flex items-center'>
          {sourceName && <span className='capitalize'>{sourceName}</span>}
          {sourceImage && <img src={sourceImage} className='ml-2 w-6 h-6' />}
          {value && <span>{value}</span>}
        </span>
      )}
      {tokenSymbol && tokenAmount && (
        <span>
          {Boolean(convertedValue) && (
            <>
              <span className='opacity-30'>(${numberWithCommas(convertedValue)})</span>{' '}
            </>
          )}
          <PoolNumber>{numberWithCommas(tokenAmount)}</PoolNumber>
          <span>{tokenSymbol}</span>
        </span>
      )}
      {percent && <span>{displayPercentage(percent)}%</span>}
    </li>
  )
}

// Stat components

const DepositsStat = (props) => {
  const { pool } = props
  const { t } = useTranslation()

  return (
    <Stat
      title={t('totalDeposits')}
      convertedValue={pool.tokens.ticket.totalValueUsd}
      tokenSymbol={pool.tokens.underlyingToken.symbol}
      tokenAmount={pool.tokens.ticket.totalSupply}
    />
  )
}

const SponsorshipStat = (props) => {
  const { pool } = props
  const { t } = useTranslation()

  return (
    <>
      <Stat
        title={t('sponsorship')}
        convertedValue={pool.tokens.sponsorship.totalValueUsd}
        tokenSymbol={pool.tokens.underlyingToken.symbol}
        tokenAmount={pool.tokens.sponsorship.totalSupply}
        tooltip={t('sponsorshipInfo')}
      />
    </>
  )
}

const ReserveStat = (props) => {
  const { pool } = props
  const { t } = useTranslation()

  return (
    <Stat
      title={t('reserve')}
      convertedValue={pool.reserve.totalValueUsd}
      tokenSymbol={pool.tokens.underlyingToken.symbol}
      tokenAmount={pool.reserve.amount}
      tooltip={t('reserveInfo')}
    />
  )
}

const ReserveRateStat = (props) => {
  const { pool } = props

  const { t } = useTranslation()

  if (!pool.reserve.rateUnformatted) return null

  const reserveRateUnformattedPercentage = pool.reserve.rateUnformatted.mul(100)
  const reserveRatePercentage = ethers.utils.formatUnits(
    reserveRateUnformattedPercentage,
    DEFAULT_TOKEN_PRECISION
  )

  return (
    <Stat title={t('reserveRate')} percent={reserveRatePercentage} tooltip={t('reserveRateInfo')} />
  )
}

const YieldSourceStat = (props) => {
  const { pool } = props

  const { t } = useTranslation()
  const yieldSource = pool.prizePool.type

  let sourceImage, sourceName, value
  if (yieldSource === PRIZE_POOL_TYPES.compound) {
    sourceName = 'Compound Finance'
    sourceImage = CompSvg
  } else if (yieldSource === PRIZE_POOL_TYPES.genericYield) {
    const yieldSourceAddress = pool.prizePool.yieldSource.address
    value = (
      <BlockExplorerLink chainId={pool.chainId} address={yieldSourceAddress}>
        <LinkIcon />
      </BlockExplorerLink>
    )
    sourceName = CUSTOM_YIELD_SOURCE_NAMES[pool.chainId]?.[yieldSourceAddress]
    if (!sourceName) {
      sourceName = t('customYieldSource')
    }
    sourceImage = CUSTOM_YIELD_SOURCE_IMAGES[sourceName]
  } else {
    value = <span className='opacity-40'>--</span>
  }

  return (
    <Stat
      title={t('yieldSource')}
      value={value}
      sourceName={sourceName}
      sourceImage={sourceImage}
    />
  )
}

// audited vs unaudited

// APR Stats

const AprStats = (props) => {
  const { pool } = props

  const apr = pool.tokenListener?.apr

  if (!apr) return null

  return (
    <>
      <hr />
      <DailyPoolDistributionStat pool={pool} />
      <EffectiveAprStat apr={apr} />
    </>
  )
}

const DailyPoolDistributionStat = (props) => {
  const { t } = useTranslation()
  const { pool } = props

  const dripRatePerDay = pool.tokenListener?.dripRatePerDay || ethers.constants.Zero

  // TODO: Hardcoded to POOL but we might let people drip other tokens
  return (
    <Stat title={t('dailyPoolDistribution')} tokenSymbol={'POOL'} tokenAmount={dripRatePerDay} />
  )
}

const EffectiveAprStat = (props) => {
  const { apr } = props

  const { t } = useTranslation()

  return <Stat title={t('effectiveApr')} percent={apr} tooltip={t('effectiveAprInfo')} />
}
