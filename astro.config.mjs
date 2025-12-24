import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // 🟢 請改成你的新網域
  site: 'https://ferryeasy.app', 
  integrations: [tailwind(), sitemap()]
});