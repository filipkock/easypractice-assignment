const app = Vue.createApp({
    data() {
      return {
        clientName: 'Messi theGOAT',
        clientNumber: '1234567890',
        clientEmail: 'MessitheGOAT@example.com',
        enabledApps: ['Notifications', 'Appointments', 'Invoices', 'Journal',],
        currentApp: 'Notifications',
        showDropdown: false,
        allApps: ['Notifications', 'Appointments', 'Invoices', 'Journal', 'Messages', 'Payments']
      };
    },
    methods: {
      toggleDropdown() {
        // Method to toggle the visibility of the dropdown content
        this.showDropdown = !this.showDropdown;
      },
      toggleApp(app) {
        // Method to toggle the pinning of an app
        const index = this.enabledApps.indexOf(app);
        if (index > -1) {
          this.enabledApps.splice(index, 1); // Remove the app if it is already pinned
        } else {
          this.enabledApps.push(app); // Pin the app if it is not already pinned
        }
      },
      isPinned(app) {
        // Method to check if an app is pinned or not
        return this.enabledApps.includes(app);
      }
    }
  });
  
  app.mount('#app');
  