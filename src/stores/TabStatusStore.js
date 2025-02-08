import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTabStore = defineStore('counter', () => {
  const activeTab = ref('profile')

  function setActiveTab(tab_name) {
    activeTab.value = tab_name
  }

  return { activeTab, setActiveTab }
})
