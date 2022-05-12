require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/Iv0S61LPansWAdqzX8itgYbeFa6HOrIJ',
      accounts: [
        'ac98e3c6ff2bf62ab782e56df66f7f171f2ed2ba90c3cfe4cd79aab9b506a4c6',
      ],
    },
  },
}