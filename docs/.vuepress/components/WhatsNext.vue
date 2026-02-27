<template>
  <div class="whats-next">
    <div class="whats-next-header">
      <h4><slot name="title">What's next?</slot></h4>
      <div v-if="versions && versions.length" class="wn-tabs">
        <button
          v-for="(ver, i) in versions"
          :key="ver"
          :class="['wn-tab', { active: activeTab === i }]"
          @click="switchTab(i)"
        >{{ ver }}</button>
      </div>
    </div>
    <div class="whats-next-body" ref="body">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick, defineProps } from "vue";

const props = defineProps({
  versions: {
    type: Array,
    default: () => [],
  },
});

const body = ref(null);
const activeTab = ref(0);

function switchTab(i) {
  activeTab.value = i;
  if (!body.value) return;
  const items = body.value.querySelectorAll(".wn-item");
  items.forEach((li) => {
    const tag = li.dataset.versionTag;
    if (!tag) {
      li.style.display = "";
      return;
    }
    const activeLabel = props.versions[i] || "";
    li.style.display = activeLabel.includes(tag) || tag === activeLabel ? "" : "none";
  });
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

    cardLink.appendChild(bodyEl);

    const arrowEl = document.createElement("span");
    arrowEl.className = "wn-arrow";
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

.wn-tab.active {
  background: #fff;
  color: #1b1f27;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
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

.whats-next-body :deep(.wn-card:hover) {
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

.whats-next-body :deep(.wn-card:hover .wn-arrow) {
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
