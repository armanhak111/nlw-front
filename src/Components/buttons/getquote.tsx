import React from 'react';
import './styles.css'
interface PropTypes {
    isActive?: boolean;
}
export const GetQuoteActiveButton: React.FC<PropTypes> = (isActive) => {
    return (
        <div className={'getQuoteActive'}>
            <div className='currentItem'>
                Get Quote
            </div>
        </div>
    )
}

export const GetQuotePassiveButton: React.FC<PropTypes> = (isActive) => {
    return (
        <div className={'getQuotePassive'}>
            <div className='currentItem'>
                Get Quote
            </div>
        </div>
    )
}