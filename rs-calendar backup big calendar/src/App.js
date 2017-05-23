import React from 'react';
import moment from 'moment';

import BigCalendar from './lib/index';
import Events from './events';

let events = new Events();
events.map(obj => {
        for(let key in obj){
        if(key === 'start'){
            obj.start = new Date(obj.start);
            obj.end = obj.start + obj.duration; 
        }
    }    
});

BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

export default class App extends React.Component {
  constructor(...args) {//eslint-disable-line
    super(...args);
  }
  
  render () {
    return ( <BigCalendar
          popup
          selectable
          events={events}
          defaultView='month'
          scrollToTime={new Date(2017, 1, 1, 6)}
          defaultDate={new Date(2017, 3, 12)}
          //onNavigate={event => alert('on navigate')}
          //onView={event => alert('on view')}
          onSelectEvent={event => alert(event.title)}
          onSelectSlot={(slotInfo) => alert(
            `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
            `\nend: ${slotInfo.end.toLocaleString()}`
          )}
        /> )
  }
}
