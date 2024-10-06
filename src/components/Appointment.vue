<script setup>

</script>

<template>
  <div class="calendar-container">
    <iframe 
      src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2zQP4DrKzOUDpfZwU1_FXNDGJgvn1hLYMxSD91ri2V54sdqTNJy-skudSdPeShuvJbu0YL8QdU?gv=true" 
      class="calendar-frame">
    </iframe>
  </div>
</template>

<style scoped>
.calendar-container {
  margin: 100px 80px 50px 200px;
  display: flex;
  width: 70%;
  justify-content: center;
  align-items: center;
  background-color: #b9bf4eb8;
  color: #f9f9f9;
  box-shadow: 0 14px 15px 20px rgba(189, 196, 69, 0.5); 
  padding: 20px;
  border-radius: 10px;
  box-sizing: border-box;
  font-family: 'Quicksand', sans-serif;
}


.calendar-frame {
  border: 0;
  width: 70%;
  height: 850px;
  frameborder: 0;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 1200px;
  box-shadow: 0 4px 15px rgba(189, 196, 69, 0.5); 
  color: #f9f9f9;
  font-family: 'Quicksand', sans-serif;
}


@media (max-width: 768px) {
  .calendar-container {
    margin: 20px;
    padding: 10px;
    margin-top: 100px;
    margin-bottom: 40px;
  }

  .calendar-frame {
    height: 800px;
  }
}


@media (min-width: 769px) and (max-width: 1024px) {
  .calendar-container {
    margin: 100px 50px 30px;
  }

  .calendar-frame {
    height: 900px;
  }
}
</style>
