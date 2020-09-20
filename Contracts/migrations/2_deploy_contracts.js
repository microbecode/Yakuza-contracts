var switchArtifact = artifacts.require("YakuzaSwitch");
module.exports = deployer => {
    deployer.deploy(switchArtifact, 
        "0x59095e53c903c80e37fa25b57fd812c6d58f13d3",  // doubleProxyAddress of the old contract
        "0x9c783457cE2bD4002875230E97E5FB496c12196F", // oldTokenAddress
        1, // startBlock
        10000, // totalMintable
        [10000000], // time windows (block numbers) until which block multiplier and divider is used
        [1], // multipliers
        [1] // dividers
        );
};