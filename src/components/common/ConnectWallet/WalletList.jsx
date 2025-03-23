import React from "react";
import '../../../assets/css/common.css';
import WalletItem from "./WalletItem";
import ConnectModal from "./ConnectModal";

const WalletList = () => {
    // When the user clicks the button, open the modal 
    function openModal(evt) {
        evt.preventDefault();
        document.getElementById('myModal').style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    // function function2() {
    //     modal.style.display = "none";
    // }

    //When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == document.getElementById('myModal')) {
            document.getElementById('myModal').style.display = "none";
        }
    }
    return (
    <div>
        <div className='walletList  grid grid-cols-4 gap-4 '>
            <WalletItem />
            <WalletItem />
            <WalletItem />
            <WalletItem />
            <WalletItem />
            <WalletItem />
            <WalletItem />
            <WalletItem />
            <WalletItem />
            <WalletItem />
            <WalletItem />
            <WalletItem />
            <WalletItem />
            <WalletItem />
            <WalletItem />
            <WalletItem />
            <WalletItem />
            <WalletItem />
            <WalletItem />
            <WalletItem />
            <WalletItem />
            <WalletItem />
            <WalletItem />
            <WalletItem />
            <WalletItem />
            <WalletItem />
            <WalletItem />
            <WalletItem />
            <WalletItem />
        </div>
        <button onClick={openModal} className="font-medium text-xl text-white bg-[#00ACE6] p-4 mt-3" style={{width: '100%', borderRadius: '5px'}}>
            Connect Wallet
        </button>
        <ConnectModal />
    </div>
    )
}

export default WalletList;