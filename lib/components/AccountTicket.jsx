import React from 'react'
import Cookies from 'js-cookie'
import classnames from 'classnames'
import { useAtom } from 'jotai'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

import { COOKIE_OPTIONS, WIZARD_REFERRER_HREF, WIZARD_REFERRER_AS_PATH } from 'lib/constants'
import { useTranslation } from 'lib/../i18n'
import { isSelfAtom } from 'lib/components/AccountUI'
import { NetworkBadge } from 'lib/components/NetworkBadge'
import { NewPrizeCountdownInWords } from 'lib/components/NewPrizeCountdownInWords'
import { Odds } from 'lib/components/Odds'
import { PoolCurrencyIcon } from 'lib/components/PoolCurrencyIcon'
import { PoolCountUp } from 'lib/components/PoolCountUp'
import { useReducedMotion } from 'lib/hooks/useReducedMotion'
import { PoolNumber } from 'lib/components/PoolNumber'
import { numberWithCommas } from 'lib/utils/numberWithCommas'

import PoolTogetherTrophyDetailed from 'assets/images/pooltogether-trophy--detailed.svg'

export const AccountTicket = (props) => {
  const { t } = useTranslation()
  const router = useRouter()

  const [isSelf] = useAtom(isSelfAtom)

  const shouldReduceMotion = useReducedMotion()

  const { noMargin, isLink, playerPoolTicketData } = props
  let { href, as } = props

  const { ticket, pool } = playerPoolTicketData
  const { amount, amountUnformatted } = ticket
  const decimals = pool.tokens.underlyingToken.decimals

  if (!href && !as) {
    href = '/account/pools/[networkName]/[symbol]'
    as = `/account/pools/${pool.networkName}/${pool.symbol}`
  }

  const ticker = pool.tokens.underlyingToken.symbol

  const handleManageClick = (e) => {
    e.preventDefault()

    if (!isSelf || !isLink) {
      return
    }

    Cookies.set(WIZARD_REFERRER_HREF, '/account', COOKIE_OPTIONS)
    Cookies.set(WIZARD_REFERRER_AS_PATH, `/account`, COOKIE_OPTIONS)

    router.push(
      `/account/pools/[networkName]/[symbol]/manage-tickets`,
      `/account/pools/${pool.networkName}/${pool.symbol}/manage-tickets`,
      {
        shallow: true
      }
    )
  }

  const isGovernedPool = !pool.contract.isCommunityPool
  // const ticketClassName = isGovernedPool ? `ticket--${ticker?.toLowerCase()}` : `ticket--generic`

  return (
    <>
      <motion.div
        onClick={handleManageClick}
        key={`account-pool-ticket-${pool.prizePool.poolAddress}`}
        className={classnames(
          'bg-accent-grey-4 py-2 rounded-lg relative text-xxxs xs:text-xs mb-3',
          {
            'cursor-pointer': isSelf && isLink
          }
        )}
        animate={{
          scale: 1,
          opacity: 1,
          transition: {
            duration: shouldReduceMotion ? 0 : 0.2,
            staggerChildren: shouldReduceMotion ? 0 : 0.5,
            delayChildren: shouldReduceMotion ? 0 : 0.2
          }
        }}
        exit={{
          scale: 0,
          opacity: 0,
          transition: {
            duration: shouldReduceMotion ? 0 : 0.2,
            staggerChildren: shouldReduceMotion ? 0 : 0.05,
            staggerDirection: -1
          }
        }}
      >
        <div className='h-24  flex items-center justify-between'>
          <div className='h-24 w-32 sm:w-40 flex flex-col items-center justify-center border-accent-3 border-dashed border-r-2'>
            <PoolCurrencyIcon
              lg
              noMargin
              sizeClasses='w-6 h-6'
              symbol={ticker}
              address={pool.tokens.underlyingToken.address}
            />
            <div className='capitalize mt-2 text-xs font-bold text-inverse-purple'>
              {ticker?.toUpperCase()}
            </div>
          </div>

          <div className='flex w-full'>
            <div className='w-5/12 flex flex-col justify-center leading-none sm:pl-8'>
              <div className='text-lg xs:text-xl sm:text-3xl lg:text-4xl font-bold text-inverse-purple'>
                <PoolNumber>{numberWithCommas(amount)}</PoolNumber>
              </div>

              <div>
                <span className='relative inline-block leading-normal text-accent-1'>
                  {t('winningOdds')}:
                </span>{' '}
                {Number(amount) < 1 ? (
                  <>
                    <span
                      className='font-bold text-accent-3'
                      style={{
                        marginTop: 23
                      }}
                    >
                      {t('notAvailableAbbreviation')}
                    </span>
                  </>
                ) : (
                  <>
                    <Odds
                      asSpan
                      fontSansRegular
                      className='font-bold text-flashy'
                      usersBalance={amountUnformatted.toString()}
                      ticketSupplyUnformatted={pool.tokens.ticket.totalSupplyUnformatted}
                      decimals={decimals}
                      numberOfWinners={pool.config.numberOfWinners}
                    />
                  </>
                )}
              </div>
            </div>

            <div className='w-7/12 flex flex-col items-end justify-end pt-3 pb-4 pl-2 pr-8 sm:pr-12'>
              <div className='flex items-baseline text-xs xs:text-xl font-bold text-accent-1'>
                <img
                  src={PoolTogetherTrophyDetailed}
                  className='relative w-4 mr-2 opacity-70'
                  style={{
                    filter: 'brightness(5)',
                    top: 2
                  }}
                />
                {pool.prize.totalValueUsd && decimals && (
                  <>
                    $
                    <PoolCountUp
                      fontSansRegular
                      decimals={0}
                      duration={3}
                      end={parseFloat(pool.prize.totalValueUsd)}
                    />
                  </>
                )}

                <span className='text-xxxxs xs:text-xxs font-regular'>
                  <NewPrizeCountdownInWords onTicket extraShort pool={pool} />
                </span>
              </div>

              <div className='flex flex-col items-end'>
                {isSelf && isLink && (
                  <>
                    <NetworkBadge
                      sizeClasses='w-3 h-3'
                      textClasses='text-xxxxs xs:text-xxxs text-default'
                      chainId={pool.chainId}
                    />
                    <span className='text-accent-1 underline text-xxxs xs:text-xxs'>
                      {t('manage')}
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}
