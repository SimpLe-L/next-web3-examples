import { ethers } from "ethers";
// 此provider仅为测试使用，真实情况下需要自己申请个人rpc
const provider = ethers.getDefaultProvider();
// const ALCHEMY_MAINNET_URL = `https://mainnet.infura.io/v3/${INFURA_ID}`; //INFURA_ID 注册的key
// const provider = new ethers.JsonRpcProvider(ALCHEMY_MAINNET_URL)

export const main = async () => {
  // getBalance查询余额
  const balance = await provider.getBalance(`vitalik.eth`);
  // 查询连接到了哪条链：getNetwork()，homestead代表ETH
  // const network = await provider.getNetwork();
  // 查询区块高度: getBlockNumber()
  // const blockNumber = await provider.getBlockNumber();
  // 查询某个钱包的历史交易次数: getTransactionCount()
  // const txCount = await provider.getTransactionCount("vitalik.eth");
  // 查询当前建议的gas设置: getFeeData()返回bigint
  // const feeData = await providerETH.getFeeData();
  // 查询区块信息： getBlock(区块高度)
  // const block = await providerETH.getBlock(0);
  // 查询某个地址的合约bytecode: getCode(合约地址)
  // const code = await providerETH.getCode("0xc778417e063141139fce010982780140aa0cd5ab");

  console.log(`ETH Balance of vitalik: ${ethers.formatEther(balance)} ETH`);
}