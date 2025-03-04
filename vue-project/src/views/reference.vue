<template>
  <div class="container">
    <header>
      <h1>References</h1>
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
        <h2>References and Sources</h2>
        
        <div class="references-container">
          <div class="reference-category">
            <h3>AI and Learning Platforms</h3>
            <ul class="reference-list">
              <li v-for="ref in aiReferences" :key="ref.name">
                <a :href="ref.url" target="_blank" rel="noopener noreferrer">
                  {{ ref.name }}
                </a>
              </li>
            </ul>
          </div>

          <div class="reference-category">
            <h3>Web Development Resources</h3>
            <ul class="reference-list">
              <li v-for="ref in webDevReferences" :key="ref.name">
                <a :href="ref.url" target="_blank" rel="noopener noreferrer">
                  {{ ref.name }}
                </a>
              </li>
            </ul>
          </div>

          <div class="reference-category">
            <h3>Design and Inspiration</h3>
            <ul class="reference-list">
              <li v-for="ref in designReferences" :key="ref.name">
                <a :href="ref.url" target="_blank" rel="noopener noreferrer">
                  {{ ref.name }}
                </a>
              </li>
            </ul>
          </div>
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
</script>

<style></style>