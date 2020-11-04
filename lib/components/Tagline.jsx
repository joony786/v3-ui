import React from 'react'

import { useTranslation } from 'lib/../i18n'

export function Tagline(props) {
  const { t } = useTranslation()

  return <>
    <div
      className='text-center mt-12 opacity-60 pb-40'
    >
      <div
        className='text-accent-1 text-base sm:text-lg lg:text-xl'
      >
        {t('theMoreYouPoolTagline')}
      </div>
      <p
        className='text-caption mt-2 opacity-70'
      >
        {t('poweredByCoingeckoAPI')}
      </p>
    </div>
  </>
}
