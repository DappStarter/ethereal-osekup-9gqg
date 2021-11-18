require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace person bone tooth figure render remember unveil grace forum foster ghost'; 
let testAccounts = [
"0x341dd65f13386465d9057426a1279f0d8848ded2e5d9784cb22cf600f5897381",
"0xae1856028844a7965e52d748e59c480deffdf25ed20bafa6c884ca089986e39c",
"0x4b819c4991e388c52167b792396cfb558b4f00ea3f13a02205713bbc38745e98",
"0x6f736011fc5452df469cecab6642feab27489e18eeedf18cfae2624519378d7a",
"0x7419da1e896659f26f99b4b123f79374a61501f9a39e94894ba0065e59920a41",
"0x0f076b8e64578a714dfddc35f4d9ceba0f56c9422afc9ec3d9ea3feb36bda695",
"0x49364187304dc1e5843a627e7b05fd23a67bc8574a7c233f8b8a41d22da0d398",
"0x01281ee18aeb086675c106c5bef69f6e92a4fa05e247e435eac4e6db6228b768",
"0xc25cd1498b4e3903dfdae90ff77c10744776891705cf6a862183147733d4ccc9",
"0x88934196cb87007e784543f6a91e07f0ac71d867b3639436c0cbf6796ae6b06c"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

