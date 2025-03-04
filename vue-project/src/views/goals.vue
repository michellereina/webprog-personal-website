<template>
  <div class="container">
    <header>
      <h1>Goals</h1>
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
        <h2>Goals In Life and Dreams</h2>
        
        <div class="goals-container">
          <ul class="goals-list">
            <li v-for="(goal, index) in goals" :key="index" class="goal-item">
              <span class="goal-icon">{{ goal.icon }}</span>
              <span class="goal-text">{{ goal.text }}</span>
            </li>
          </ul>
        </div>

        <div class="future-plans">
          <h3>Future Aspirations</h3>
          <p>
            These goals represent my current ambitions and the path I hope to navigate 
            through personal and professional growth. Each goal is a stepping stone 
            towards creating a fulfilling and impactful life.
          </p>
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