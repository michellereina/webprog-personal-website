const app = Vue.createApp({
    data() {
      return {
        inpName: '',
        inpSuggestion: '',
        suggestions: []
      }
    },
    methods: {
      submitSuggestion() {
        if (this.inpSuggestion.trim() === '') {
          alert('Suggestion is required!');
          return;
        }
        const name = this.inpName.trim() === '' ? 'Anonymous' : this.inpName.trim();
        this.suggestions.push({ name: name, text: this.inpSuggestion.trim() });
        this.inpName = '';
        this.inpSuggestion = '';
      }
    }
  });
  app.mount('#app');