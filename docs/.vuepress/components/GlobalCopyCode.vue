<template>
  <div />
</template>

<script setup>
import { onMounted, onUnmounted, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const COPY_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"/><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"/></svg>`;
const CHECK_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"/></svg>`;

function injectCopyButtons() {
  const codeBlocks = document.querySelectorAll(
    'div[class*="language-"] > pre'
  );

  codeBlocks.forEach((pre) => {
    const wrapper = pre.parentElement;
    if (!wrapper || wrapper.querySelector(".global-copy-btn")) return;
    if (wrapper.closest(".code-block-wrapper")) return;

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

    wrapper.style.position = "relative";
    wrapper.appendChild(btn);
  });
}

onMounted(() => {
  setTimeout(injectCopyButtons, 100);
});

watch(() => route.path, () => {
  setTimeout(injectCopyButtons, 200);
});
</script>
