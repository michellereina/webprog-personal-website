<template>
  <div class="container">
    <header>
      <h1>Picture Gallery</h1>
    </header>

    <main>
      <nav class="navbar">
        <ul class="nav-list">
          <li><RouterLink to="/" class="nav-link">Home</RouterLink></li>
          <li><RouterLink to="/education" class="nav-link">Education</RouterLink></li>
          <li><RouterLink to="/interest" class="nav-link">Interests</RouterLink></li>
          <li><RouterLink to="/goals" class="nav-link">Goals</RouterLink></li>
          <li><RouterLink to="/gallery" class="nav-link">Gallery</RouterLink></li>
          <li><RouterLink to="/reference" class="nav-link">Reference</RouterLink></li>
          <li><RouterLink to="/survey" class="nav-link">Survey</RouterLink></li>
        </ul>
      </nav>

      <section class="main-content">
        <h2>Through photography, we can see the world through another's eyes.</h2>
        
        <div class="gallery-container">
          <figure v-for="photo in photos" :key="photo.id" class="gallery-item">
            <img :src="photo.url" :alt="photo.name" class="gallery-image">
            <figcaption class="gallery-caption">{{ photo.name }}</figcaption>
          </figure>
        </div>
      </section>

      <aside class="sidebar">
        <!-- Sidebar content can be added here if needed -->
      </aside>
    </main>

    <footer>
      <p>Asia Pacific College</p>
    </footer>
  </div>
</template>

<script>document.addEventListener('mousemove', (e) => {
    const sparkle = document.createElement('div');
    sparkle.classList.add('cursor-sparkle');
    sparkle.style.top = `${e.clientY}px`;
    sparkle.style.left = `${e.clientX}px`;
    document.body.appendChild(sparkle);
  
    setTimeout(() => {
      sparkle.remove();
    }, 500);
  });

  const app = Vue.createApp({
    data() {
      return {
        photos: [
          { name: '🐇Buying Figurines', url: 'Me buying figurines.jpg' },
          { name: '📍Kawaguchi', url: "Me in Fuji.jpg" },
          { name: '📍Tokyo', url: "Me in Tokyo.jpg" },
         
        ]
      };
    }
  });
  
  app.mount('#app');
</script>
<style></style>