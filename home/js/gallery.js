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
