import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { CalendarEvent, Navbar , Calendarmodal, FabAddNew, FabDelete} from '../';
import {getMessagesEs, localizer} from '../../helpers'
import { useState } from 'react';
import { useCalendarStore, useUiStore } from '../../hooks';

/*
const events = [{
    title: 'Cumpleaños del Team Leader',
    notes: 'Comprarle una taza de spiderman pequeño',
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: '#fafafa',
    user:{
        id: '123',
        name: 'Yancy'
    }
}]

*/
export const CalendarPage = () => {

    const { openDateModal } = useUiStore();

    const { events, setActiveEvent } = useCalendarStore();

    const [ lastView, setLastView] = useState(localStorage.getItem('lastView') || 'agenda');

    const eventStyleGetter = (event, start, end, isSelected) => {
        
        const style = {
            backgroundColor: '#527375',
            borderRadius: '0px',
            color: 'white'
        }

        return {
            style
        }
    }

    const onDoubleClick = (event) => {
        openDateModal();
    }

    const onSelect = (event) => {
        setActiveEvent( event );
    }

    const onViewChange = (event) => {
        localStorage.setItem('lastView', event)
        setLastView(event)
    }

    return(
        <>
            <Navbar/>
            <Calendar
                culture='es'
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 'calc(100vh - 80px)' }}
                messages={getMessagesEs()}
                eventPropGetter={eventStyleGetter}
                components={{
                    event: CalendarEvent
                }}

                //colocar los eventos acá
                onDoubleClickEvent={ onDoubleClick }
                onSelectEvent={ onSelect }
                onView = { onViewChange }

                defaultView={ lastView }

            />

            <Calendarmodal/>

            <FabAddNew />
            
            <FabDelete />
        </>
    )
}