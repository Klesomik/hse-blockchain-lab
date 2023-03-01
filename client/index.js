require("dotenv").config();

const Web3 = require("web3")

const rpcURL = "${process.env.URL}${process.env.ALCHEMY_API_KEY}"
const web3 = new Web3(new Web3.providers.HttpProvider(rpcURL))

const account = "${process.env.GOERLI_PRIVATE_KEY}"

web3.eth.getBalance(account, function(err, result) {
  if (err) {
    console.log(err)
  } else {
    console.log(web3.utils.fromWei(result, "ether") + " ETH")
  }
})