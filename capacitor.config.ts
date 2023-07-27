import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.prestamos.app',
  appName: 'Prestamos y Pagos',
  webDir: 'dist/prestamos-pagos',
  server: {
    androidScheme: 'https'
  }
};

export default config;
