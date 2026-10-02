<template>
  <div class="whats-next">
    <div v-if="!hideTitle || (versions && versions.length)" class="whats-next-header">
      <h4 v-if="!hideTitle"><slot name="title">What's next?</slot></h4>
      <!-- Filter toggles, not tabs: they show/hide links in one list, so
           aria-pressed is the right pattern (no tabpanel to control). -->
      <div v-if="versions && versions.length" class="wn-tabs" role="group" aria-label="Filter by version">
        <button
          v-for="(ver, i) in versions"
          :key="ver"
          type="button"
          :aria-pressed="activeTab === i ? 'true' : 'false'"
          :class="['wn-tab', { active: activeTab === i }]"
          @click="switchTab(i, true)"
        >{{ ver }}</button>
      </div>
    </div>
    <div class="whats-next-body" ref="body">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
import { announce } from "../utils/announce";

const props = defineProps({
  versions: {
    type: Array,
    default: () => [],
  },
  hideTitle: {
    type: Boolean,
    default: false,
  },
});

const body = ref(null);
const activeTab = ref(0);

function switchTab(i, userAction = false) {
  activeTab.value = i;
  if (!body.value) return;
  const items = body.value.querySelectorAll(".wn-item");
  let shown = 0;
  items.forEach((li) => {
    const tag = li.dataset.versionTag;
    const activeLabel = props.versions[i] || "";
    const visible = !tag || activeLabel.includes(tag) || tag === activeLabel;
    li.style.display = visible ? "" : "none";
    if (visible) shown += 1;
  });
  if (userAction) {
    announce(`Showing ${shown} link${shown === 1 ? "" : "s"} for ${props.versions[i]}`);
  }
}

onMounted(async () => {
  await nextTick();
  if (!body.value) return;

  const tagPattern = /^\[([^\]]+)\]\s*/;

  const items = body.value.querySelectorAll("ul > li");
  items.forEach((li) => {
    const p = li.querySelector("p") || li;
    const links = p.querySelectorAll("a");
    const img = p.querySelector("img");

    let a = null;
    for (const link of links) {
      if (!link.querySelector("img") && link.textContent.trim()) {
        a = link;
        break;
      }
    }
    if (!a) return;

    const fullText = p.textContent || "";
    const linkText = a.textContent || "";
    const href = a.getAttribute("href") || "";
    const isExternal = href.startsWith("http");

    // Parse version tag prefix like [8.4] from the raw text
    let versionTag = "";
    const tagMatch = fullText.match(tagPattern);
    if (tagMatch) {
      versionTag = tagMatch[1];
    }

    let iconSrc = "";
    let iconEmoji = "";
    if (img) {
      iconSrc = img.getAttribute("src") || "";
    } else {
      let beforeLink = fullText.substring(0, fullText.indexOf(linkText)).trim();
      if (versionTag) {
        beforeLink = beforeLink.replace(tagPattern, "").trim();
      }
      const emojiMatch = beforeLink.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/u);
      iconEmoji = emojiMatch ? emojiMatch[0] : "";
    }

    let afterLink = "";
    let node = a.nextSibling;
    while (node) {
      afterLink += node.textContent || "";
      node = node.nextSibling;
    }
    afterLink = afterLink.replace(/^\s*[—–\-]\s*/, "").trim();

    li.innerHTML = "";
    li.className = "wn-item";

    if (versionTag) {
      li.dataset.versionTag = versionTag;
    }

    const cardLink = document.createElement("a");
    cardLink.className = "wn-card";
    cardLink.href = href;
    if (isExternal) {
      cardLink.target = "_blank";
      cardLink.rel = "noopener noreferrer";
    }

    if (iconSrc || iconEmoji) {
      const iconEl = document.createElement("span");
      iconEl.className = "wn-icon";
      if (iconSrc) {
        const newImg = document.createElement("img");
        newImg.src = iconSrc;
        newImg.alt = "";
        iconEl.appendChild(newImg);
      } else {
        iconEl.textContent = iconEmoji;
      }
      // Decorative: keep the icon out of the link's accessible name.
      iconEl.setAttribute("aria-hidden", "true");
      cardLink.appendChild(iconEl);
    }

    const bodyEl = document.createElement("span");
    bodyEl.className = "wn-body";

    const titleEl = document.createElement("span");
    titleEl.className = "wn-title";
    titleEl.textContent = linkText;
    bodyEl.appendChild(titleEl);

    if (afterLink) {
      const descEl = document.createElement("span");
      descEl.className = "wn-desc";
      descEl.textContent = afterLink;
      bodyEl.appendChild(descEl);
    }

    if (isExternal) {
      const newTabEl = document.createElement("span");
      newTabEl.className = "sr-only";
      newTabEl.textContent = " (opens in new tab)";
      titleEl.appendChild(newTabEl);
    }

    cardLink.appendChild(bodyEl);

    const arrowEl = document.createElement("span");
    arrowEl.className = "wn-arrow";
    arrowEl.setAttribute("aria-hidden", "true");
    arrowEl.innerHTML = "&rarr;";
    cardLink.appendChild(arrowEl);

    li.appendChild(cardLink);
  });

  // Apply initial tab filter if versions are set
  if (props.versions.length) {
    switchTab(0);
  }
});
</script>

