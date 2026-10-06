<template>
  <aside id="bot-ui" role="complementary" aria-label="AI assistant chat">
    <!-- Conditionally show toggle button with highlight -->
    <div class="toggle-container" v-show="!(isMobile && showChat)">
      <div v-if="shouldShowTooltip" class="pulse-ring" aria-hidden="true"></div>
      <button
        ref="toggleBtn"
        type="button"
        class="chat-toggle"
        @click="toggleChat"
        :class="{ 'chat-open': showChat }"
        :aria-label="showChat ? 'Close AI assistant chat' : 'Open AI assistant chat'"
        :aria-expanded="showChat ? 'true' : 'false'"
        :aria-controls="showChat ? 'bot-chat-panel' : null"
      >
        <img
          v-if="!showChat"
          src="../assets/icons/bot-icon.webp"
          alt=""
          class="bot-icon"
        />
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
          focusable="false"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
      
      <div v-if="shouldShowTooltip" ref="tooltip" class="highlight-container">
        <div class="tooltip-text">
          <button
            type="button"
            class="tooltip-close"
            aria-label="Dismiss chat hint"
            @click="dismissTooltip"
          ><span aria-hidden="true">×</span></button>
          <div class="tooltip-title"><b>Need help?</b></div>
          <div class="tooltip-subtitle">I'm a multilingual AI chatbot, trained to answer all your questions!</div>
        </div>
      </div>
    </div>

    <div
      v-if="showChat"
      id="bot-chat-panel"
      ref="dialog"
      class="chat-container"
      :class="{ fullscreen: isMobile, 'desktop-view': !isMobile }"
      role="dialog"
      aria-modal="true"
      aria-label="TuxCare AI assistant"
    >
      <div class="chat-header">
        <div class="header-actions">
          <button
            ref="closeBtn"
            type="button"
            class="close-btn"
            aria-label="Close AI assistant chat"
            @click="closeChat"
            @keydown.tab.shift.prevent="focusIframe"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
              focusable="false"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>

      <div class="iframe-container" ref="iframeContainer">
        <iframe
          ref="iframe"
          :src="iframeUrl"
          class="chat-iframe"
          title="TuxCare AI assistant chat"
          frameborder="0"
          allow="clipboard-read; clipboard-write; fullscreen"
          @load="onIframeLoad"
        />
        <div v-if="isLoading" class="loading-overlay">
          <div class="spinner"></div>
        </div>
      </div>
      <!-- Focus trap: tabbing past the end of the chat wraps back to the close button -->
      <span class="focus-sentinel" tabindex="0" @focus="focusCloseBtn"></span>
    </div>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      showChat: false,
      isLoading: true,
      iframeUrl: "https://chatbot.cloudlinux.com/docs/tuxcare",
      windowWidth: 0, // Changed from window.innerWidth to avoid SSR error
      showTooltip: true,
      tooltipDismissDuration: 3 * 24 * 60 * 60 * 1000, // 3 days in milliseconds
      inertElements: [],
      footerInView: false,
    };
  },
  computed: {
    isMobile() {
      return this.windowWidth < 768;
    },
    // The hint floats over the page bottom; keep the footer links readable.
    shouldShowTooltip() {
      return this.showTooltip && !this.showChat && !this.footerInView;
    },
  },
  watch: {
    // Close the modal chat on navigation; the layout may be swapped and the new page must not stay behind it.
    // Focus is left to the route announcer, which moves it to the new page.
    "$route.path"() {
      this.$nextTick(this.checkFooterInView);
      if (!this.showChat) return;
      this.showChat = false;
      this.setPageInert(false);
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    document.addEventListener("keydown", this.onDocumentKeydown);
    document.addEventListener("focusin", this.onDocumentFocusin);
    window.addEventListener("scroll", this.onScroll, { passive: true });
    this.handleResize(); // Set initial windowWidth on client-side
    this.checkFooterInView();
    this.updateTooltipVisibility();
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
    document.removeEventListener("keydown", this.onDocumentKeydown);
    document.removeEventListener("focusin", this.onDocumentFocusin);
    window.removeEventListener("scroll", this.onScroll);
    this.setPageInert(false);
  },
  methods: {
    onScroll() {
      if (this.footerCheckPending) return;
      this.footerCheckPending = true;
      requestAnimationFrame(() => {
        this.footerCheckPending = false;
        this.checkFooterInView();
      });
    },
    checkFooterInView() {
      const footer = document.querySelector(".footer:not(.drawer-footer):not(.drawer-footer__mobile)");
      this.footerInView = !!footer && footer.getBoundingClientRect().top < window.innerHeight;
    },
    toggleChat() {
      if (this.showChat) {
        this.closeChat();
      } else {
        this.openChat();
      }
    },
    openChat() {
      this.showChat = true;
      this.dismissTooltip();
      this.$nextTick(() => {
        this.setPageInert(true);
        this.focusCloseBtn();
      });
    },
    closeChat() {
      if (!this.showChat) return;
      this.showChat = false;
      this.setPageInert(false);
      // The toggle is hidden on mobile while the chat is open; focus it after it re-renders.
      this.$nextTick(() => {
        if (this.$refs.toggleBtn) this.$refs.toggleBtn.focus();
      });
    },
    focusCloseBtn() {
      if (this.$refs.closeBtn) this.$refs.closeBtn.focus();
    },
    focusIframe() {
      if (this.$refs.iframe) this.$refs.iframe.focus();
    },
    // Hide the rest of the page from keyboard and screen readers while the modal chat is open.
    setPageInert(on) {
      if (on) {
        const parent = this.$el && this.$el.parentElement;
        if (!parent) return;
        Array.from(parent.children).forEach((el) => {
          if (el !== this.$el && !el.hasAttribute("inert")) {
            el.setAttribute("inert", "");
            this.inertElements.push(el);
          }
        });
      } else {
        this.inertElements.forEach((el) => el.removeAttribute("inert"));
        this.inertElements = [];
      }
    },
    onDocumentKeydown(event) {
      if (event.key !== "Escape" && event.key !== "Esc") return;
      if (this.showChat) {
        event.preventDefault();
        this.closeChat();
      } else if (this.shouldShowTooltip) {
        // Hide the hint for this page view only; don't persist, as Escape may target other widgets.
        this.showTooltip = false;
      }
    },
    // Don't let the hint bubble cover page content that receives keyboard focus.
    // The launcher itself is kept clear by scroll-padding-bottom in theme.styl.
    onDocumentFocusin(event) {
      const target = event.target;
      if (this.showChat || !target || !target.getBoundingClientRect || this.$el.contains(target)) return;
      const overlaps = (a, b) => a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top;
      const tooltip = this.$refs.tooltip;
      if (this.shouldShowTooltip && tooltip && overlaps(target.getBoundingClientRect(), tooltip.getBoundingClientRect())) {
        this.showTooltip = false;
      }
    },
    handleResize() {
      this.windowWidth = window.innerWidth;
      this.checkFooterInView();
    },
    onIframeLoad() {
      this.isLoading = false;
    },
    dismissTooltip() {
      const currentTime = new Date().getTime();
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('chatbot_tooltip_dismissed_time', currentTime.toString());
      }
      this.showTooltip = false;
    },
    updateTooltipVisibility() {
      if (typeof localStorage === 'undefined') {
        this.showTooltip = true;
        return;
      }
      
      const dismissedTime = localStorage.getItem('chatbot_tooltip_dismissed_time');
      
      if (dismissedTime) {
        const currentTime = new Date().getTime();
        if (currentTime - parseInt(dismissedTime) < this.tooltipDismissDuration) {
          this.showTooltip = false;
        } else {
          localStorage.removeItem('chatbot_tooltip_dismissed_time');
          this.showTooltip = true;
        }
      } else {
        this.showTooltip = true;
      }
    },
  },
};
</script>


