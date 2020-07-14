import React, { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'

import { ConfettiContext } from 'lib/components/contextProviders/ConfettiContextProvider'
import { PaneTitle } from 'lib/components/PaneTitle'

export const OrderComplete = (props) => {
  const router = useRouter()
  const quantity = router.query.quantity

  const confettiContext = useContext(ConfettiContext)
  const { confetti } = confettiContext

  useEffect(() => {
    setTimeout(() => {
      window.confettiContext = confetti
      confetti.start(setTimeout, setInterval)
    }, 300)
  })

  return <>
    <PaneTitle small>
      Deposit complete
    </PaneTitle>

    <PaneTitle>
      You got {quantity} tickets!
    </PaneTitle>
  </>
}
