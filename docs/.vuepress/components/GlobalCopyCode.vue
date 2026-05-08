<template>
  <div />
</template>

<script setup>
import { nextTick, onBeforeUnmount, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { openChatWithPrompt, buildCodePrompt } from "../composables/useChat";

const route = useRoute();
let observer = null;

const COPY_SVG = `<img src="/images/copy.webp" width="16" height="16" alt="Copy" />`;
const CHECK_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"/></svg>`;
const ASK_AI_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M11.5 2.5a.5.5 0 0 1 .96 0l1.36 4.06a3 3 0 0 0 1.92 1.92l4.06 1.36a.5.5 0 0 1 0 .96l-4.06 1.36a3 3 0 0 0-1.92 1.92l-1.36 4.06a.5.5 0 0 1-.96 0l-1.36-4.06a3 3 0 0 0-1.92-1.92L4.16 11.3a.5.5 0 0 1 0-.96l4.06-1.36a3 3 0 0 0 1.92-1.92zM18 16a.4.4 0 0 1 .76 0l.42 1.27a1.5 1.5 0 0 0 .95.95l1.27.42a.4.4 0 0 1 0 .76l-1.27.42a1.5 1.5 0 0 0-.95.95l-.42 1.27a.4.4 0 0 1-.76 0l-.42-1.27a1.5 1.5 0 0 0-.95-.95l-1.27-.42a.4.4 0 0 1 0-.76l1.27-.42a1.5 1.5 0 0 0 .95-.95z"/></svg>`;

function injectCopyButtons() {
  const codeBlocks = document.querySelectorAll(
    'div[class*="language-"] > pre'
  );

  codeBlocks.forEach((pre) => {
    const wrapper = pre.parentElement;
    if (!wrapper || wrapper.querySelector(".global-copy-btn")) return;
    if (wrapper.closest(".code-block-wrapper")) return;

    wrapper.style.position = "relative";

    const askBtn = document.createElement("button");
    askBtn.className = "global-ask-ai-btn";
    askBtn.setAttribute("aria-label", "Ask AI about this code");
    askBtn.setAttribute("title", "Ask AI about this code");
    askBtn.innerHTML = ASK_AI_SVG;
    askBtn.addEventListener("click", () => {
      const code = pre.querySelector("code");
      if (!code) return;
      openChatWithPrompt(buildCodePrompt(code.innerText));
    });
    wrapper.appendChild(askBtn);

    const btn = document.createElement("button");
    btn.className = "global-copy-btn";
    btn.setAttribute("aria-label", "Copy code");
    btn.innerHTML = COPY_SVG;

    btn.addEventListener("click", () => {
      const code = pre.querySelector("code");
      if (!code) return;
      navigator.clipboard.writeText(code.innerText);
      btn.innerHTML = CHECK_SVG;
      setTimeout(() => {
        btn.innerHTML = COPY_SVG;
      }, 2000);
    });

    wrapper.appendChild(btn);

    if (!wrapper.querySelector(".code-fade-mask")) {
      const mask = document.createElement("span");
      mask.className = "code-fade-mask";
      mask.setAttribute("aria-hidden", "true");
      wrapper.appendChild(mask);
    }
  });
}

function connectObserver() {
  if (observer || typeof MutationObserver === "undefined") return;

  observer = new MutationObserver(() => {
    injectCopyButtons();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
}

onMounted(async () => {
  await nextTick();
  injectCopyButtons();
  connectObserver();
});

watch(() => route.path, async () => {
  await nextTick();
  injectCopyButtons();
});

onBeforeUnmount(() => {
  observer?.disconnect();
  observer = null;
});
</script>
