
import axios from 'axios';

export const getEvents = async () => {
  const auth = localStorage.getItem('auth');
  return axios.get('/calendar/events', {
    headers: { Authorization: auth }
  });
};

export const createEvent = async (eventData) => {
  const auth = localStorage.getItem('auth');
  return axios.post('/calendar/events', eventData, {
    headers: { Authorization: auth }
  });
};

export const deleteEvent = async (eventId) => {
  const auth = localStorage.getItem('auth');
  return axios.delete(`/calendar/events/${eventId}`, {
    headers: { Authorization: auth }
  });
};
