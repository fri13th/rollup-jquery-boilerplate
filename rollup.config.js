import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import browsersync from 'rollup-plugin-browsersync';
import { uglify } from 'rollup-plugin-uglify';
import autoprefixer from 'autoprefixer';

const production = !process.env.ROLLUP_WATCH;
let plugins = production
  ? [
      resolve(),
      postcss({
        extract: './dist/css/main.css',
        minimize: true,
        sourceMap: true,
        plugins: [
          autoprefixer({
            grid: true
          })
        ]
      }),
      babel(babelrc()),
      uglify()
    ]
  : [
      resolve(),
      browsersync({ server: 'dist' }),
      postcss({
        extract: './dist/css/main.css',
        plugins: [
          autoprefixer({
            grid: true
          })
        ]
      }),
      babel(babelrc())
    ];

export default {
  input: 'src/js/main.js',
  output: [
    {
      file: 'dist/js/main.iife.js',
      format: 'iife',
      globals: { jquery: '$' },
      sourcemap: true
    },
    {
      file: 'dist/js/main.es6.js',
      format: 'es',
      globals: { jquery: '$' },
      sourcemap: true
    }
  ],
  plugins
};
