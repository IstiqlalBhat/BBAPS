import React from "react";
import WalletListCont from "../common/ConnectWallet/WalletListCont";

const ConnectWallet = () => {
    return (
        <div className="connectWalletPart">
            <h1 className="font-mono text-2xl" style={{color: 'white'}}>
                Crypto Dust Converter
            </h1>
            <h6 style={{ color: "#ccc"}}>
                Convert Small Token Amounts
            </h6>
            <WalletListCont />
        </div>
    )
}

export default ConnectWallet;