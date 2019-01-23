import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import browsersync from 'rollup-plugin-browsersync';
import { uglify } from 'rollup-plugin-uglify';
import autoprefixer from 'autoprefixer';

let plugins = process.env.ROLLUP_WATCH
  ? [
      resolve(),
      browsersync({ server: 'public' }),
      postcss({
        extract: './dist/css/main.css',
        sourceMap: true,
        plugins: [
          autoprefixer({
            grid: true
          })
        ]
      })
    ]
  : [
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
      babel({
        babelrc: false,
        presets: [['@babel/preset-env']],
        exclude: 'node_modules/**'
      }),
      uglify()
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
      file: 'dist/js/main.es.js',
      format: 'es',
      globals: { jquery: '$' },
      sourcemap: true
    }
  ],
  plugins
};
