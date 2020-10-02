import React, { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'

import { Trans, useTranslation } from 'lib/../i18n'
import { PoolDataContext } from 'lib/components/contextProviders/PoolDataContextProvider'
import { ConfettiContext } from 'lib/components/contextProviders/ConfettiContextProvider'
import { ButtonLink } from 'lib/components/ButtonLink'
import { PaneTitle } from 'lib/components/PaneTitle'
import { PoolNumber } from 'lib/components/PoolNumber'
import { NewPrizeCountdownInWords } from 'lib/components/NewPrizeCountdownInWords'
import { numberWithCommas } from 'lib/utils/numberWithCommas'

export const OrderComplete = (props) => {
  const [t] = useTranslation()

  const router = useRouter()
  const quantity = router.query.quantity

  const confettiContext = useContext(ConfettiContext)
  const { confetti } = confettiContext

  const poolData = useContext(PoolDataContext)
  const { pool, usersTicketBalance } = poolData

  useEffect(() => {
    setTimeout(() => {
      window.confettiContext = confetti
      confetti.start(setTimeout, setInterval)
    }, 300)
  }, [])

  // prevents flashing when unmounting
  if (!quantity) {
    return null
  }

  return <>
    <PaneTitle small>
      {t('depositComplete')}
    </PaneTitle>

    <PaneTitle>
      <Trans
        i18nKey='youGotAmountTickets'
        defaults='You got <number>{{amount}}</number> tickets!'
        components={{
          number: <PoolNumber />,
        }}
        values={{
          amount: quantity,
        }}
      />
    </PaneTitle>

    <div
      className='mb-6 text-highlight-3 text-sm'
    >
      <div
        className='mb-6'
      >
        {t('youNowHaveAmountTicketsInTheTickerPool', {
          amount: numberWithCommas(usersTicketBalance, { precision: 0 }),
          ticker: pool?.underlyingCollateralSymbol
        })}
      </div>
      <div
        className='mb-6'
      >
        {t('youWillBeEligibleToWinPrizeEveryFrequency', {
          frequency: pool?.frequency === 'Weekly' ? t('week') : t('day')
        })}
      </div>
      <div
        className='mb-3'
      >
        {t('theNextPrizeWillBeAwardedIn')} <span className='font-bold'><NewPrizeCountdownInWords
          pool={pool}
        /></span>
      </div>
    </div>

    <div>
      <ButtonLink
        href='/account'
        as='/account'
        textSize='lg'
      >
        {t('viewYourAccount')}
      </ButtonLink>
    </div>
  </>
}
