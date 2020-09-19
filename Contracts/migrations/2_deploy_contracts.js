var VasaPowerSwitch = artifacts.require("VasaPowerSwitch");
var Arg = "Hello world";
module.exports = deployer => {
    deployer.deploy(VasaPowerSwitch, 
        0x53453571d73F15a1E6E5A45CB26bdB202e0da840, 
        0x9c783457cE2bD4002875230E97E5FB496c12196F,
        1,
        0,
        [1]
        [1]
        [1]
        );

    /*
address doubleProxyAddress, address oldTokenAddress, uint256 startBlock, 
uint256 totalMintable, 
uint256[] memory timeWindows, 
uint256[] memory multipliers, 
uint256[] memory dividers

return (_timeWindows[i], _multipliers[i][0], _multipliers[i][1]);
    */
};