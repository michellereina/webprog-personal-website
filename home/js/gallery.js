const app = Vue.createApp({
    data() {
      return {
        photos: [
          { name: 'Buying Figurines', url: 'Me buying figurines.jpg' },
          { name: 'Me in Autumn', url: "Me in Fuji.jpg" },
          { name: 'Me in Tokyo', url: "Me in Tokyo.jpg" },
         
        ]
      };
    }
  });
  
  app.mount('#app');
