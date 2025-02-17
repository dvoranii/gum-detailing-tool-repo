import 'react-i18next';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    resources: {
      home: typeof import('./src/locales/en.json')['home'];
      interproximal: typeof import('./src/locales/en.json')['interproximal'];
      toothbrush: typeof import('./src/locales/en.json')['toothbrush'];
    };
  }
}