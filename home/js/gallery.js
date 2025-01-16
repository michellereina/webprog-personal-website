const app = Vue.createApp({
    data() {
      return {
        photos: [
          { name: 'Buying Figurines', url: "https://media.discordapp.net/attachments/1193932717964926998/1311600815776989204/36bbf78a-b4cb-43d4-8218-67047c711086.png?ex=674972f2&is=67482172&hm=5a4cf4a33fd9b420236201185e57b5dd673fbb33f1694b3056564b7ad02fc141&=&format=webp&quality=lossless&width=503&height=671" },
          { name: 'Me in Autumn', url: "https://media.discordapp.net/attachments/1193932717964926998/1311601121092964352/image.png?ex=6749733b&is=674821bb&hm=89390075446cf067335f54d3d8c988dd0e97665cb353b78990b141c630f14d60&=&format=webp&quality=lossless&width=501&height=671" },
          { name: 'Makeup', url: "https://media.discordapp.net/attachments/1193932717964926997/1312785322287038514/IMG_2805.jpg?ex=674dc21b&is=674c709b&hm=2588167229f01bf3c314899286fd7c3514cb5a3587a17be556d7098ad1884531&=&format=webp&width=498&height=665" },
         
        ]
      };
    }
  });
  
  app.mount('#app');
