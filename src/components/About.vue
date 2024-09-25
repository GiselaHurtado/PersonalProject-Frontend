<template>
  <div class="about">
    <div class="text-content">
      <h1>{{ name }}</h1>
      <p class="quote">"{{ quote }}"</p>
      <div class="bio">
        <h2>About Me</h2>
        <p>{{ introduction }}</p>
        <h3>Professional Experience:</h3>
        <ul>
          <li>{{ experience.years }} years as a certified paddle tennis instructor</li>
          <li>{{ experience.players }}</li>
          <li>Specialized in {{ experience.specialization }}</li>
        </ul>
        <h3>Coaching Philosophy:</h3>
        <p>{{ philosophy }}</p>
        <h3>Qualifications and Certifications:</h3>
        <ul>
          <li>{{ qualifications.certifications }}</li>
          <li>{{ qualifications.degree }}</li>
          <li>{{ qualifications.continuedEducation }}</li>
        </ul>
        <h3>Services Offered:</h3>
        <ul>
          <li v-for="service in services" :key="service">{{ service }}</li>
        </ul>
      </div>
    </div>
    <div class="image-content">
      <img :src="imageUrl" alt="Paddle tennis coach" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const name = ref("Nick Bollettieri");
    const quote = ref("Believe in yourself and never, never doubt your ability to do it.");
    const introduction = ref(
      "Hi, I'm Nick Bollettieri, a passionate tennis trainer with over 30 years of experience in shaping the next generation of paddle tennis players."
    );
    const experience = ref({
      years: 30,
      players: "Worked with players ranging from beginners to advanced competitors",
      specialization: "junior development and serve techniques",
    });
    const philosophy = ref(
      "I believe in a holistic approach to paddle tennis training, focusing not just on technical skills but also on mental strength, physical fitness, and strategic thinking."
    );
    const qualifications = ref({
      certifications: "PTR Professional, USPTA Elite Professional",
      degree: "B.S. in Kinesiology",
      continuedEducation: "Specialized courses in sports psychology and fitness",
    });
    const services = ref([
      "Private lessons",
      "Group clinics",
      "Tournament preparation",
      "Video analysis",
      "Fitness training for tennis",
    ]);
    
    // Utiliza import.meta.url para cargar imágenes
    const imageUrl = ref(new URL('@/assets/images/serv/servpaddle10.png', import.meta.url).href);

    return {
      name,
      quote,
      introduction,
      experience,
      philosophy,
      qualifications,
      services,
      imageUrl,
    };
  },
};
</script>

<style scoped>
.about-me {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

.text-content {
  flex: 1;
  padding-right: 20px;
}

.image-content {
  flex: 1;
  display: flex;
  justify-content: center;
}

img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}

h1 {
  font-size: 2.5rem;
  font-weight: bold;
}

.quote {
  font-size: 1.5rem;
  font-style: italic;
  margin-bottom: 20px;
}

.bio h2,
.bio h3 {
  margin-top: 20px;
  font-weight: bold;
}

.bio p,
.bio ul {
  margin-bottom: 15px;
}

@media (max-width: 768px) {
  .about-me {
    flex-direction: column;
    align-items: flex-start;
  }

  .text-content {
    padding-right: 0;
  }

  .image-content {
    margin-top: 20px;
  }
}
</style>
