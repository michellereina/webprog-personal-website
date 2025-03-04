<template>
  <div class="container">
    <header>
      <h1>Know Me Better!</h1>
    </header>
    <main>
      <nav class="navbar">
        <ul class="nav-list">
          <li><RouterLink to="/" class="nav-link" aria-current="page">Home</RouterLink></li>
          <li><RouterLink to="/education" class="nav-link">Education</RouterLink></li>
          <li><RouterLink to="/interest" class="nav-link">Interests</RouterLink></li>
          <li><RouterLink to="/goals" class="nav-link">Goals</RouterLink></li>
          <li><RouterLink to="/gallery" class="nav-link">Gallery</RouterLink></li>
          <li><RouterLink to="/reference" class="nav-link">Reference</RouterLink></li>
          <li><RouterLink to="/survey" class="nav-link">Survey</RouterLink></li>
        </ul>
      </nav>

      <section class="main-content">
        <article class="about-me">
          <h2>💜About Me💜</h2>
          <img 
            src="https://i.pinimg.com/originals/d2/24/eb/d224eba9a97d27fb5f4702b06c8a3872.jpg" 
            alt="Profile of Michelle Reina B. Pineda" 
            class="profile-image"
          >
          <p>I'm Michelle Reina B. Pineda, born on October 14, 2004</p>
          <p>Libra♎ 20🌠 INTP⚗️</p>
        </article>
      </section>

      <aside class="sidebar">
        {/* Optional: Add sidebar content if needed */}
      </aside>
    </main>

    <footer>
      <p>Asia Pacific College</p>
    </footer>
  </div>
</template>

<script></script>

<style></style>