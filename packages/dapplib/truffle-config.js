require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict roast fortune street name royal saddle punch install merry flame genius'; 
let testAccounts = [
"0x4eb7bc11e8e11a0f92f84b58a6c2d5a9ca9224d264453f9fb8aae204a3c3ccd0",
"0x08d56cdc011bd1b1345aa3bfd944de88482d4b36610c1402bbd92cd24fbd1ffd",
"0x846b2650ad4a14844811364cf1349e58a8b1b287fdca0cb1449736ebd88f3efa",
"0x80e1527eb4f08d2970cb30be9db95e9d10ce8ccbf2945f38fa6cf5bb6be8f466",
"0xcbe5e99f696116565295e08d2a7d16ce2c8194d3d58e38da2944b432dfb88f22",
"0x5a611fbca4270bf278b1eb731abd7a81ffd6a122db56dca9187f25ec7580dbae",
"0x53a7560795bb61d5697bf6605de48e220e3e75aa7c8b43ac5df88baff1d67cec",
"0xcf51f707ed6f12ca92b8b9143d27c16034471f54573e3587650c2c5d63856296",
"0x35269c693ddeea675492c5ce8894cac39329f8aad65117e8237f0fe881613a26",
"0x3abd1631520a368366c27a86a4b028784622a22a623a0b944ca96a5db0017b89"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