<style lang="stylus" scoped>
$primary-color = #0d1e30
$background-color = white
$border-radius = 16px
mobile-breakpoint = 768px

#bot-ui {
  font-family: "Inter", "Avenir", Helvetica, Arial, sans-serif
  position: fixed
  bottom: 20px
  right: 20px
  z-index: 9999
  transition: all 0.3s ease
}

.toggle-container {
  position: relative
}

.pulse-ring {
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  width: 66px
  height: 66px
  border-radius: 50%
  background: rgba(13, 30, 48, 0.3)
  animation: pulse 2s 3 forwards
  z-index: -1
}

.chat-toggle {
  position: relative
  background: white
  border: 2px solid $primary-color
  border-radius: 50%
  width: 56px
  height: 56px
  cursor: pointer
  display: flex
  align-items: center
  justify-content: center
  box-shadow: 0 4px 12px rgba(0,0,0,0.15)
  transition: transform 0.3s ease, box-shadow 0.3s ease
  z-index: 10000
  padding: 0
  overflow: hidden

  .bot-icon {
    width: calc(100% - 4px)
    height: calc(100% - 4px)
    border-radius: 50%
    object-fit: cover
  }

  svg {
    color: $primary-color
    width: 32px
    height: 32px
  }

  &:hover {
    transform: scale(1.05)
    box-shadow: 0 6px 16px rgba(0,0,0,0.2)
  }
}

