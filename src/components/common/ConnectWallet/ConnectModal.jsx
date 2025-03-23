import React from "react";
import connect from "../../../assets/graphics/Connect";
import MainWalletItem from "./MainWalletItem";

const ConnectModal = (props) => {
    return (
        <div id="myModal" class="modal">
            <div class="modal-content">
                <div className="flex flex-row text-xl font-medium" style={{borderBottom: '1px solid #929191', paddingBottom: '5%'}}>
                    {connect}
                    <h2 className="basis-3/5 flex justify-start">Connect Wallet</h2>
                    <span className="close basis-1/5 flex justify-end text-[#929191] relative left-[13%]">&times;</span>
                </div>    
                <div className="grid grid-cols-4 gap-4" style={{marginTop: '5%', overflow: 'auto'}}>
                    <MainWalletItem />
                    <MainWalletItem />
                    <MainWalletItem />
                    <MainWalletItem />
                    <MainWalletItem />
                    <MainWalletItem />
                    <MainWalletItem />
                    <MainWalletItem />
                    <MainWalletItem />
                    <MainWalletItem />
                    <MainWalletItem />
                    <MainWalletItem />
                    <MainWalletItem />
                    <MainWalletItem />
                    <MainWalletItem />
                    <MainWalletItem />
                    <MainWalletItem />
                    <MainWalletItem />
                    <MainWalletItem />
                    <MainWalletItem />
                    <MainWalletItem />
                    <MainWalletItem />
                    <MainWalletItem />
                    <MainWalletItem />
                </div>            
            </div>
        </div>
    )
}

export default ConnectModal;