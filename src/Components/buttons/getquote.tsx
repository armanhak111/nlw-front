import React from 'react';
import './styles.css'
interface PropTypes {
    text?: string;
}
export const GetQuoteActiveButton: React.FC<PropTypes> = ({text}) => {
    const current = text || 'Get Quote'
    return (
        <div className={'getQuoteActive'}>
            <div className='currentItem'>
                {current}
            </div>
        </div>
    )
}

export const GetQuotePassiveButton: React.FC<PropTypes> = ({text}) => {
    const current = text || 'Get Quote'
    return (
        <div className={'getQuotePassive'}>
            <div className='currentItem'>
                {current}
            </div>
        </div>
    )
}