<style scoped>
.whats-next {
  margin: 2rem 0;
}

.whats-next-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}

.whats-next-header h4 {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 700;
  color: #1b1f27;
}

.wn-tabs {
  display: flex;
  gap: 0.25rem;
  background: #f1f3f5;
  border-radius: 8px;
  padding: 3px;
}

.wn-tab {
  padding: 0.3rem 0.75rem;
  border: none;
  border-radius: 6px;
  background: transparent;
  font-size: 0.8rem;
  font-weight: 500;
  color: #5c6370;
  cursor: pointer;
  transition: all 0.15s ease;
  white-space: nowrap;
}

.wn-tab:hover {
  color: #1b1f27;
}

/* Selected state needs a non-colour cue with >= 3:1 contrast (WCAG 1.4.11):
   a dark underline bar plus heavier text. */
.wn-tab.active {
  background: #fff;
  color: #1b1f27;
  font-weight: 700;
  box-shadow: inset 0 -2px 0 #163055, 0 1px 3px rgba(0, 0, 0, 0.08);
}

.wn-tab:focus-visible {
  outline: 2px solid #0b5cad;
  outline-offset: 1px;
}

/* box-shadow is dropped in forced-colors mode; keep a visible selected cue. */
@media (forced-colors: active) {
  .wn-tab.active {
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 3px;
  }
}

.whats-next-body :deep(ul) {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 0.75rem;
}

.whats-next-body :deep(.wn-item) {
  margin: 0;
  padding: 0;
  display: flex;
}

.whats-next-body :deep(.wn-card) {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.85rem 1rem;
  border-radius: 10px;
  border: 1px solid #e0e3e8;
  background: #fff;
  transition: all 0.2s ease;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  width: 100%;
}

.whats-next-body :deep(.wn-card:hover),
.whats-next-body :deep(.wn-card:focus-visible) {
  border-color: #F48243;
  background: #FEF6F2;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(244, 130, 67, 0.10);
}

.whats-next-body :deep(.wn-icon) {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: rgba(37, 99, 235, 0.08);
  font-size: 1.1rem;
  flex-shrink: 0;
}

.whats-next-body :deep(.wn-icon img) {
  max-width: 22px;
  max-height: 22px;
  object-fit: contain;
}

.whats-next-body :deep(.wn-body) {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.whats-next-body :deep(.wn-title) {
  font-size: 0.9rem;
  font-weight: 600;
  color: #1b1f27;
  line-height: 1.3;
}

.whats-next-body :deep(.wn-desc) {
  font-size: 0.8rem;
  color: #5c6370;
  line-height: 1.4;
  margin-top: 0.15rem;
}

.whats-next-body :deep(.wn-arrow) {
  font-size: 1.1rem;
  opacity: 0;
  transform: translateX(-4px);
  transition: all 0.2s ease;
  color: #5c6370;
  flex-shrink: 0;
}

.whats-next-body :deep(.wn-card:hover .wn-arrow),
.whats-next-body :deep(.wn-card:focus-visible .wn-arrow) {
  opacity: 1;
  transform: translateX(0);
  color: #F48243;
}

@media (max-width: 768px) {
  .whats-next-body :deep(ul) {
    grid-template-columns: 1fr;
  }
}
</style>
