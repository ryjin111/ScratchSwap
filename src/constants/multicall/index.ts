import { ChainId } from '@pantherswap-libs/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xA6E66E17Ad1e2778469fc6e2A045d11368fE5C79', // TODO
  [ChainId.BSCTESTNET]: '0xA6E66E17Ad1e2778469fc6e2A045d11368fE5C79'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
