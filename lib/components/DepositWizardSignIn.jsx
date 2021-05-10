import React, { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'

import { Trans, useTranslation } from 'lib/../i18n'
import { WalletContext } from 'lib/components/contextProviders/WalletContextProvider'
import { PaneTitle } from 'lib/components/PaneTitle'
import { PoolNumber } from 'lib/components/PoolNumber'
import { SignInForm } from 'lib/components/SignInForm'

export function DepositWizardSignIn(props) {
  const { nextStep, tickerUpcased } = props

  const router = useRouter()
  const quantity = router.query.quantity

  const { handleLoadOnboard } = useContext(WalletContext)

  // lazy load onboardjs when sign-in is shown
  useEffect(() => {
    handleLoadOnboard()
  }, [])

  return (
    <>
      <PaneTitle>
        <Trans
          i18nKey='depositAmountTickets'
          defaults='Deposit <number>{{amount}}</number> {{ticker}}'
          components={{
            number: <PoolNumber />
          }}
          values={{
            amount: quantity,
            ticker: tickerUpcased
          }}
        />
      </PaneTitle>

      <div className='flex flex-col mx-auto w-full'>
        <SignInForm
          descriptionClassName='mb-10 xs:w-3/4 sm:w-1/2 lg:w-full mx-auto'
          postSignInCallback={nextStep}
        />
      </div>
    </>
  )
}
