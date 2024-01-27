import config from '@jgarber/eslint-config';

export default [
  ...config,
  {
    languageOptions: {
      globals: {
        window: 'readonly'
      }
    }
  }
];
