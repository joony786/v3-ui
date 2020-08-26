import React from 'react'
import FeatherIcon from 'feather-icons-react'
import { ethers } from 'ethers'

import { ButtonLink } from 'lib/components/ButtonLink'
import { NonInteractableCard } from 'lib/components/NonInteractableCard'
// import { InteractableCard } from 'lib/components/InteractableCard'
import { NewPrizeCountdown } from 'lib/components/NewPrizeCountdown'
import { Odds } from 'lib/components/Odds'
import { PoolCurrencyIcon } from 'lib/components/PoolCurrencyIcon'
import { PoolCountUp } from 'lib/components/PoolCountUp'
import { displayAmountInEther } from 'lib/utils/displayAmountInEther'

export const AccountPoolRow = (
  props,
) => {
  const { pool, player } = props

  const decimals = pool?.underlyingCollateralDecimals

  let usersBalance = 0
  if (player && player.balance && !isNaN(decimals)) {
    usersBalance = Number(ethers.utils.formatUnits(
      player.balance,
      Number(decimals)
    ))
  }

  const ticker = pool?.underlyingCollateralSymbol
  
  return <>
    <NonInteractableCard
      key={`account-pool-row-li-${pool.poolAddress}`}
      // href='/account/pools/[symbol]'
      // as={`/account/pools/${pool.symbol}`}
      className='ticket-card'
    >
      <div className='flex items-center pb-2'>
        <div
          className='flex items-center font-bold w-8/12 sm:w-6/12 pb-2'
        >
          <PoolCurrencyIcon
            lg
            pool={pool}
          />

          <div
            className='flex flex-col items-start justify-between w-full ml-1 sm:ml-6 leading-none'
          >
            <div
              className='inline-block text-left text-xl sm:text-3xl font-bold text-inverse relative'
              style={{
                top: -6
              }}
            >
              Prize ${displayAmountInEther(
                pool?.estimatePrize,
                { decimals, precision: 2 }
              )}
            </div>
            <div
              className='inline-block text-left text-caption-2 relative'
              style={{
                left: 2,
                bottom: -4
              }}
            >
              <span
                className='uppercase'
              >
                {pool.frequency}
              </span>
            </div>
          </div>

        </div>

        <div
          className='flex flex-col items-end w-4/12 sm:w-9/12 lg:w-9/12'
        >
          <NewPrizeCountdown
            pool={pool}
          />
        </div>
        {/*}
        <div
          className='flex items-center w-1/12 justify-end'
        >
          <FeatherIcon
            icon='arrow-right-circle'
            className='stroke-current w-6 h-6 sm:w-8 sm:h-8'
          />
        </div> */}
      </div>

      <div
        className='mt-5 flex items-center justify-between pt-2'
      >
        <div
          className='w-full xs:w-4/12 sm:w-4/12 lg:w-4/12 sm:border-r border-accent-4'
        >
          <Odds
            fontSansRegular
            className='font-bold text-flashy text-xl sm:text-2xl lg:text-3xl'
            pool={pool}
            usersBalance={usersBalance}
          />
          <span
            className='block text-caption uppercase font-bold'
          >
            Winning odds
          </span>
        </div>

        <div
          className='w-full xs:w-6/12 sm:w-6/12 lg:w-6/12 sm:pl-16 font-bold text-xl sm:text-2xl lg:text-3xl text-inverse'
        >
          <PoolCountUp
            fontSansRegular
            end={usersBalance}
            decimals={null}
          /> Tickets
          <span className='block text-caption uppercase'>
            ${usersBalance} {ticker}
          </span>
        </div>

        <div
          className='w-2/12 text-right'
          style={{
            lineHeight: 1.2,
          }}
        >
          <ButtonLink
            border='accent-2 border-2'
            text='accent-2'
            bg='primary'
            hoverBorder='highlight-2'
            hoverText='highlight-2'
            hoverBg='primary'

            padding='pl-2 pr-0 py-2 sm:py-2'
            width='w-10 h-10 lg:w-12 lg:h-12'
            className='inline-flex items-center justify-center'

            rounded='full'
            href='/account/pools/[symbol]'
            as={`/account/pools/${pool.symbol}`}

          >
            <FeatherIcon
              strokeWidth='2'
              icon='arrow-right'
              className='relative w-7 h-7 mx-auto'
              style={{
                left: -4
              }}
            />
          </ButtonLink>
        </div>
      </div>
    </NonInteractableCard>
  </>
}
