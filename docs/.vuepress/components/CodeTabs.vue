<template>
  <div class="code-tabs">
    <div class="tab-buttons">
      <button v-for="(tab, index) in tabs" :key="index" :class="{ active: activeTab === index }" @click="activeTab = index">
        {{ tab.title }}
      </button>
    </div>

    <div class="tab-content code-block-wrapper">
      <button class="ask-ai-button" @click="askAi" aria-label="Ask AI about this code" title="Ask AI about this code">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M11.5 2.5a.5.5 0 0 1 .96 0l1.36 4.06a3 3 0 0 0 1.92 1.92l4.06 1.36a.5.5 0 0 1 0 .96l-4.06 1.36a3 3 0 0 0-1.92 1.92l-1.36 4.06a.5.5 0 0 1-.96 0l-1.36-4.06a3 3 0 0 0-1.92-1.92L4.16 11.3a.5.5 0 0 1 0-.96l4.06-1.36a3 3 0 0 0 1.92-1.92zM18 16a.4.4 0 0 1 .76 0l.42 1.27a1.5 1.5 0 0 0 .95.95l1.27.42a.4.4 0 0 1 0 .76l-1.27.42a1.5 1.5 0 0 0-.95.95l-.42 1.27a.4.4 0 0 1-.76 0l-.42-1.27a1.5 1.5 0 0 0-.95-.95l-1.27-.42a.4.4 0 0 1 0-.76l1.27-.42a1.5 1.5 0 0 0 .95-.95z"/>
        </svg>
      </button>

      <button class="copy-button" @click="copyCode" aria-label="Copy code">
        <img v-if="!copied" src="/images/copy.webp" width="16" height="16" alt="Copy" />
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"/>
        </svg>
      </button>

      <pre><code ref="codeRef" class="language-bash">{{ tabs[activeTab].content }}</code></pre>
      <span class="code-fade-mask" aria-hidden="true"></span>
    </div>
  </div>
</template>

<script>
import { openChatWithPrompt, buildCodePrompt } from '../composables/useChat'

export default {
  name: 'CodeTabs',
  props: {
    tabs: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      activeTab: 0,
      copied: false
    }
  },
  watch: {
    activeTab() {
      this.highlight()
    }
  },
  mounted() {
    this.highlight()
  },
  methods: {
    highlight() {
      this.$nextTick(() => {
        if (typeof window !== 'undefined' && window.hljs && this.$refs.codeRef) {
          window.hljs.highlightElement(this.$refs.codeRef)
        }
      })
    },
    copyCode() {
      const text = this.tabs[this.activeTab].content
      navigator.clipboard.writeText(text).then(() => {
        this.copied = true
        setTimeout(() => (this.copied = false), 2000)
      })
    },
    askAi() {
      const text = this.tabs[this.activeTab].content
      openChatWithPrompt(buildCodePrompt(text))
    }
  }
}
</script>

<style scoped>
.code-tabs {
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 1.5rem;
}

.tab-buttons {
  display: flex;
  background-color: #2d2d2d;
  border-bottom: 1px solid #444;
}

.tab-buttons button {
  padding: 0.85em;
  flex: 1;
  background: none;
  border: none;
  cursor: pointer;
  font-weight: 500;
  color: #ccc;
}

.tab-buttons button.active {
  color: #fff;
  border-bottom: 2px solid #1994f9;
  font-weight: bold;
}

.tab-content {
  position: relative;
  background-color: #2d2d2d;
  font-family: monospace;
  padding: 1rem;
}

.code-block-wrapper {
  background-color: #2d2d2d;
  padding: 12px;
  position: relative;
  overflow: hidden;
}

.code-fade-mask {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 14px; /* clear the horizontal scrollbar so it stays visible */
  width: 90px;
  pointer-events: none;
  background: linear-gradient(to right, rgba(45, 45, 45, 0) 0%, #2d2d2d 55%);
  z-index: 5;
}

pre {
  margin: 0;
  background-color: transparent;
  color: #2d2d2d;
  font-size: 14px;
  white-space: pre;
  max-width: 100%;
  line-height: 1.5;
  box-shadow: none;
  overflow-x: auto;
  padding-right: 4.5rem;
  scrollbar-width: thin;              /* Firefox */
  scrollbar-color: #aaa transparent;  /* Firefox */
}

/* WebKit browsers (Chrome, Edge, Safari) */
pre::-webkit-scrollbar {
  height: 8px;
}

pre::-webkit-scrollbar-track {
  background: transparent;
}

pre::-webkit-scrollbar-thumb {
  background-color: #aaa;
  border-radius: 4px;
}

pre::-webkit-scrollbar-thumb:hover {
  background-color: #ccc;
}

code {
  color: #ccc;
  background: none;
  display: block;
  white-space: pre;
}

.copy-button {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.2rem;
  z-index: 10;
}

.copy-button svg {
  fill: #ccc;
  width: 20px;
  height: 20px;
  transition: fill 0.2s;
}

.copy-button img {
  width: 20px;
  height: 20px;
  opacity: 0.6;
  transition: opacity 0.2s;
}

.copy-button:hover svg {
  fill: #1994f9;
}

.copy-button:hover img {
  opacity: 1;
}

.ask-ai-button {
  position: absolute;
  top: 0.5rem;
  right: 2.5rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.2rem;
  z-index: 10;
}

.ask-ai-button svg {
  width: 20px;
  height: 20px;
  fill: #ccc;
  opacity: 0.6;
  transition: fill 0.2s, opacity 0.2s;
}

.ask-ai-button:hover svg {
  fill: #1994f9;
  opacity: 1;
}

.language-bash {
  font-size: 0.85em;
  padding: 0;
}
</style>


