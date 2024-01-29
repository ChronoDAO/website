// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
const loadEnv = (mode) => dotenv.config({ mode }).parsed;

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode);

  return {
    plugins: [react()],
    define: {
      'import.meta.env.CDN_URL': JSON.stringify(env?.CDN_URL || ''),
    },
  };
});
