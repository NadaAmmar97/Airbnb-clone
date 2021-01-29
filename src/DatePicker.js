import React, {useState} from 'react'
import './DatePicker.css'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { DateRangePicker } from 'react-date-range'
import PeopleIcon from '@material-ui/icons/People'
import {Button} from '@material-ui/core'
import {useHistory} from 'react-router-dom'
function DatePicker() {
    const history = useHistory()
    const [endDate, setEndDate] = useState(new Date());
    const [startDate, setStartDate] = useState(new Date());
    
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection"
    };

    function handleSelect (ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }
    return (
        <div className="DatePicker">
            <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
            <h2>
                Number of Guests
                <PeopleIcon/>
            </h2>
            <input min={0} defaultValue={2} type="number" />
            <Button onClick={()=> history.push('/search')}>Search Airbnb</Button>
        </div>
    )
}

export default DatePicker;
