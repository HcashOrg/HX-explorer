import enLocale from 'element-ui/lib/locale/lang/en'
const en = {
  nav: {
    home: 'Home',
    blocks: 'Blocks',
    transactions: 'Transactions',
    contracts: 'Contracts'
  },
  alert: {
    noSpace:'No space can be available',
    enterContent:'Please enter the search content',
    notSearch:'Not searching for relevant content'
  },
  search: {
    placeholder: 'Address/TxHash/Contract Address/Height'
  },
  home: {
    blockchinaInfo: {
      title: 'Blockchain Info',
      totalSupply: 'Total Supply',
      transactions: 'Transactions',
      blockHeight: 'Block Height',
      blockReward: 'Block Reward'
    },
    valueInfo: {
      title: 'Value Info',
      price: 'Price($)',
      priceBTC: 'Price（BTC）',
      change: 'Change（24H）'
    },
    blocks: {
      title: 'Blocks',
      more: 'More',
      height: 'Height',
      age: 'Age',
      transactions: 'Transactions',
      miner: 'Miner',
      size: 'Size',
      reward: 'Reward'
    },
    transaction: {
      title: 'Transaction',
      more: 'More',
      txHash: 'TxHash',
      block: 'Block',
      types: 'Types',
      age: 'Age',
      value: 'Value',
      fee: 'Fee'
    },
    transactionLine: {
      today: 'Today',
      week: 'Week',
      month: 'Month',
      summary: 'Transaction Statistics'
    }
  },
  transferDetails: {
    tips: {
      overview: 'Overview',
      event:'Event'
    },
    information: {
      title: 'Transaction Information',
      txHash: 'TxHash:',
      status: 'TxReceipt Status:',
      type: 'TxReceipt Type:',
      height: 'Block Height:',
      timeStamp: 'TimeStamp:'
    },
    details: {
      title: 'Details',
      transfer: 'Transfer',
      txHash: 'TxHash:',
      value: 'Value:',
      from: 'From:',
      memo: 'Memo:',
      address: 'Contract Address:',
      gasLimit: 'Gas Limit:',
      gasPrice:'Gas Price:',
      inoutData: 'Input Data:',
      contractInvoke: 'Contract Invoke',
      contractAddress:'Contract Address:',
      callerAddress:'Caller Address:',
      actualTxCost_Fee:'Actual Tx Cost/Fee:',
      acceptance:'Acceptance',
      id:'ID:',
      exchange:'Exchange:',
      amount:'Amount:',
      contractRegister: 'Contract Register',
      authorAddress:'Author Address:',
      inheritFrom:'Inherit From:',
      rate:'Rate:',
      contractTransfer:'Contract Transfer',
      contractUpgrade:'Contract Upgrade',
      contractName:'Contract Name',
      description:'Description:',
      crosschainRecord:'Crosschain Record',
      minerName:'Miner Name:',
      minerAddress:'Miner Address:',
      fee:'Fee:',
      to:'To:',
      crosschainWithdraw:'Crosschain Withdraw',
      crosschainWithdrawResult:'Crosschain Withdraw Result',
      accountBind:'Account Bind',
      asset:'Asset:',
      tunnelAddress:'Tunnel Address:',
      guardRefundCrosschainTrx:'Guard Refund Crosschain Trx',
      guardAddress:'Guard Address:',
      guardID:'Guard ID:',
      cancelledTxHash:'Cancelled TxHash:',
      accountCreate:'Account Create',
      name:'Name',
      minerCreate:'Miner Create',
      minerGenerateMultiAsset:'Miner Generate Multi Asset',
      hotAddress:'Hot Address:',
      coldAddress:'Cold Address:',
      payBack:'Pay Back',
      ownerAddress:'Owner Address:',
      acceptanceCreate:'Acceptance Create',
      valueTarget:'Value(Target):',
      acceptanceCancel:'Acceptance Cancel',
      acceptanceID:'Acceptance ID',
      toAddress:'ToAddress',
      fromAddress:'FromAddress'
    }
  },
  miner: {
    overview: {
      title: 'Miner Overview',
      name: 'Name:',
      address: 'Address:',
      contracts: 'Contracts:',
      transaction: 'Transaction:',
      rewards: 'Rewards:'
    },
    myTransactions: {
      title: 'My Transactions',
      txHash: 'TxHash',
      block: 'Block',
      types: 'Types',
      age: 'Age',
      from: 'From',
      to: 'To',
      value: 'Value',
      fee: 'Fee'
    },
    myContracts: {
      title: 'My Contracts',
      address: 'Contract Address',
      types: 'Types',
      call: 'Call Times',
      create: 'Create Times',
      last: 'The Last Time'
    }
  },
  contracts: {
    title: 'Contracts',
    contractAddress: 'Contract Address',
    types: 'Types',
    authorAddress: 'Author Address',
    callTimes: 'CallTimes',
    createTime: 'Create Time',
    lastTime: 'The Last Time',
  },
  contractOverview: {
    title: 'Contract Overview',
    contractAddress: 'Contract Address:',
    authorAddress: 'Author Address:',
    transaction: 'Transaction:',
    balance: 'Balance',
    createTxn: 'Create txn:',
    tableTitle: 'Transactions',
    api:'Api',
    txHash: 'TxHash',
    block: 'Block',
    time: 'Time',
    callerAddress: 'Caller Address',
    value: 'Value',
    fee: 'Fee'
  },
  blocks: {
    title: 'Blocks',
    height: 'Height',
    age: 'Age',
    txn: 'txn',
    miner: 'Miner',
    size: 'Size',
    reward: 'Reward',
    overview: {
      name: 'Overview',
      title: 'Block Information',
      hash: 'Hash:',
      height: 'Height:',
      timeStamp: "TimeStamp:",
      transactions: 'Transactions:',
      miner: 'Miner:',
      size: 'Size:',
      rewards: 'Rewards:',
      version: 'Version:',
      merkleRoot: 'Merkle Root:'
    },
    transaction: {
      name: 'Transaction',
      txHash: 'TxHash',
      types: 'Types',
      value: 'Value',
      fee: 'Fee'
    }
  },
  transaction:{
    title:'Transaction',
    all:'ALL',
    transfer:'Transfer',
    withdraw:'Withdraw',
    recharge:'Deposit',
    contract:'Contract',
    wage:'Reward',
    acceptance:'Acceptance',
    other:'Other',
    txHash:'TxHash',
    block:'Block',
    types:'Types',
    age:'Age',
    from:'From',
    to:'To',
    value:'Value',
    fee:'Fee',
    address: 'Address',
    contractAddress:'Contract Address',
    authorAddress:'Author Address',
    createTime:'Create Time',
    exchange:'Exchange',
    balance:'Balance',
    callerTimes:'Caller Times'
  },
  address: {
    overview: {
      title: 'Address Overview',
      name: 'Name:',
      address: 'Address:',
      contracts: 'Contracts:',
      transaction: 'Transaction:',
      rewards: 'Rewards:'
    },
    myTransactions: {
      title: 'My Transactions',
      txHash: 'TxHash',
      block: 'Block',
      types: 'Types',
      age: 'Age',
      from: 'From',
      to: 'To',
      value: 'Value',
      fee: 'Fee'
    },
    myContracts: {
      title: 'My Contracts',
      address: 'Contract Address',
      types: 'Types',
      call: 'Call Times',
      create: 'Create Times',
      last: 'The Last Time'
    }
  },
  ...enLocale
}
export default en;
