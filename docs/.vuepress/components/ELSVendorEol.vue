<template>
  <p v-if="release" class="os-vendor-eol">
    Vendor support until {{ release.eol }}. TuxCare ELS continues to deliver security updates.
  </p>
</template>

<script setup>
import { computed } from "vue";
import osReleases from "../config-client/osReleases";

// `os` is the page's directory name, e.g. <ELSVendorEol os="centos-7-els" />
const props = defineProps({
  os: {
    type: String,
    required: true,
  },
});

const release = computed(() =>
  osReleases.find((item) => item.slug === props.os)
);
</script>

<style scoped>
.os-vendor-eol {
  margin: 0 0 1.75rem;
  font-size: 0.8rem;
  color: #5c6370;
}
</style>
