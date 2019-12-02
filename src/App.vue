<template>
  <div id="app" class="app-container">
    <header>
      <img
        src="data:image/png;base64,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"
        class="logo"
      />
      <h1>Sprindi vurr</h1>
    </header>

    <main>
      <h2>Leiame Su sprindile ta järgmise nime!</h2>
      <button type="button" @click="generateIndex">Genereeri</button>

      <pre>
        <transition name="fade">
          <code>{{ sprintName }}</code>
        </transition>
      </pre>
    </main>

    <links />
  </div>
</template>

<script>
import movieList from './movieList'
import Links from './components/Links.vue'

export default {
  name: 'app',
  components: { Links },
  data () {
    return {
      random: 1,
      lastRandom: 0,
      listLen: movieList.length
    }
  },
  computed: {
    sprintName () {
      return movieList[this.random]
    }
  },
  created () {
    this.generateIndex()
  },
  methods: {
    generateIndex () {
      this.lastRandom = this.random
      this.random = Math.floor(Math.random() * this.listLen)

      this.lastRandom === this.random && this.generateIndex()
    }
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}

.app-container {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

header {
  margin: 60px 0 20px;
}

main {
  flex: 1;
}

h1,
h2 {
  font-weight: normal;
  margin: 0;
}

h2 {
  margin-bottom: 20px;
}

button {
  background-color: #9b59b6;
  border: 0;
  padding: 1em 3em;
  color: #fff;
  font-family: inherit;
  font-size: 2em;
  cursor: pointer;
  border-radius: 2px;
  transition: box-shadow 0.2s ease-out, transform 0.2s ease-out;

  &:hover,
  &:focus {
    box-shadow: 5px 5px 0px 0px rgba(220, 200, 200, 0.8);
    outline: none;
  }
  &:active {
    transform: translate(3px, 3px);
    box-shadow: none;
  }
}

pre {
  width: 100%;
  max-width: 20em;
  margin: 1em auto;
  font-size: 4em;
  white-space: inherit;
}

pre,
code {
  font-family: inherit;
}

code {
  position: relative;
  display: inline-block;

  &::before {
    content: "“";
    position: absolute;
    left: -30px;
  }
  &::after {
    content: "”";
    position: absolute;
    right: -30px;
  }
}

@media screen and (max-width: 20em) {
  button {
    width: 90%;
    padding: 0.8em 0;
  }

  pre {
    font-size: 3em;
    margin-bottom: 0;
  }

  code {
    overflow: hidden;
  }
}
</style>
