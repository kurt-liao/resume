export default () => ({
  tab: 'resume',
  template: `
  <div class="border-b-2">
        <h1 class="logo capitalize">Kurt's <span x-text="tab"></span></h1>
        <div class="nav flex">
          <button
            class="px-16 border-t-2 mr-2"
            @click="switchTab('resume')"
          >
            Resume
          </button>
          <button
            class="px-16 border-t-2"
            @click="switchTab('works')"
          >
            Works
          </button>
        </div>
    </div>
  `,
  switchTab(value: string) {
    this.tab = value
  },
})
