import React from 'react'
import Link from 'next/link'

import { useTranslation } from 'lib/../i18n'
import { Chip } from 'lib/components/Chip'
import { EtherscanAddressLink } from 'lib/components/EtherscanAddressLink'
import { PoolCurrencyIcon } from 'lib/components/PoolCurrencyIcon'

export const PageTitleAndBreadcrumbs = (props) => {
  const { t } = useTranslation()

  const { address, breadcrumbs, title, pool } = props

  const crumbJsx = (
    <>
      <div className='flex flex-col items-start justify-between w-full leading-none'>
        <div className='inline-flex items-center text-left text-xl sm:text-3xl font-bold text-accent-2 relative'>
          {title}{' '}
          <span className='text-base sm:text-xl ml-2'>
            {address && <EtherscanAddressLink address={address} />}
          </span>
        </div>
        <div
          className='inline-block text-left text-caption-2 relative uppercase mt-3'
          style={{
            left: 1,
            bottom: 2
          }}
        >
          {breadcrumbs?.map((crumb, index) => (
            <span key={`crumb-${index}`}>
              {crumb.href && crumb.as ? (
                <>
                  <Link href={crumb.href} as={crumb.as} shallow>
                    <a className='border-b border-accent-3'>{crumb.name}</a>
                  </Link>
                </>
              ) : (
                <>
                  <span>{crumb.name}</span>
                </>
              )}
              {index + 1 !== breadcrumbs.length && <> &gt; </>}
            </span>
          ))}
        </div>
      </div>
    </>
  )

  return (
    <>
      {pool ? (
        <>
          <div className='flex justify-start items-center'>
            <PoolCurrencyIcon xl pool={pool} />

            <div className='ml-1 sm:ml-6'>{crumbJsx}</div>

            {typeof window !== 'undefined' &&
              window.location.pathname.match('/pools/') &&
              !pool.contract.isCommunityPool && (
                <div className='ml-4'>
                  <Chip
                    className='font-bold uppercase'
                    bgClasses='bg-highlight-6'
                    textClasses='text-white font-bold'
                    text={t('weekly')}
                  />
                </div>
              )}
          </div>
        </>
      ) : (
        crumbJsx
      )}
    </>
  )
}
