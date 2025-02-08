import { computed } from 'vue'
export const useModuleSettings = () => {
  const userSidebar = ['about', 'resume', 'portfolio', 'blog', 'contact-me']
  const adminSidebar = ['dashboard', 'profile']

  const isUserSidebar = computed(() => (name) => {
    return userSidebar.includes(name)
  })

  const isAdminSidebar = computed(() => (name) => {
    return adminSidebar.includes(name)
  })

  return {
    isUserSidebar,
    isAdminSidebar,
  }
}
