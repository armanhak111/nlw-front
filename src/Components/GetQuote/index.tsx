import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { CURRENT_WIGHT_POINT } from '../../Constants';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

const GetQuoteComponent: React.FC = () => {
    const [curretWeightPoint, setCurrentWeightPoint] = useState<string>(CURRENT_WIGHT_POINT.kg)
    return (
        <div className='quote'>
            <div className="quoteText">
                Get Quote
            </div>
            <div className={'formmain'}>
                <div className="getQuoteContainerForm">
                    <TextField
                        label="Name"
                        variant="standard"
                        className='textCustomField'
                        color="warning"
                        name='name'
                        focused
                    />
                    <TextField
                        label="Email"
                        variant="standard"
                        className='textCustomField'
                        color="warning"
                        name='email'
                        focused
                    />
                    <div className='kgelbcontainer'>
                        <TextField
                            label="Weight ( KG or LBS )"
                            variant="standard"
                            className='textCustomField'
                            color="warning"
                            name='weight'
                            focused
                        />
                        <span className='kgelbchanger'>
                            <div onClick={() => setCurrentWeightPoint(CURRENT_WIGHT_POINT.kg)}
                                className={`${curretWeightPoint === CURRENT_WIGHT_POINT.kg ? 'kgActive' : 'kgDeactive'}`}>
                                KG
                            </div>
                            <div onClick={() => setCurrentWeightPoint(CURRENT_WIGHT_POINT.lbs)}
                                className={`${curretWeightPoint === CURRENT_WIGHT_POINT.lbs ? 'lbsActive' : 'lbsDeactive'}`}>
                                LBS
                            </div>
                        </span>
                    </div>
                    <TextField
                        label="How Old Are You ? "
                        variant="standard"
                        className='textCustomField'
                        color="warning"
                        name='old'
                        focused
                    />
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel variant="standard" className='ilnessLabel' htmlFor="uncontrolled-native">
                            Are You Have Any Illness?
                            </InputLabel>
                            <NativeSelect>
                                <option value={0}>No</option>
                                <option value={20}>Twenty</option>
                                <option value={30}>Thirty</option>
                            </NativeSelect>
                        </FormControl>
                    </Box>
                </div>
            </div>
        </div>
    )
};

export default GetQuoteComponent;