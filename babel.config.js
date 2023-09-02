module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: [
        [
          'module-resolver',
          {
            extensions: [
              '.js',
              '.jsx',
              '.ts',
              '.tsx',
              '.android.js',
              '.android.tsx',
              '.ios.js',
              '.ios.tsx',
            ],
            alias: {
              '@components': './src/components/',
            },
          },
        ],
        'react-native-paper/babel',
      ],
    },
  },
};
