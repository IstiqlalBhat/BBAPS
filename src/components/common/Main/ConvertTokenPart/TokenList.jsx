import React from 'react';
import TokenCard from './TokenCard';

const TokenList = (props) => {
    return (
        <div style={{
            backgroundColor: '#242D32',
            marginTop: '20px',
            width: '100%',
            borderRadius: '5px',
            padding: '5px',
            overflow: 'auto',
            height: '70%'
        }}>
            <TokenCard />
        </div>
    )
}

export default TokenList;