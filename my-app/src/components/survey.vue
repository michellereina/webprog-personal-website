<template>
  <div class="container">
    <header>
      <h1>Survey</h1>
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
        <h2>We'd love your feedback!</h2>
        <div class="survey-container">
          <input v-model="userInput" type="text" placeholder="Enter your suggestion...">
          <button @click="addSuggestion">Submit</button>

          <ul class="suggestion-list">
            <li v-for="(suggestion, index) in suggestions" :key="index">
              {{ suggestion }}
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

<script>
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bqbmzqufkgzzzgjtvlsj.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJxYm16cXVma2d6enpnanR2bHNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEyMjY1MTgsImV4cCI6MjA1NjgwMjUxOH0.--h9280rDQp-e9B8q8GgbX0t8lIaZAH5JHXixqSbIJg'; 
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default {
  data() {
    return {
      userInput: '',
      suggestions: [],
    };
  },
  methods: {
    async addSuggestion() {
      if (this.userInput.trim()) {
        const { error } = await supabase
          .from('survey_suggestions') // Ensure this table exists in your Supabase project
          .insert([{ suggestion: this.userInput }]);

        if (error) {
          console.error('Error saving suggestion:', error.message);
        } else {
          this.fetchSuggestions(); // Refresh suggestions after adding
          this.userInput = '';
        }
      }
    },
    async fetchSuggestions() {
      const { data, error } = await supabase
        .from('survey_suggestions')
        .select('suggestion') // Select only the 'suggestion' column
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching suggestions:', error.message);
      } else {
        this.suggestions = data ? data.map((s) => s.suggestion) : [];
      }
    },
  },
  mounted() {
    this.fetchSuggestions();
  },
};
</script>

<style>
body {
  background-color: #ded7ec;
  margin: 0;
  padding: 0;
}

.container {
  display: flex;
  flex-direction: column;
}

header {
  background-color: purple;
  padding: 20px;
  color: #ded7ec;
}

footer {
  background-color: purple;
  padding: 20px;
  color: #ded7ec;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.survey-container {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  text-align: center;
  width: 90%;
}

input[type='text'] {
  width: 100%;
  padding: 10px;
  border: #DBD8D1;
  border-radius: 3px;
  margin-bottom: 10px;
  font-size: 16px;
  font-family: "Poppins", serif;
}

button {
  padding: 10px 20px;
  background-color: purple;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.suggestion-list {
  margin-top: 20px;
  list-style: none;
  padding: 0;
}

.suggestion-list li {
  padding: 5px;
  background-color: #ede4ff;
  margin: 5px 0;
  border-radius: 5px;
}


</style>