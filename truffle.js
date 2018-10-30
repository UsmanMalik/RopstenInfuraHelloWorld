/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a 
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() { 
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>') 
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */

// module.exports = {
//   // See <http://truffleframework.com/docs/advanced/configuration>
//   // to customize your Truffle configuration!
// };

var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "brother festival bargain swallow jewel merit gate swallow travel balcony shine club";

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 7545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      host: "localhost", // Connect to geth on the specified
      port: 8545,
      from: "0xb2a94880a78b2a6441e75ee8f3771ccf1bbc9a4a", // default address to use for any transaction Truffle makes during migrations
      network_id: "4",
      gas: 46177 // Gas limit used for deploys
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/9b07797dc4c5442ab314de79f8adc4ce")
      },
      network_id: 3
    }   

  }
};
