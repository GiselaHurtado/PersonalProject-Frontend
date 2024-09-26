<script>
import { getEvents, createEvent, deleteEvent } from '@/services/calendar';

export default {
  data() {
    return {
      events: [],
      newEvent: { summary: '' }
    };
  },
  async created() {
    const response = await getEvents();
    this.events = response.data;
  },
  methods: {
    async createEvent() {
      await createEvent(this.newEvent);
      this.events.push(this.newEvent);
      this.newEvent.summary = '';
    },
    async deleteEvent(eventId) {
      await deleteEvent(eventId);
      this.events = this.events.filter(event => event.id !== eventId);
    }
  }
};
</script>

<template>
  <div class="appointment-container">
    <h1>Google Calendar Events</h1>
    <ul class="event-list">
      <li v-for="event in events" :key="event.id" class="event-item">
        <span class="event-summary">{{ event.summary }}</span>
        <button @click="deleteEvent(event.id)" class="delete-btn">Delete</button>
      </li>
    </ul>
    <form @submit.prevent="createEvent" class="event-form">
      <input v-model="newEvent.summary" placeholder="Event summary" class="event-input">
      <button type="submit" class="create-btn">Create Event</button>
    </form>
  </div>
</template>

<style scoped>
.appointment-container {
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  font-size: 24px;
  color: #333;
}

.event-list {
  list-style-type: none;
  padding: 0;
}

.event-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #fff;
  border-radius: 4px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.event-summary {
  font-size: 16px;
  color: #555;
}

.delete-btn {
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.delete-btn:hover {
  background-color: #c0392b;
}

.event-form {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}

.event-input {
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-right: 10px;
}

.create-btn {
  background-color: #2ecc71;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.create-btn:hover {
  background-color: #27ae60;
}
</style>
