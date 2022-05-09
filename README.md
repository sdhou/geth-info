# 私有以太坊 搭建 运行 协议 与 部署

## 以太坊安装

https://geth.ethereum.org/docs/install-and-build/installing-geth#install-from-a-package-manager

## 配置以太坊

- 创世节点 genesis 配置

```json
{
  "config": {
    "chainId": 666,
    "homesteadBlock": 0,
    "eip150Block": 0,
    "eip150Hash": "0x0000000000000000000000000000000000000000000000000000000000000000",
    "eip155Block": 0,
    "eip158Block": 0,
    "byzantiumBlock": 0,
    "constantinopleBlock": 0,
    "petersburgBlock": 0,
    "istanbulBlock": 0,
    "ethash": {}
  },
  "nonce": "0x0",
  "timestamp": "0x5ddf8f3e",
  "extraData": "0x0000000000000000000000000000000000000000000000000000000000000000",
  "gasLimit": "0x47b760",
  "difficulty": "0x00002",
  "mixHash": "0x0000000000000000000000000000000000000000000000000000000000000000",
  "coinbase": "0x0000000000000000000000000000000000000000",
  "alloc": {},
  "number": "0x0",
  "gasUsed": "0x0",
  "parentHash": "0x0000000000000000000000000000000000000000000000000000000000000000"
}
```

- 初始化

```bash
geth init /home/sdhou/ethereum/genesis.json --datadir /home/sdhou/ethereum/data
```

## 运行以太坊

```bash
geth --datadir "/home/sdhou/ethereum/data" --ws --ws.api "eth,web3,miner,admin,personal,net,txpool" --ws.origins "*" --nodiscover --networkid 15 --allow-insecure-unlock --ipcpath ~/Library/Ethereum/geth.ipc --http --http.port 3334 --unlock 0x350c9229a136736c053b3adc9b6d50a522e9dda4 --password pwd --mine --miner.threads 1 --syncmode full
```

- [以太坊官方命令行 geth 启动参数说明](https://geth.ethereum.org/docs/interface/command-line-options)

## 以太坊 geth 命令行部分操作说明

- 连接

```bash
 geth attach rpc:/home/sdhou/Library/Ethereum/geth.ipc
```

- 创建账户 personal.newAccount()
- 获取账户地址 eth.accounts
- 查看账户余额 eth.getBalance(eth.accounts[0])
- 开始挖矿来产生以太币 miner.start(1) 一代表起用一个 thread
- 查看任务队列 txpool.status
- eth 以太坊设置
- personal 账户设置
- miner 矿工设置
- txpool 队列池

## truffle 开发部署测试奇好用的工具

- [安装](https://trufflesuite.com/docs/truffle/getting-started/installation/)
- 初始化项目 truffle init
- 修改 truffle-config.js 配置以太坊服务链接信息
- 连接以太坊 truffle console --network dev
- 部署二号合约 truffle migrate -f 2 --to 2 --network dev
- 调用合约方法

```js
let storage = await Storage.at(Storage.address);
storage.store(666);
storage.retrieve();
```

## 以太坊多节点部署与相互同步

[同步模式官方文档](https://ethereum.org/en/developers/docs/nodes-and-clients/#sync-modes)

- 设置同步模式 --syncmode full
- 在 geth console 中获取两个以太坊的 enode 信息 admin.nodeInfo
- 在两个节点中填上对方 enode 信息 admin.addPeer("xxx")
- 查看各自节点信息 admin.peers

## TODO

- 程序调用 web3.0
- solidity 协议开发
- 协议数据迁移
