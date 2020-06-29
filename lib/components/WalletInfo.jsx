import React, { useContext } from 'react'
import classnames from 'classnames'
import FeatherIcon from 'feather-icons-react'

import { WalletContext } from 'lib/components/contextProviders/WalletContextProvider'
import { networkColorClassname } from 'lib/utils/networkColorClassname'
import { chainIdToName } from 'lib/utils/chainIdToName'
import { shortenAddress } from 'lib/utils/shortenAddress'

export const WalletInfo = () => {
  const walletContext = useContext(WalletContext)
  const { _onboard } = walletContext || {}
  const currentState = _onboard.getState()

  let address
  let walletName
  let chainId = 1

  if (currentState) {
    address = currentState.address
    walletName = currentState.wallet.name
    chainId = currentState.appNetworkId
  }

  let innerContent = null
  let networkName = null

  if (chainId && chainId !== 1) {
    networkName = <span
      className={classnames(
        networkColorClassname(chainId),
        'inline-block'
      )}
    >
      {chainIdToName(chainId)}
    </span>
  }

  if (address && walletName) {
    innerContent = <>
      <div className='text-xxs leading-snug text-default trans'>
        <span
          className='overflow-ellipsis block w-full no-underline'
        >
          {shortenAddress(address)}
        </span>

        <span
          className='block sm:inline-block rounded-lg sm:text-purple-500 capitalize'
        >
          {walletName} {networkName}
        </span>
      </div>

      <button
        onClick={() => _onboard.walletReset()}
        className={classnames(
          'text-inverse hover:text-secondary trans ml-2 outline-none focus:outline-none',
          'block border rounded-full w-4 h-4 sm:w-5 sm:h-5 text-center text-lg',
          'border-primary hover:border-secondary hover:bg-secondary',
          'trans'
        )}
      >
        <FeatherIcon
          icon='x'
          className={classnames(
            'w-3 h-3 hover:text-white m-auto'
          )}
        />
      </button>
    </>
  }

  return <>
    <div
      className='relative flex justify-end items-center'
    > 
      {innerContent}
    </div>
  </>

}
