<template>
  <div class="container">
    <header>
      <h1>References</h1>
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
          <h2>References and Sources</h2>
          <ul>
            <li>
              <p>OpenAI. (2023). ChatGPT (GPT-4). <a class="src_link" href="https://openai.com/gpt-4" target="_blank">https://openai.com/gpt-4</a></p>
              <p>Anthropic. (2024). Claude 3.7 Sonnet. <a class="src_link" href="https://www.anthropic.com/claude" target="_blank">https://www.anthropic.com/claude</a></p>
              <p>Google. (2024). Gemini Advanced. <a class="src_link" href="https://gemini.google.com" target="_blank">https://gemini.google.com</a></p>
              <p>Bootstrap. (n.d.). Introduction. <a class="src_link" href="https://getbootstrap.com/docs/5.0/getting-started/introduction/" target="_blank">https://getbootstrap.com/docs/5.0/getting-started/introduction/</a></p>
              <p>W3Schools. (n.d.). Vue.js Tryit Editor <a class="src_link" href="https://www.w3schools.com/vue/tryit.php?filename=tryvue_v-for_foodImgs2" target="_blank">https://www.w3schools.com/vue/tryit.php?filename=tryvue_v-for_foodImgs2</a></p>
              <p>W3Schools. (n.d.). Vue.js Two-Way Binding <a class="src_link" href="https://www.w3schools.com/vue/tryit.php?filename=tryvue_modifiers_twoWay" target="_blank">https://www.w3schools.com/vue/tryit.php?filename=tryvue_modifiers_twoWay</a></p>
            </li>
          </ul>
        </div>
      </section>
    </main>
      <footer>
       Asia Pacific College
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

<style>body{
    background-color: #DED7EC;
  
    padding: 0px;
    margin: 0px;
  }
  
  .container {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
  
  }
  
  header{
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

  .images{
    width: 1650px;
    background-color: #2c2c2c;
    border-radius: 20px;
    justify-content: center;
    text-align: center;
    padding: 25px;
    color: #4990B3;
  }
  img{
    width: 25%;
    display: inline-block;
  }
  table {
    border-collapse: collapse;
    width: 100%;
  }
  th, td{
    padding: 10px;
    text-align: center;
    border-bottom: 1px solid #ddd;
  }
  .cursor-sparkle {
    position: absolute;
    width: 10px;
    height: 10px;
    background: #ede4ff;
    border-radius: 50%;
    box-shadow: 0 0 10px white;
    pointer-events: none;
  }
  ul, li {
    margin: 0;
    padding: 0;
    list-style: none;
    font-family: "Poppins", serif;
  }
p{
  color: #3d728d;
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
  }</style>