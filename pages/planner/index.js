import React, { useEffect } from 'react';
import {
  AiOutlineLeft,
  AiOutlineRight,
  AiFillLock,
  AiFillUnlock,
  AiFillClockCircle,
  AiFillSave,
  AiOutlineDown,
  AiOutlineUp,
} from 'react-icons/ai';
import { FaFeatherAlt } from 'react-icons/fa';
import plannerApi from '../api/planner';
import { useSizeContext } from 'hooks/useSizeContext';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const zeroPad = (num, places) => String(num).padStart(places, '0');

const defaultEvents = [
  {
    id: 0,
    startTime: 0,
    durration: 60 * 6,
    title: 'Sleep',
    description: 'ZZZzzz',
    isCompleted: true,
    isFixed: true,
  },
];

var lastSavedEvents = defaultEvents.map((a) => {
  return { ...a };
});

export default function Planner() {
  //check to see if there are quary params
  //if there are, check to see if they are valid

  //get current date
  const [date, setDate] = React.useState(new Date());
  const [isLoading, setIsLoading] = React.useState(false);
  const [events, setEvents] = React.useState(
    defaultEvents.map((a) => {
      return { ...a };
    })
  );
  const [isSaved, setIsSaved] = React.useState(false);

  useEffect(() => {
    //comapre events and lastSavedEvents, if they are different, set isSaved to false
    if (JSON.stringify(events) !== JSON.stringify(lastSavedEvents)) {
      setIsSaved(false);
    } else {
      setIsSaved(true);
    }
  }, [events]);

  useEffect(() => {
    //save events to local storage
    fetchEvents();
  }, [date]);

  async function saveEvents() {
    setIsLoading(true);
    const dateString = date.toISOString().split('T')[0];
    const data = await plannerApi.postData(dateString, events);
    lastSavedEvents = events.map((a) => {
      return { ...a };
    });
    setIsSaved(true);
    setIsLoading(false);
  }

  async function fetchEvents() {
    setIsLoading(true);
    const dateString = date.toISOString().split('T')[0];
    const data = await plannerApi.getData(dateString);
    console.log('DATA', data);
    if (data.Item) {
      lastSavedEvents = data.Item.data.map((a) => {
        return { ...a };
      });
      setEvents(data.Item.data);
    } else {
      setEvents(
        defaultEvents.map((a) => {
          return { ...a };
        })
      );
    }
    setIsLoading(false);
  }

  async function itterateDate(days) {
    if (!isSaved) {
      const result = window.confirm('You have unsaved changes. Are you sure you want to continue?');
      if (result) {
        setDate(new Date(date.setDate(date.getDate() + days)));
      }
    } else {
      setDate(new Date(date.setDate(date.getDate() + days)));
    }
  }

  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <AiOutlineLeft onClick={() => itterateDate(-1)} />
        <div style={{ padding: 20 }}>{date.toDateString()}</div>
        <AiOutlineRight onClick={() => itterateDate(1)} />
      </div>
      <DayPlanner
        events={events}
        setEvents={(ev) => setEvents(ev)}
        isSaved={isSaved}
        saveData={saveEvents}
        isLoading={isLoading}
      />
    </div>
  );
}

function Event(props) {
  return (
    <div
      onClick={props.onClick}
      style={{
        height: (props.durration || 5) * props.scale,
        position: 'absolute',
        width: props.isMobile ? '80%' : '93%',
        top: props.startTime * props.scale,
        backgroundColor: props.isCompleted ? '#00A050' : '#505060',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: 10,
        paddingTop: 5,
        borderWidth: 4,
        borderColor: props.isFixed ? '#0050E0' : 'transparent',
        marginLeft: props.isMobile ? '20%' : '7%',
      }}
    >
      <div>{props.title}</div>
      {(props.durration || 5) * props.scale > 100 && (
        <div style={{ display: 'flex', alignItems: 'center' }}>{props.description}</div>
      )}
    </div>
  );
}

