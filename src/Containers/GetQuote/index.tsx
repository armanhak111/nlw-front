import React from 'react';
import Footer from '../../Components/footer/index'
import GetQuoteComponent from '../../Components/GetQuote';
import Header from '../../Components/header';
import './styles.css'

const GetQuote: React.FC = () => {
    return (
        <>
            <Header />
            <div style={{display: 'flex', justifyContent: 'center'}} className="quoteContainer">
            <GetQuoteComponent />
            </div>
            <Footer />
        </>
    )
};


export default GetQuote;