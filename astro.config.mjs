import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import rehypeKatex from 'rehype-katex';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import tailwind from '@astrojs/tailwind';
import svelte from '@astrojs/svelte';
// import remarkMermaid from 'astro-diagram/remark-mermaid';

// import mdx from '@astrojs/mdx';
import expressiveCode from 'astro-expressive-code';
import remarkMermaid from 'remark-mermaidjs';

// import expressiveCode from 'astro-expressive-code';

// https://astro.build/config
export default defineConfig({
    site: 'https://titieo.github.io/',
    base: '/notable/',
    integrations: [
        expressiveCode(),
        mdx(),
        sitemap(),
        tailwind({
            applyBaseStyles: false,
        }),
        svelte(),
    ],
    markdown: {
        syntaxHighlight: 'prism',
        remarkPlugins: [remarkMath, remarkMermaid],
        rehypePlugins: [rehypeKatex],
        // remarkPlugins: [remarkMath],
        // remarkPlugins: [[remarkToc, { heading: 'toc', maxDepth: 3 }]],
        // rehypePlugins: [rehypeAccessibleEmojis],
    },
});
