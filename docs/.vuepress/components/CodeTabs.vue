<template>
  <div class="code-tabs">
    <div class="tab-buttons" role="tablist" :aria-label="label">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        :ref="(el) => setTabRef(el, index)"
        :id="`${uid}-tab-${index}`"
        type="button"
        role="tab"
        :aria-selected="activeTab === index ? 'true' : 'false'"
        :aria-controls="`${uid}-panel`"
        :tabindex="activeTab === index ? 0 : -1"
        :class="{ active: activeTab === index }"
        @click="activeTab = index"
        @keydown="onTabKeydown($event, index)"
      >
        {{ tab.title }}
      </button>
    </div>

    <div
      class="tab-content code-block-wrapper"
      ref="wrapperRef"
      role="tabpanel"
      :id="`${uid}-panel`"
      :aria-labelledby="`${uid}-tab-${activeTab}`"
    >
      <button type="button" class="copy-button" @click="copyCode" :aria-label="copied ? 'Copied' : 'Copy code'">
        <img v-if="!copied" src="/images/copy.webp" width="16" height="16" alt="" />
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
          <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"/>
        </svg>
      </button>

      <!-- tabindex + region: the block scrolls horizontally, so keyboard users must be able to focus it (WCAG 2.1.1). -->
      <pre ref="preRef" tabindex="0" role="region" :aria-label="`${tabs[activeTab].title} code`"><code ref="codeRef" class="language-bash">{{ tabs[activeTab].content }}</code></pre>
      <span class="code-fade-mask" aria-hidden="true"></span>
    </div>
  </div>
</template>

<script>
import { useId } from 'vue'
import { copyText, ensureLiveRegion } from '../utils/announce'

export default {
  name: 'CodeTabs',
  props: {
    tabs: {
      type: Array,
      required: true
    },
    // Accessible name of the tab list.
    label: {
      type: String,
      default: 'Code variants'
    }
  },
  setup() {
    // SSR-safe unique prefix for tab/panel ids.
    return { uid: `codetabs-${useId()}` }
  },
  data() {
    return {
      activeTab: 0,
      copied: false
    }
  },
  created() {
    this.tabRefs = []
  },
  watch: {
    activeTab() {
      this.highlight()
      this.$nextTick(this.updateFade)
    }
  },
  mounted() {
    ensureLiveRegion()
    this.highlight()
    this.$nextTick(this.updateFade)
    if (typeof window !== 'undefined') {
      const pre = this.$refs.preRef
      if (pre) pre.addEventListener('scroll', this.updateFade, { passive: true })
      window.addEventListener('resize', this.updateFade)
    }
  },
  beforeUnmount() {
    if (typeof window !== 'undefined') {
      const pre = this.$refs.preRef
      if (pre) pre.removeEventListener('scroll', this.updateFade)
      window.removeEventListener('resize', this.updateFade)
    }
  },
  methods: {
    highlight() {
      this.$nextTick(() => {
        if (typeof window !== 'undefined' && window.hljs && this.$refs.codeRef) {
          window.hljs.highlightElement(this.$refs.codeRef)
        }
      })
    },
    updateFade() {
      const pre = this.$refs.preRef
      const wrapper = this.$refs.wrapperRef
      if (!pre || !wrapper) return
      const canScrollRight = pre.scrollLeft + pre.clientWidth < pre.scrollWidth - 2
      wrapper.classList.toggle('hide-fade', !canScrollRight)
    },
    setTabRef(el, index) {
      if (el) this.tabRefs[index] = el
    },
    // WAI-ARIA tabs keyboard model: arrows move (and wrap), Home/End jump.
    onTabKeydown(event, index) {
      const last = this.tabs.length - 1
      let next = null
      switch (event.key) {
        case 'ArrowRight':
        case 'ArrowDown':
          next = index === last ? 0 : index + 1
          break
        case 'ArrowLeft':
        case 'ArrowUp':
          next = index === 0 ? last : index - 1
          break
        case 'Home':
          next = 0
          break
        case 'End':
          next = last
          break
        default:
          return
      }
      event.preventDefault()
      this.activeTab = next
      const tab = this.tabRefs[next]
      if (tab) tab.focus()
    },
    async copyCode() {
      const text = this.tabs[this.activeTab].content
      if (await copyText(text)) {
        this.copied = true
        setTimeout(() => (this.copied = false), 2000)
      }
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

.tab-buttons button:focus-visible,
.copy-button:focus-visible,
pre:focus-visible {
  outline: 2px solid #1994f9;
  outline-offset: -2px;
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
  /* Wrapper has 12 px padding-bottom, scrollbar is 8 px; clear both with
     a small buffer so the mask never overlaps the scrollbar. */
  bottom: 24px;
  width: 90px;
  pointer-events: none;
  background: linear-gradient(to right, rgba(45, 45, 45, 0) 0%, #2d2d2d 55%);
  z-index: 5;
  opacity: 1;
  transition: opacity 0.15s ease;
}

.code-block-wrapper.hide-fade .code-fade-mask {
  opacity: 0;
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

/* Reserve space at the end of the code so the trailing characters never
   sit under the copy button. Using a filler element on <code> instead of
   padding-right on <pre> because WebKit clips padding-right from the
   scrollable area, leaving no visible gap when scrolled to the end. */
pre > code::after {
  content: '';
  display: inline-block;
  width: 4.5rem;
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

.language-bash {
  font-size: 0.85em;
  padding: 0;
}
</style>


