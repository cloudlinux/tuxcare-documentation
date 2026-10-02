<template>
  <div />
</template>

<script setup>
import { nextTick, onBeforeUnmount, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { copyText, ensureLiveRegion } from "../utils/announce";

const route = useRoute();
let observer = null;
let resizeHandler = null;
const fadeUpdaters = [];

const COPY_SVG = `<img src="/images/copy.webp" width="16" height="16" alt="" />`;
const CHECK_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"/></svg>`;

function injectCopyButtons() {
  const codeBlocks = document.querySelectorAll(
    'div[class*="language-"] > pre'
  );

  codeBlocks.forEach((pre) => {
    const wrapper = pre.parentElement;
    if (!wrapper || wrapper.querySelector(".global-copy-btn")) return;
    if (wrapper.closest(".code-block-wrapper")) return;

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "global-copy-btn";
    btn.setAttribute("aria-label", "Copy code");
    btn.innerHTML = COPY_SVG;

    btn.addEventListener("click", async () => {
      const code = pre.querySelector("code");
      if (!code) return;
      // Show the check (and announce) only when the copy really succeeded.
      if (!(await copyText(code.innerText))) return;
      btn.innerHTML = CHECK_SVG;
      btn.setAttribute("aria-label", "Copied");
      setTimeout(() => {
        btn.innerHTML = COPY_SVG;
        btn.setAttribute("aria-label", "Copy code");
      }, 2000);
    });

    wrapper.style.position = "relative";
    wrapper.appendChild(btn);

    if (!wrapper.querySelector(".code-fade-mask")) {
      const mask = document.createElement("span");
      mask.className = "code-fade-mask";
      mask.setAttribute("aria-hidden", "true");
      wrapper.appendChild(mask);
    }

    const updateFade = () => {
      const canScrollRight =
        pre.scrollLeft + pre.clientWidth < pre.scrollWidth - 2;
      wrapper.classList.toggle("hide-fade", !canScrollRight);
    };
    pre.addEventListener("scroll", updateFade, { passive: true });
    fadeUpdaters.push(updateFade);
    updateFade();
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

function refreshAllFades() {
  for (const fn of fadeUpdaters) fn();
}

onMounted(async () => {
  ensureLiveRegion();
  await nextTick();
  injectCopyButtons();
  connectObserver();
  resizeHandler = () => refreshAllFades();
  window.addEventListener("resize", resizeHandler);
});

watch(() => route.path, async () => {
  await nextTick();
  injectCopyButtons();
  refreshAllFades();
});

onBeforeUnmount(() => {
  observer?.disconnect();
  observer = null;
  if (resizeHandler) {
    window.removeEventListener("resize", resizeHandler);
    resizeHandler = null;
  }
  fadeUpdaters.length = 0;
});
</script>