function EventModal(props) {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        onClick={() => {
          if (!props.durration) {
            props.editEvent(props.id, 'delete');
          }
          props.makeNull();
        }}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}
      />
      <div
        style={{
          width: '80%',
          height: '80%',
          backgroundColor: '#707080',
          borderRadius: 10,
          padding: 10,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 5,
            right: 5,
            flexDirection: 'row',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <AiOutlineDown fontSize={30} onClick={() => props.editEvent(props.id, 'down')} />
          <AiOutlineUp
            fontSize={30}
            style={{ marginRight: 20, marginLeft: 10 }}
            onClick={() => props.editEvent(props.id, 'up')}
          />
          {props.isFixed ? (
            <AiFillLock fontSize={30} onClick={() => props.editEvent(props.id, 'isFixed', false)} />
          ) : (
            <AiFillUnlock
              fontSize={30}
              onClick={() => props.editEvent(props.id, 'isFixed', true)}
            />
          )}
        </div>
        <div style={{ fontSize: 20, fontWeight: '600', borderBottomWidth: 1, width: '100%' }}>
          <input
            style={{ backgroundColor: 'transparent', fontWeight: '600' }}
            type="text"
            onChange={(ev) => props.editEvent(props.id, 'title', ev.target.value)}
            value={props.title}
          ></input>
        </div>
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            height: 50,
            marginTop: props.isMobile ? 20 : 0,
          }}
        >
          <div
            style={{
              fontSize: 16,
              fontWeight: '600',
              display: 'flex',
              flexDirection: props.isMobile ? 'column' : 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {!props.isMobile && 'Durration:'}
            <input
              style={{
                backgroundColor:
                  props.durration && props.durration >= 5 ? 'transparent' : '#D50000',
                fontWeight: '600',
                width: 85,
              }}
              type="number"
              onChange={(ev) => {
                console.log(ev.target.value);
                console.log(parseInt(ev.target.value, 10));
                props.editEvent(props.id, 'durration', parseInt(ev.target.value, 10));
              }}
              value={props.durration}
            ></input>
            minutes
          </div>
          <div style={{ fontSize: 16, fontWeight: '600', paddingLeft: 100 }}>
            Start Time: {zeroPad(Math.floor(props.startTime / 60), 2)}:
            {zeroPad(props.startTime % 60, 2)}
          </div>
        </div>
        Description:
        <textarea
          style={{
            marginTop: 20,
            height: props.isMobile ? '50%' : '60%',
            overflow: 'scroll',
            background: 'transparent',
            width: '100%',
            placeholder: 'Description',
          }}
          onChange={(ev) => props.editEvent(props.id, 'description', ev.target.value)}
          value={props.description}
        ></textarea>
        <div
          style={{
            height: 100,
            position: 'absolute',
            width: '100%',
            borderTopWidth: 1,
            bottom: 0,
            left: 0,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: 10,
            paddingRight: 10,
          }}
        >
          <div
            onClick={() => props.editEvent(props.id, 'isCompleted')}
            style={{
              backgroundColor: props.isCompleted ? '#D52000' : '#00A050',
              width: props.isMobile ? 100 : 200,
              height: '80%',
              display: 'flex',
              justifyContent: 'center',
              borderRadius: 5,
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            {props.isCompleted ? 'Remove Completed Mark' : 'Mark As Completed'}
          </div>
          <div
            onClick={() => props.editEvent(props.id, 'delete')}
            style={{
              backgroundColor: '#D52000',
              width: props.isMobile ? 100 : 200,
              height: '80%',
              display: 'flex',
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            Delete
          </div>
        </div>
      </div>
    </div>
  );
}

function DayPlanner({ events, setEvents, isSaved, saveData, isLoading }) {
  const { isMobile, isDesktop, isTablet, width } = useSizeContext();

  const height = 14400;
  const scale = (height / 1440) * 0.75;
  const dayPlannerRef = React.useRef();
  //current minute in the day
  const [currentMinute, setCurrentMinute] = React.useState(0);
  const [shouldFollowTime, setShouldFollowTime] = React.useState(false);
  const [selectedModalProps, setSelectedModalProps] = React.useState(null);

  //set scroll position
  function setScrollPosition(position) {
    window.scrollTo({
      left: 0,
      top: dayPlannerRef.current.offsetTop + position * 0.9,
      behavior: 'smooth',
    });
  }

  function createEvent() {
    const newEvent = {
      id: events.length,
      title: 'TITLE',
      description: '',
      startTime: events[events.length - 1].startTime + events[events.length - 1].durration,
      durration: 5,
      isFixed: false,
      isCompleted: false,
    };
    setEvents([...events, newEvent]);
    setSelectedModalProps(newEvent);
  }

  function editEvent(id, field, value) {
    if (field === 'durration') {
      value = parseInt(value);
      const difference = value - events[id].durration;
      events[id].durration = value;
      for (let i = id + 1; i < events.length; i++) {
        if (!events[i].isFixed) {
          events[i].startTime += difference;
        }
      }
    }
    if (field === 'startTime') {
      value = parseInt(value);
      events[id].startTime = value;
      for (let i = id + 1; i < events.length; i++) {
        if (!events[i].isFixed) {
          events[i].startTime += value;
        }
      }
    }
    if (field === 'isCompleted') {
      events[id].isCompleted = !events[id].isCompleted;
    }
    if (field === 'title') {
      events[id].title = value;
    }
    if (field === 'description') {
      events[id].description = value;
    }
    if (field === 'isFixed') {
      events[id].isFixed = !events[id].isFixed;
    }
    if (field === 'down') {
      if (id < events.length - 1) {
        const currentEvent = { ...events[id] };
        const nextEvent = { ...events[id + 1] };
        currentEvent.id = id + 1;
        nextEvent.id = id;
        events[id] = nextEvent;
        events[id + 1] = currentEvent;
        events[id + 1].startTime = currentEvent.startTime + nextEvent.durration;
        events[id].startTime -= events[id + 1].durration;
        setSelectedModalProps({ ...events[id + 1] });
        setEvents([...events]);
        if (id === events.length - 2) {
          toast('Newest event.');
        }
        toast('Next Event: "' + events[id + 2].title + '"');
        return;
      } else {
        toast('Newest event cannot be moved down.');
        return;
      }
    }
    if (field === 'up') {
      if (id > 0) {
        const currentEvent = { ...events[id] };
        const previousEvent = { ...events[id - 1] };
        currentEvent.id = id - 1;
        previousEvent.id = id;
        events[id] = previousEvent;
        events[id - 1] = currentEvent;
        events[id - 1].startTime = currentEvent.startTime - previousEvent.durration;
        events[id].startTime += events[id - 1].durration;
        setSelectedModalProps({ ...events[id - 1] });
        setEvents([...events]);
        if (id == 1) {
          toast('Earliest event.');
          return;
        }
        toast('Previous Event: "' + events[id - 2].title + '"');
        return;
      } else {
        toast('Earliest event cannot be moved up.');
        return;
      }
    }
    if (field === 'delete') {
      const durrationToDelete = events[id].durration;
      events.splice(id, 1);
      for (let i = id; i < events.length; i++) {
        if (!events[i].isFixed) {
          events[i].startTime -= durrationToDelete;
        }
        events[i].id = events[i].id - 1;
      }
      setEvents([...events]);
      setSelectedModalProps(null);
      return;
    }
    setEvents([...events]);
    setSelectedModalProps({ ...events[id] });
  }

  React.useEffect(() => {
    const interval = setInterval(() => {
      //get current minute in day
      currentMinute = new Date().getMinutes() + new Date().getHours() * 60;
      if (shouldFollowTime) {
        setScrollPosition(currentMinute * scale);
      }
      setCurrentMinute(currentMinute);
    }, 1000);
    return () => clearInterval(interval);
  }, [shouldFollowTime]);

  return (
    <div>
      <div style={{ height: height, position: 'relative' }} ref={dayPlannerRef}>
        <TimeScale scale={scale} />

        {events.map((event) => (
          <Event
            {...event}
            scale={scale}
            isMobile={isMobile}
            onClick={() => {
              setSelectedModalProps({ ...event });
            }}
          />
        ))}
        <TimeIndicator currentMinute={currentMinute} scale={scale} isVisible={true} />
        <ToastContainer autoClose={600} newestOnTop={true} enableMultiContainer={true} />
      </div>
      <div
        style={{
          position: 'fixed',
          width: isMobile ? '100%' : 150,
          height: isMobile ? 100 : 400,
          background: '#303040',
          borderRadius: isMobile ? 0 : 10,
          bottom: 0,
          right: 0,
          flexDirection: isMobile ? 'row' : 'column',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <div
          style={{
            width: isMobile ? 80 : '70%',
            height: isMobile ? '80%' : null,
            aspectRatio: 'auto 1/1',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 100,
            fontSize: 20,
            fontWeight: '800',
            background: isSaved || isLoading ? '#A0A0A0' : '#00A050',
          }}
          onClick={() => {
            if (isSaved || isLoading) {
              return;
            }
            saveData();
          }}
        >
          {!isLoading ? <AiFillSave fontSize={'250%'} /> : '. . .'}
        </div>
        <div
          style={{
            width: isMobile ? 80 : '70%',
            height: isMobile ? '80%' : null,
            aspectRatio: 'auto 1/1',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 100,
            background: '#00A0A0',
          }}
          onClick={() => {
            createEvent();
          }}
        >
          <FaFeatherAlt fontSize={'250%'} />
        </div>
        <div
          style={{
            width: isMobile ? 80 : '70%',
            height: isMobile ? '80%' : null,
            aspectRatio: 'auto 1/1',
            display: 'flex',
            borderRadius: 100,
            alignItems: 'center',
            justifyContent: 'center',
            background: shouldFollowTime ? 'green' : 'red',
          }}
          onClick={() => {
            if (!shouldFollowTime) setScrollPosition(currentMinute * scale);
            setShouldFollowTime(!shouldFollowTime);
          }}
        >
          <AiFillClockCircle fontSize={'250%'} />
        </div>
      </div>
      {selectedModalProps && (
        <EventModal
          isMobile={isMobile}
          {...selectedModalProps}
          makeNull={() => {
            setSelectedModalProps(null);
          }}
          editEvent={editEvent}
        />
      )}
    </div>
  );
}

function TimeIndicator({ currentMinute, scale, isVisible }) {
  return (
    <div
      style={{
        position: 'absolute',
        top: currentMinute * scale,
        left: 0,
        width: '100%',
        height: '2px',
        backgroundColor: isVisible ? '#D50000' : 'transparent',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          fontSize: '12px',
          fontWeight: '600',
          color: '#D50000',
        }}
      >
        {zeroPad(Math.floor(currentMinute / 60), 2) + ':' + zeroPad(currentMinute % 60, 2)}
      </div>
    </div>
  );
}

function TimeScale({ scale }) {
  const times = [
    '12:00 AM',
    '12:30 AM',
    '1:00 AM',
    '1:30 AM',
    '2:00 AM',
    '2:30 AM',
    '3:00 AM',
    '3:30 AM',
    '4:00 AM',
    '4:30 AM',
    '5:00 AM',
    '5:30 AM',
    '6:00 AM',
    '6:30 AM',
    '7:00 AM',
    '7:30 AM',
    '8:00 AM',
    '8:30 AM',
    '9:00 AM',
    '9:30 AM',
    '10:00 AM',
    '10:30 AM',
    '11:00 AM',
    '11:30 AM',
    '12:00 PM',
    '12:30 PM',
    '1:00 PM',
    '1:30 PM',
    '2:00 PM',
    '2:30 PM',
    '3:00 PM',
    '3:30 PM',
    '4:00 PM',
    '4:30 PM',
    '5:00 PM',
    '5:30 PM',
    '6:00 PM',
    '6:30 PM',
    '7:00 PM',
    '7:30 PM',
    '8:00 PM',
    '8:30 PM',
    '9:00 PM',
    '9:30 PM',
    '10:00 PM',
    '10:30 PM',
    '11:00 PM',
    '11:30 PM',
  ];
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
    >
      {times.map((time, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            top: index * scale * 30,
            left: 0,
            width: '100%',
            height: '1px',
            backgroundColor: index % 2 == 1 ? '#505050' : '#A0A0A0',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              fontSize: '12px',
              color: index % 2 == 1 ? '#505050' : '#A0A0A0',
            }}
          >
            {time}
          </div>
        </div>
      ))}
    </div>
  );
}
