import { addDynamicIconSelectors as iconify } from '@iconify/tailwind';
import aspectRatio from '@tailwindcss/aspect-ratio';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import preline from 'preline/plugin';
import colors, { green as primary } from 'tailwindcss/colors';
import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './assets/**/*.js',
        './pages/**/*.{html,js}',
        './public/features/**/*.{html,js}',
        './node_modules/preline/dist/*.js',
    ],
    darkMode: 'class', // or 'media'
    theme: {
        extend: {
            colors: {
                primary: {
                    ...primary,
                    DEFAULT: primary[500],
                },
                info: {
                    ...colors.blue,
                    DEFAULT: colors.blue[500],
                },
                danger: {
                    ...colors.rose,
                    DEFAULT: colors.rose[500],
                },
                success: {
                    ...colors.emerald,
                    DEFAULT: colors.emerald[500],
                },
                warning: {
                    ...colors.amber,
                    DEFAULT: colors.amber[500],
                },
                secondary: {
                    ...colors.gray,
                    DEFAULT: colors.gray[400],
                },
                dark: {
                    ...colors.slate,
                    DEFAULT: '#1F2937',
                },
                white: {
                    DEFAULT: '#FFFFFF',
                    light: '#E0E6ED',
                },
                light: '#F5F8FA',
            },
            fontFamily: {
                sans: ['Inter, Helvetica, "sans-serif"', ...defaultTheme.fontFamily.sans],
            },
            screens: {
                xxl: '1536px',
                xxxl: '1920px',
            },
        },
    },
    plugins: [preline, forms, typography, aspectRatio, iconify()],
};
