var switchArtifact = artifacts.require("YakuzaSwitch");
module.exports = deployer => {
    deployer.deploy(switchArtifact, 
        "0x38367fe79846e4d0d04df18464da643a555f52aa",  // doubleProxyAddress of the new DFO
        "0x9c783457cE2bD4002875230E97E5FB496c12196F", // oldTokenAddress
        1, // startBlock
        10000, // totalMintable
        [10000000], // time windows (block numbers) until which block multiplier and divider is used
        [1], // multipliers
        [1] // dividers
        );
};