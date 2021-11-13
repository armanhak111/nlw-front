import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { GetQuoteActiveButton } from '../buttons/getquote';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { EMAIL_INVALID, GET_QUOTE_VALUES_INITIAL, ILNESS, PLEASE_FILL } from '../../Utils/constants';
import { CURRENT_WIGHT_POINT } from '../../Constants';
import { EMAIl } from '../../Utils/validations';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const GetQuoteComponent: React.FC = () => {
    const [curretWeightPoint, setCurrentWeightPoint] = useState<boolean>(true)
    const [ilness, setIlness] = useState<string[]>([]);
    const [getQuote, setGetQuote] = useState<any>(GET_QUOTE_VALUES_INITIAL)
    const [error, setError] = useState<string>('');
    const currentWeightNaming = curretWeightPoint ? CURRENT_WIGHT_POINT.kg : CURRENT_WIGHT_POINT.lbs

    const handleIlness = (event: any) => {
        const {
            target: { value },
        } = event;
        setIlness(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const handleChange = (e: any) => {
        setGetQuote({
            ...getQuote,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () => {
        if (!getQuote.name || !getQuote.email || !getQuote.weight || !getQuote.old) {
           return setError(PLEASE_FILL)
        } 
        if (!EMAIl.test(getQuote.email)) {
            return setError(EMAIL_INVALID)
        }
        setError('');
        console.log({
            ...getQuote,
            ilness,
            weightNaming: currentWeightNaming
        })
    }

    return (
        <div className='quote'>
            <div className="quoteText">
                Get Quote
            </div>
            <div className={'formmain'}>
                <div className="getQuoteContainerForm">
                    <TextField
                        label="Name"
                        onChange={handleChange}
                        value={getQuote.name}
                        variant="standard"
                        className='textCustomField'
                        color="warning"
                        name='name'
                        focused
                    />
                    <TextField
                        label="Email"
                        variant="standard"
                        onChange={handleChange}
                        value={getQuote.email}
                        className='textCustomField'
                        color="warning"
                        name='email'
                        focused
                    />
                    <div className='kgelbcontainer'>
                        <TextField
                            label="Weight ( KG or LBS )"
                            variant="standard"
                            onChange={handleChange}
                            value={getQuote.weight}
                            className='textCustomField'
                            type="number"
                            color="warning"
                            name='weight'
                            focused
                        />
                        <span className='kgelbchanger'>
                            <div onClick={() => setCurrentWeightPoint(!curretWeightPoint)}
                                className={`${curretWeightPoint ? 'kgActive' : 'kgDeactive'}`}>
                                KG
                            </div>
                            <div onClick={() => setCurrentWeightPoint(!curretWeightPoint)}
                                className={`${!curretWeightPoint ? 'lbsActive' : 'lbsDeactive'}`}>
                                LBS
                            </div>
                        </span>
                    </div>
                    <TextField
                        label="How Old Are You ? "
                        variant="standard"
                        type="number"
                        onChange={handleChange}
                        value={getQuote.old}
                        className='textCustomField'
                        color="warning"
                        name='old'
                        focused
                    />
                    <div className='multipleIlnessSelect'>
                        <FormControl sx={{ m: 1, width: '100%' }}>
                            <InputLabel id="demo-multiple-checkbox-label">Are You Have Any Illness?</InputLabel>
                            <Select
                                labelId="demo-multiple-checkbox-label"
                                id="demo-multiple-checkbox"
                                multiple
                                value={ilness}
                                onChange={handleIlness}
                                input={<OutlinedInput label="Are You Have Any Illness?" />}
                                renderValue={(selected) => selected.join(', ')}
                                MenuProps={MenuProps}
                            >
                                {ILNESS.map((name: string) => (
                                    <MenuItem key={name} value={name}>
                                        <Checkbox checked={ilness.indexOf(name) > -1} />
                                        <ListItemText primary={name} />
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                    <div className="message getQuoteMessage">
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Any Health Problrms...  ?"
                            multiline
                            onChange={handleChange}
                            value={getQuote.message}
                            name='message'
                            className='messageCustomField messageCustomFieldGetQuote'
                            maxRows={6}
                        />
                    </div>
                    <div onClick={handleSubmit} className='getQuoteFormSubmitButton'>
                    <span className='getQuoteErrorMessage'>{error}</span>
                        <GetQuoteActiveButton />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default GetQuoteComponent;