.highlight-container {
  position: absolute;
  bottom: calc(100% + 15px);
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  pointer-events: auto;
  z-index: 10001;
  width: max-content;
  max-width: unquote("min(500px, calc(100vw - 40px))");
}

.tooltip-text {
  background: white;
  color: black;
  padding: 12px 20px;
  border-radius: 20px;
  font-size: 0.95rem; /* Increase this value to make the tooltip text larger */
  animation: float 3s ease-in-out 2;
  position: relative;
  box-sizing: border-box;
  max-width: 100%;
  overflow-wrap: break-word;
  text-align: right;
  font-weight: 500;
  box-shadow: 0 0 15px $primary-color;
  overflow: visible;
  text-overflow: clip;
  
  /* Stop animation on hover or keyboard focus */
  &:hover,
  &:focus-within {
    animation-play-state: paused;
  }
}

.tooltip-close {
  position: absolute;
  top: -10px;
  right: -10px;
  width: 24px;
  height: 24px;
  padding: 0;
  margin: 0;
  font-family: inherit;
  background: white;
  border: 1px solid #ddd;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 14px;
  line-height: 1;
  color: #666;
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  z-index: 10;
  pointer-events: auto;

  &:hover {
    background: #f5f5f5;
    transform: scale(1.1);
    color: #333;
  }

  &:focus-visible {
    outline: 2px solid $primary-color;
    outline-offset: 2px;
  }
}

.tooltip-title {
  margin-bottom: 4px;
  position: relative;
  z-index: 2;
}

.tooltip-subtitle {
  position: relative;
  z-index: 2;
}

.chat-container {
  position: fixed
  border-radius: $border-radius
  overflow: hidden
  box-shadow: 0 12px 32px rgba(0,0,0,0.2)
  background: $background-color
  transition: all 0.3s ease
  z-index: 9999

  &.fullscreen {
    top: 0
    left: 0
    right: 0
    bottom: 0
    border-radius: 0
    width: 100%
    height: 100vh
  }

  &.desktop-view {
    top: 5vh
    left: 5vw
    right: 5vw
    bottom: 5vh
    width: 90vw
    height: 90vh
    max-width: none
  }
}

.chat-header {
  background: $primary-color
  color: white
  padding: 1rem 1.5rem
  display: flex
  justify-content: flex-end
  align-items: center

  .header-actions {
    display: flex
    align-items: center

    .close-btn {
      background: none
      border: none
      color: white
      cursor: pointer
      display: flex
      align-items: center
      justify-content: center
      padding: 4px

      &:focus-visible {
        outline: 2px solid white
        outline-offset: 2px
      }

      svg {
        stroke: white
        width: 24px
        height: 24px
      }

      &:hover {
        opacity: 0.8
      }
    }
  }
}

.iframe-container {
  position: relative
  width: 100%
  height: calc(100% - 60px)
}

.focus-sentinel {
  position: absolute
  width: 1px
  height: 1px
  overflow: hidden
  clip: rect(0 0 0 0)
}

.chat-iframe {
  width: 100%
  height: 100%
  border: none
}

.loading-overlay {
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 100%
  display: flex
  justify-content: center
  align-items: center
  background: rgba(255, 255, 255, 0.7)

  .spinner {
    border: 4px solid $primary-color
    border-top: 4px solid transparent
    border-radius: 50%
    width: 40px
    height: 40px
    animation: spin 1s linear infinite
  }
}

@keyframes spin {
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
}

@keyframes pulse {
  0% {
    transform: translate(-50%, -50%) scale(0.8)
    opacity: 0.7
  }
  50% {
    transform: translate(-50%, -50%) scale(1.2)
    opacity: 0.3
  }
  100% {
    transform: translate(-50%, -50%) scale(1)
    opacity: 0
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0)
  }
  50% {
    transform: translateY(-4px)
  }
}

@media (max-width: mobile-breakpoint) {
  #bot-ui {
    bottom: 15px
    right: 15px
  }

  .chat-container {
    bottom: 0
  }

  .chat-toggle.chat-open {
    display: none
  }

  .highlight-container {
    bottom: calc(100% + 15px)
    right: 0
    max-width: calc(100vw - 30px)
  }

  .tooltip-text {
    font-size: 0.9rem; /* Adjust this value to change the tooltip text size on mobile devices */
    padding: 10px 16px;
  }
}

@media (prefers-reduced-motion: reduce) {
  #bot-ui,
  .chat-container,
  .chat-toggle,
  .tooltip-close {
    transition: none
  }

  .pulse-ring,
  .tooltip-text {
    animation: none
  }

  .chat-toggle:hover,
  .tooltip-close:hover {
    transform: none
  }
}
</style>