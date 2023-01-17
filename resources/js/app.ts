import { createApp, h } from "vue"
import { App, plugin as inertiaPlugin } from "@inertiajs/inertia-vue3"
import "vite/dynamic-import-polyfill"

import '../css/app.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

const el = document.getElementById("app")!

createApp({
  render: () =>
    h(App, {
      initialPage: JSON.parse(el.dataset.page!),
      resolveComponent: async (name: string) => {
        const page = (await import(`./Pages/${name}.vue`)).default
        return page
      },
    }),
})
  .use(inertiaPlugin)
  .use(vuetify)
  .mount(el)
