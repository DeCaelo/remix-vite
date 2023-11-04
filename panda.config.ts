import { defineConfig } from '@pandacss/dev';
import { pandaPreset } from './panda-preset';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Use Panda preset
  presets: [pandaPreset],

  // The extension for the emitted JavaScript files
  outExtension: 'js',
  // Where to look for your css declarations
  include: [
    './app/routes/**/*.{ts,tsx,js,jsx}',
    './app/components/**/*.{ts,tsx,js,jsx}'
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          base: { value: 'hsl(var(--color-theme) / <alpha-value>)' },
          50: { value: 'hsl(var(--color-theme-50) / <alpha-value>)' },
          100: { value: 'hsl(var(--color-theme-100) / <alpha-value>)' },
          200: { value: 'hsl(var(--color-theme-200) / <alpha-value>)' },
          300: { value: 'hsl(var(--color-theme-300) / <alpha-value>)' },
          400: { value: 'hsl(var(--color-theme-400) / <alpha-value>)' },
          500: { value: 'hsl(var(--color-theme-500) / <alpha-value>)' },
          600: { value: 'hsl(var(--color-theme-600) / <alpha-value>)' },
          800: { value: 'hsl(var(--color-theme-800) / <alpha-value>)' },
          900: { value: 'hsl(var(--color-theme-900) / <alpha-value>)' }
        }
      }
    }
  },

  // The output directory for your css system
  outdir: 'styled-system',

  // Additional conditions to be available to our CSS
  conditions: {
    light: '[color-theme=light] &',
    dark: '[color-theme=dark] &'
  }
});
