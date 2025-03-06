<template>
  <div class="container">
    <header>
      <h1>Goals</h1>
    </header>
    <main>
    <br>
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
        <div class="grid">
          <h2>Goals In Life and Dreams</h2>
          <ul>
            <li>To graduate college</li>
            <li>Have a stable job</li>
            <li>Travel to different countries</li>
          </ul>
        </div>
      </section>
    </main>

    <footer>
      Asia Pacific College
    </footer>
  </div>
</template>

<script>
export default {
  mounted() {
    document.addEventListener("mousemove", (e) => {
      const sparkle = document.createElement("div");
      sparkle.classList.add("cursor-sparkle");
      sparkle.style.top = `${e.clientY}px`;
      sparkle.style.left = `${e.clientX}px`;
      document.body.appendChild(sparkle);

      setTimeout(() => {
        sparkle.remove();
      }, 500);
    });
  }
};
</script>

<style>
body {
  background-color: #DED7EC;
  padding: 0;
  margin: 0;
}

.container {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
}

header {
  background-color: purple;
  padding: 20px;
  color: #DED7EC;
}

footer {
  background-color: purple;
  padding: 20px;
  color: #DED7EC;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
}

main {
  display: flex;
  flex-direction: column;
}

.main-content {
  flex-wrap: wrap;
  background-color: #DED7EC;
  padding: 20px;
  justify-content: center;
}

.main-content > .grid {
  background-color: rgba(194, 124, 238, 0.453);
  border-radius: 20px;
  width: 800px;
  height: auto;
  margin: auto;
  padding: 20px;
}

.nav-list {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.nav-link {
  text-decoration: none;
  font-size: 16px;
  padding: 10px 20px;
  background-color: #ede4ff;
  color: #4990B3;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

/* Navigation Bar Styling */
.navbar {
  margin: auto;
  margin-bottom: 20px;
  display: flex;
  background-color: #ede4ff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 10px 20px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  width: 700px;
}

.nav-link:hover {
  background-color: purple;
  transform: scale(1.05);
}

.nav-link:active {
  background-color: rgb(99, 1, 99);
}

/* Cursor sparkle effect */
.cursor-sparkle {
  position: absolute;
  width: 10px;
  height: 10px;
  background: #ede4ff;
  border-radius: 50%;
  box-shadow: 0 0 10px white;
  pointer-events: none;
}
</style>