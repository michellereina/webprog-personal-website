<template>
  <div class="container">
    <header>
      <h1>Education</h1>
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
        <div class="education-section">
          <h2>Education and Achievements</h2>
          <p>Studies at Asia Pacific College</p>
          <p>Graduated Senior High School at University of Makati</p>
          <p>Graduated Junior High School at Fort Bonifacio High School</p>
          <p>Graduated Elementary and Pre-school at Pineslight School of Makati</p>
        </div>

        <div class="course-section">
          <h2>Course</h2>
          <p>
            Studying Bachelor of Science in Information Technology 
            with specialization in Mobile and Internet Technology
          </p>
        </div>

        <div class="experience-section">
          <h2>IT Experience</h2>
          <ul>
            <li>Creating an app using Android Studio</li>
          </ul>
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