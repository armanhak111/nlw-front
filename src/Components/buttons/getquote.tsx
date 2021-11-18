import CircularProgress from '@mui/material/CircularProgress';
import React from 'react';
import { useSelector } from 'react-redux';
import { LOADING } from '../../store/selector';
import './styles.css'

interface PropTypes {
    text?: string;
    style?: any
}
export const GetQuoteActiveButton: React.FC<PropTypes> = ({text, style}) => {
    const loading = useSelector(LOADING)
    const current = text || 'Get Quote'
    return (
        <div style={style} className={'getQuoteActive'}>
            <div className='currentItem'>
                {current}
            </div>
            { loading && <CircularProgress size={30} style={{marginLeft: '15px', color:'#221651'}} />}
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


export const GetNext:React.FC = () => {
    return (
        <div className='getNextBUtton'>
            <span>Get Next</span>
        </div>
    )
}