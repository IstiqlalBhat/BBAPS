import React from 'react';
import LabelCard from './ConvertTokenPart/LabelCard';
import TokenListCont from './ConvertTokenPart/TokenListCont';

const ConvertTokenPart = (props) => {
    return(
        <div className='convertToken'>
            <LabelCard />
            <TokenListCont />       
        </div>
    )
}

export default ConvertTokenPart;