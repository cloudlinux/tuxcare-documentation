import { reactive } from 'vue'

// Shared reactive state used to coordinate "open the chatbot with a
// prefilled prompt" between code-block buttons and Chat.vue.
//
// The chatbot at https://chatbot.cloudlinux.com/docs/tuxcare is expected to
// read a `?prompt=` query parameter on load and seed the conversation with it.
// As a belt-and-suspenders backup we also `postMessage` the prompt to the
// iframe after it loads, in case the chatbot has a postMessage listener.
// If neither path is wired up on the chatbot side the iframe still opens as
// today — the prefill is simply ignored, no regression.
export const chatState = reactive({
  prompt: '',
  // Bumped each time a code-block button asks Chat.vue to open. Watching
  // this counter lets the same prompt be re-fired without value-change races.
  trigger: 0,
})

export function openChatWithPrompt(prompt) {
  chatState.prompt = prompt || ''
  chatState.trigger += 1
}

// Build the prompt text sent to the chatbot when a reader clicks "Ask AI"
// on a code block. Keep it short — long prompts hit URL length limits.
export function buildCodePrompt(snippet) {
  const safeSnippet = (snippet || '').slice(0, 4000)
  let url = ''
  let title = 'this page'
  if (typeof window !== 'undefined') url = window.location.href
  if (typeof document !== 'undefined' && document.title) title = document.title
  return `I'm reading the TuxCare docs page "${title}" (${url}). Please explain this code:\n\n\`\`\`\n${safeSnippet}\n\`\`\``
}
