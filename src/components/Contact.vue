<template>
    <div class="contact-container">
      <div class="contact-card">
        <div class="contact-form">
          <h2>Contact Us</h2>
          <p class="subtitle">We would love to hear from you!</p>
          <form @submit.prevent="handleSubmit">
            <input v-model="name" type="text" placeholder="Your Name" required>
            <input v-model="email" type="email" placeholder="Your Email" required>
            <textarea v-model="message" placeholder="Your Message" required></textarea>
            <button type="submit" class="btn-primary">SEND MESSAGE</button>
          </form>
        </div>
      </div>
      <div class="contact-info-card">
        <div class="contact-info-content">
          <h2>Get in Touch</h2>
          <p>Feel free to reach out to us via social media or our contact form.</p>
          <div class="social-icons">
            <a href="#" class="icon"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="icon"><i class="fab fa-linkedin-in"></i></a>
            <a href="#" class="icon"><i class="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const name = ref('')
  const email = ref('')
  const message = ref('')
  
  const handleSubmit = () => {
    console.log('Form submitted:', { name: name.value, email: email.value, message: message.value })
    // Aquí puedes implementar la lógica para enviar el formulario
  }
  </script>
  
  <style scoped>
  * {
    font-family: 'Quicksand', sans-serif;
  }
  
  .contact-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #1a1a1a;
    font-family: 'Quicksand', sans-serif;
    color: #000;
    font-weight: 200;
  }
  
  .contact-card, .contact-info-card {
    width: 50%;
    max-width: 500px;
    height: auto;
    background-color: white;
    border-radius: 10px;
    box-shadow: 13px 10px 12px 3px rgba(224, 220, 224, 1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
    box-sizing: border-box;
    font-family: 'Quicksand', sans-serif;
    color: #000;
    font-weight: 300;
  }
  
  .contact-card {
    background-color: white;
  }
  
  .contact-info-card {
    background-color: #bdc445;
    color: white;
    text-align: center;
  }
  
  .contact-info-content {
    max-width: 80%;
    margin: 0 auto;
  }
  
  h2 {
    margin-bottom: 1rem;
    font-size: 1.8rem;
    font-family: 'Quicksand', sans-serif;
    color: #000;
    font-weight: 200;
  }
  
  .subtitle {
    color: #777;
    margin-bottom: 1rem;
  }
  
  .social-icons {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }
  
  .icon {
    margin: 0 0.5rem;
    color: #bdc445;
    font-size: 1.2rem;
  }
  
  .contact-form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  
  input, textarea {
    margin-bottom: 1rem;
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
  }
  
  textarea {
    resize: none;
    height: 100px;
  }
  
  .btn-primary {
    padding: 0.8rem 1rem;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    font-weight: bold;
    font-size: 1rem;
    background-color: #bdc445;
    color: white;
    width: 100%;
    transition: background-color 0.3s;
    box-shadow: 8px 8px 8px 3px rgba(224, 220, 224, 1);
  }
  
  .btn-primary:hover {
    background-color: #aab03d;
  }
  
  @media (max-width: 768px) {
    .contact-container {
      flex-direction: column;
      padding: 1rem;
    }
  
    .contact-card, .contact-info-card {
      width: 100%;
      max-width: none;
      height: auto;
      margin-bottom: 1rem;
    }
  }
  </style>
  