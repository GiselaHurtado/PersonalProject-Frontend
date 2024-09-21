<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const classes = ref([
  {
    title: 'Beginner Paddle',
    imgSrc: 'servpaddle1.png',
    description: 'Perfect for newcomers to the sport.',
    instructor: 'John Doe',
    duration: '60 min'
  },
  {
    title: 'Advanced Techniques',
    imgSrc: 'servpaddle2.png',
    description: 'Enhance your skills with pro-level techniques.',
    instructor: 'Jane Smith',
    duration: '90 min'
  },
  {
    title: 'Beach Paddle',
    imgSrc: 'servpaddle11.png',
    description: 'Experience the thrill of paddle on sandy beaches.',
    instructor: 'Mike Johnson',
    duration: '75 min'
  },
  {
    title: 'Indoor Training',
    imgSrc: 'servpaddle6.png',
    description: 'Year-round training in our state-of-the-art facility.',
    instructor: 'Sarah Williams',
    duration: '60 min'
  }
]);

const activeSlide = ref(0);

const nextSlide = () => {
  activeSlide.value = (activeSlide.value + 1) % classes.value.length;
};

const prevSlide = () => {
  activeSlide.value = (activeSlide.value - 1 + classes.value.length) % classes.value.length;
};

const getImageUrl = (name) => {
  return new URL(`/src/assets/images/serv/${name}`, import.meta.url).href;
};

// Redirigir al login en vez de a booking
const bookNow = () => {
  router.push('/login'); // Cambiado a /login
};
</script>

<template>
  <div class="paddle-slider-container">
    <div class="paddle-slider">
      <div v-for="(item, index) in classes" :key="index" :class="['slide', { active: index === activeSlide }]">
        <img :src="getImageUrl(item.imgSrc)" :alt="item.title" class="slide-image" />
        <div class="slide-content">
          <div class="slide-text">
            <h5>PADDLE CLASS</h5>
            <h1>{{ item.title }}</h1>
            <p>{{ item.description }}</p>
            <div class="class-info">
              <span>Instructor: {{ item.instructor }}</span>
              <span>Duration: {{ item.duration }}</span>
            </div>
          </div>
          <button class="book-btn" @click="bookNow">Book Now</button> <!-- Botón redirige al login -->
        </div>
      </div>

      <button @click="prevSlide" class="control-btn prev">&lt;</button>
      <button @click="nextSlide" class="control-btn next">&gt;</button>
    </div>
  </div>
</template>

<style scoped>
.paddle-slider-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.paddle-slider {
  width: 100%;
  height: 100%;
  position: relative;
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.slide.active {
  opacity: 1;
}

.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.slide-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background: linear-gradient(transparent, rgba(0,0,0,0.7));
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.slide-text {
  max-width: 60%;
}

.slide-text h5 {
  font-size: 1rem;
  letter-spacing: 0.3em;
  margin-bottom: 0.5rem;
}

.slide-text h1 {
  font-size: 2.5rem;
  margin: 0 0 0.5rem;
  line-height: 1.2;
}

.slide-text p {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.class-info {
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
}

.control-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  font-size: 2rem;
  padding: 10px 15px;
  cursor: pointer;
  z-index: 10;
}

.control-btn.prev { left: 20px; }
.control-btn.next { right: 20px; }

.book-btn {
  background-color: #bdc445;
  color: #000;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
}

@media (max-width: 1024px) {
  .slide-text h1 {
    font-size: 2rem;
  }

  .slide-text p {
    font-size: 0.9rem;
  }
}

@media (max-width: 768px) {
  .slide-content {
    flex-direction: column;
    align-items: flex-start;
  }

  .slide-text {
    max-width: 100%;
    margin-bottom: 1rem;
  }

  .slide-text h1 {
    font-size: 1.8rem;
  }

  .class-info {
    flex-direction: column;
    gap: 5px;
  }

  .book-btn {
    align-self: flex-end;
  }
}

@media (max-width: 480px) {
  .slide-text h1 {
    font-size: 1.5rem;
  }

  .control-btn {
    font-size: 1.5rem;
    padding: 8px 12px;
  }
}
</style>
