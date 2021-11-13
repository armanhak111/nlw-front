import CircularProgress from '@mui/material/CircularProgress';
import React from 'react';
import './styles.css'

interface PropTypes {
    text?: string;
    style?: any
    loading? :boolean
}
export const GetQuoteActiveButton: React.FC<PropTypes> = ({text, style, loading}) => {
    const current = text || 'Get Quote'
    return (
        <div style={style} className={'getQuoteActive'}>
            <div className='currentItem'>
                {current}
            </div>
            { !loading && <CircularProgress size={30} style={{marginLeft: '15px', color:'#221651'}} />}
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