import {svelte} from '@sveltejs/vite-plugin-svelte'
import {execFileSync as exec} from 'child_process'
import {apply_repls} from 'components/src/util.js'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'

import pkg from './package.json'

const is_build = process.argv.includes('build')
const markup_repls = [
    [
        /<icon id=(.+?)>/g,
        `<svg class="icon icon-$1"><use href=${is_build ? '#icon-' : '/icons.svg#'}$1/></svg>`,
    ],
    [/(?<=<a )(?=href="?https?:)/g, 'target=_blank '],
]

const vars = {
    'window.__BUILD_DATE__': `'${new Date().toISOString()}'`,
    'window.__BUILD_HASH__': `'${exec('git', ['rev-parse', '--short', 'HEAD']).toString().trim()}'`,
    'window.__APP_VERSION__': `'${pkg.version}'`,
    'window.__DEBUG__': !is_build,
}

/** @type {import('vite').UserConfig}*/
export default {
    publicDir: is_build ? false : 'public',
    build: {
        reportCompressedSize: false,
        minify: false,
        sourcemap: true,
        lib: {
            entry: 'src/main.js',
            formats: ['es'],
            fileName: format => `bundle.${format}.js`,
        },
        rollupOptions: {
            output: {
                inlineDynamicImports: true,
                intro: Object.entries(vars)
                    .map(([k, v]) => `${k} = ${v}`)
                    .join('\n'),
            },
        },
    },
    server: {
        host: !!process.env.VITE_HOST || '0.0.0.0',
        proxy: {
            '^(/api|/static).*': {
                target: `http://127.0.0.1:${process.env.API_PORT || 6000}`,
                ws: true,
            },
        },
    },
    resolve: {
        alias: [
            {find: '~', replacement: path.resolve('src')},
            {find: '$lib', replacement: path.resolve('src/lib')},
        ],
    },
    define: is_build ? {} : vars,
    plugins: [
        svelte({
            preprocess: [
                {
                    markup({content}) {
                        return {code: apply_repls(content, markup_repls)}
                    },
                },
            ],
            onwarn(warning, handler) {
                const IGNORED_WARNINGS = [
                    'a11y_autofocus',
                    'a11y_click_events_have_key_events',
                    'a11y_no_static_element_interactions',
                    'a11y_no_noninteractive_element_interactions',
                ]
                if (
                    !IGNORED_WARNINGS.includes(warning.code) &&
                    !warning.message.includes('is not defined')
                )
                    handler(warning)
            },
        }),
        AutoImport({
            imports: ['svelte', 'svelte/store', 'svelte/transition', 'svelte/animate'],
            dts: './src/auto-imports.d.ts',
        }),
    ],
}
