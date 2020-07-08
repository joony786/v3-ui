export const SUPPORTED_NETWORKS = [1, 3, 42, 31337, 1234]

export const MAINNET_POLLING_INTERVAL = 15000

// cookie names
export const MAGIC_EMAIL = 'magic-email'
export const SELECTED_WALLET_COOKIE_KEY = 'selectedWallet'

const domain = process.env.NEXT_JS_DOMAIN_NAME && `.${process.env.NEXT_JS_DOMAIN_NAME}`

export const COOKIE_OPTIONS = {
  sameSite: 'strict',
  secure: process.env.NEXT_JS_DOMAIN_NAME === 'pooltogether.com',
  domain
}

export const CONTRACT_ADDRESSES = {
  1: {
    DAI_PRIZE_POOL_CONTRACT_ADDRESS: '',
    USDC_PRIZE_POOL_CONTRACT_ADDRESS: '',
    USDT_PRIZE_POOL_CONTRACT_ADDRESS: '',
  },
  31337: {
    DAI_PRIZE_POOL_CONTRACT_ADDRESS: '',
    USDC_PRIZE_POOL_CONTRACT_ADDRESS: '',
    USDT_PRIZE_POOL_CONTRACT_ADDRESS: '',
  },
  42: {
    DAI_PRIZE_POOL_CONTRACT_ADDRESS: '0x59A0ED7BE8117369BDd1cd2C4e3C35958C5149f1',
    USDC_PRIZE_POOL_CONTRACT_ADDRESS: '0xB2eCdC06e07E1bff27D13440bc40351D769d7353',
    USDT_PRIZE_POOL_CONTRACT_ADDRESS: '0x55907a3699Bd33bE7DCC3e754ff4Cbf54bD72145',
  }
}

export const CONTRACT_ADDRESSES_REVERSE_LOOKUP = {
  1: {
    DAI_PRIZE_POOL_CONTRACT_ADDRESS: '',
    USDC_PRIZE_POOL_CONTRACT_ADDRESS: '',
    USDT_PRIZE_POOL_CONTRACT_ADDRESS: '',
  },
  31337: {
    DAI_PRIZE_POOL_CONTRACT_ADDRESS: '',
    USDC_PRIZE_POOL_CONTRACT_ADDRESS: '',
    USDT_PRIZE_POOL_CONTRACT_ADDRESS: '',
  },
  42: {
    '0x59a0ed7be8117369bdd1cd2c4e3c35958c5149f1': 'dai',
    '0xb2ecdc06e07e1bff27d13440bc40351d769d7353': 'usdc',
    '0x55907a3699bd33be7dcc3e754ff4cbf54bd72145': 'usdt',
  }
}
