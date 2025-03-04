<template><div class="container">
<header>
<h1>Hobbies and Interests</h1></header><main>
<section class="main-content">
  <div>
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
  </div>
  <div class="grid"><h2>A list of what I enjoy.</h2>
    <ul>
      <li>Watch movies and series📽️</li>
      <li>Makeup and skincare💄</li>
      <li>Fashion👗</li>
      <li>Collect figurines🐈‍⬛</li>
      <li>Play games🎮</li>
    </ul>
</div>
<br>
<div class="grid"><h2>My top 4 films</h2>
<div class="image-container">
  <img src="https://a.ltrbxd.com/resized/sm/upload/v1/3q/s4/aa/memento-0-1000-0-1500-crop.jpg?v=80f0732247
  " alt="Memento">
  <img src="https://a.ltrbxd.com/resized/sm/upload/uo/r7/1v/1j/wynnf6LT4ueuCuREPRMtHGQIk5T-0-1000-0-1500-crop.jpg?v=b0c8031954" alt="Mysterious Skin">
  <img src="https://a.ltrbxd.com/resized/film-poster/5/1/4/5/4/51454-oldboy-0-1000-0-1500-crop.jpg?v=294dbcadef
  " alt="Oldboy">
  <img src="https://a.ltrbxd.com/resized/film-poster/5/0/5/5/7/50557-while-you-were-sleeping-0-1000-0-1500-crop.jpg?v=83ec42bc7d" alt="While You Were Sleeping">
</div>
</div>
</section>
<aside class="sidebar"></aside>
</main>
<footer>Asia Pacific College</footer>
</div></template>

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