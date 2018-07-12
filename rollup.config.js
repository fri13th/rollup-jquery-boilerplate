import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import browsersync from 'rollup-plugin-browsersync';
import autoprefixer from 'autoprefixer';

export default {
  input: 'src/js/main.js',
  output: {
    file: 'dist/js/main.min.js',
    format: 'iife',
    globals: { jquery: '$' }
  },
  plugins: [
    resolve(),
    browsersync({ server: 'dist' }),
    // https://github.com/egoist/rollup-plugin-postcss
    postcss({
      extract: './dist/css/main.min.css',
      minimize: true,
      sourceMap: true,
      plugins: [
        autoprefixer({
          grid: true
        })
      ]
    }),
    babel(babelrc())
  ]
};
