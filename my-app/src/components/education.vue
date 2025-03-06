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

<style>
body{
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
    text-align: center;
    line-height: 50px;
    color: #3d728d;
  }

  .grid2 {
    
    background-color: rgba(194, 124, 238, 0.453);
    border-radius: 20px;
    width: 800px;
    height: auto;
    margin: auto;
    padding: 20px;
    text-align: center;
    line-height: 50px;
    color: #3d728d;
  }
  .grid3 {
    
    background-color: rgba(194, 124, 238, 0.453);
    border-radius: 20px;
    width: 800px;
    height: auto;
    margin: auto;
    padding: 20px;
    text-align: center;
    line-height: 50px;
    color: #3d728d;
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
  }

  @media (max-width:768px){
    .container {
      display: flex;
      flex-direction: column;
      padding: 0;
      margin: 0;
      width: auto;
    }
    
  }
</style>