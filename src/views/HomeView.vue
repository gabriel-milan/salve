<template>
  <div class="home">
    <!-- Main Content -->
    <div class="content">
      <div class="greeting">
        <p>{{ greetingText }}</p>
      </div>
      <div class="configurations">
        <div class="config-option">
          <label>
            <input type="checkbox" v-model="selectedOptions.includeExclamation" />
            Incluir exclamação
          </label>
        </div>
        <div class="config-option">
          <label>
            <input type="checkbox" v-model="selectedOptions.includeMine" />
            Incluir meu/minha
          </label>
        </div>
        <div class="config-option">
          <p>Gênero da palavra:</p>
          <div>
            <label>
              <input type="radio" value="m" v-model="selectedOptions.gender" />
              Masculino
            </label>
          </div>
          <div>
            <label>
              <input type="radio" value="f" v-model="selectedOptions.gender" />
              Feminino
            </label>
          </div>
        </div>
      </div>
      <button class="generate-button" @click="generateGreeting">Gerar outra mensagem</button>
    </div>
  </div>
</template>

<script>
import { getGreetingMessage } from '../utils/greeting'

export default {
  data() {
    return {
      greetingText: getGreetingMessage(),
      selectedOptions: {
        includeExclamation: true,
        includeMine: false,
        gender: 'm' // Default to Masculine
      }
    }
  },
  methods: {
    generateGreeting() {
      // Generate greeting based on selected options
      this.greetingText = getGreetingMessage({
        wordGender: this.selectedOptions.gender,
        addExclamation: this.selectedOptions.includeExclamation,
        addMy: this.selectedOptions.includeMine
      })
    }
  }
}
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  position: relative;
}

.content {
  text-align: center;
}

.configurations {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 20px; /* Add padding between greeting and configurations */
}

.config-option {
  text-align: center;
  flex: 1;
  margin: 0 10px;
}

label {
  display: block;
  margin: 10px 0;
}

select {
  width: 100%;
}

button.generate-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 20px; /* Add margin between configurations and button */
}

button.generate-button:hover {
  background-color: #0056b3;
}

.greeting p {
  font-size: 1.5em;
  margin-bottom: 20px;
}

/* Media Query for Mobile */
@media (max-width: 767px) {
  .configurations {
    flex-direction: column;
    align-items: flex-start;
  }
  .config-option {
    flex: none;
  }
}
</style>
