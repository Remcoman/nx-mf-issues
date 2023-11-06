import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'jsremote',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
