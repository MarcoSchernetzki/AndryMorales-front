import './appointment.page.css';
import { DateSelectArg, EventContentArg } from '@fullcalendar/core';
import allLocales from '@fullcalendar/core/locales-all';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { INITIAL_EVENTS } from '../../wishes/utils/event-utils';
import { useAppointments } from '../../wishes/hook/use.appointments';

const renderEventContent = (eventContent: EventContentArg) => {
    return (
        <>
            <b>{eventContent.timeText}</b>
            <i>{eventContent.event.title}</i>
        </>
    );
};

export const AppointmentPage = () => {
    const {
        handleDateSelect,
        handleEventClick,
        handleEvents,
        products,
        state,
    } = useAppointments();
    const getAppoint = (selectInfo: DateSelectArg) => {
        return handleDateSelect(selectInfo, products.products[0].duration);
    };

    return (
        <main className="container-login">
            <div className="demo-app-main">
                <FullCalendar
                    locales={allLocales}
                    locale={'es'}
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    headerToolbar={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek,timeGridDay',
                    }}
                    businessHours={[
                        {
                            daysOfWeek: [1, 2, 3, 4, 5, 6],
                            startTime: '09:00',
                            endTime: '21:00',
                        },
                    ]}
                    titleFormat={{ month: 'long' }}
                    dayHeaderFormat={{ weekday: 'short', day: 'numeric' }}
                    initialView="timeGridWeek"
                    editable={true}
                    selectable={true}
                    selectMirror={true}
                    dayMaxEvents={true}
                    weekends={state.weekendsVisible}
                    initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
                    select={getAppoint}
                    eventContent={renderEventContent} // custom render function
                    eventClick={handleEventClick}
                    slotDuration="00:15:00"
                    slotLabelFormat={{
                        hour: 'numeric',
                        minute: '2-digit',
                    }}
                    slotLabelInterval={15}
                    allDaySlot={false}
                    slotMinTime={'09:00'}
                    slotMaxTime={'21:00'}
                    eventsSet={handleEvents} // called after events are initialized/added/changed/removed
                    /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            */
                />
            </div>
        </main>
    );
};
