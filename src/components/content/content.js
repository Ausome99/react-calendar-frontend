import React from 'react';

import DaysWrapper from './daysWrapper';
import CalendarBoxesWrapper from './calendarBoxesWrapper';

export default function contentWrapper(props) {
    console.log(props.month)
    return (
        <div className="content-wrapper">
            <DaysWrapper />
            <CalendarBoxesWrapper
                daysInMonth={props.daysInMonth}
                daysInPreviousMonth={props.daysInPreviousMonth}
                startDay={props.startDay}
                month={props.month}
                year={props.year}
            />
        </div>
    )
}