const rollup = require('rollup');
const commonjs = require('rollup-plugin-commonjs');
const nodeResolve = require('rollup-plugin-node-resolve');
const buble = require('rollup-plugin-buble');
const includePaths = require('rollup-plugin-includepaths');
const watch = require('rollup-watch');
const uglify = require('rollup-plugin-uglify');
let bs = require("browser-sync").create();

const appName = 'app';

let env = {
  watch: false,
  serve: false,
  production: false
};

process.argv.forEach(function (arg) {
  if (arg.indexOf('--watch') > -1) env.watch = true;
  if (arg.indexOf('--serve') > -1) env.serve = true;
  if (arg.indexOf('--production') > -1) env.production = true;
});

let plugins = [
  includePaths({
    paths: ['src']
  }),
  nodeResolve({
    jsnext: true,
    main: true
  }),
  commonjs({
    include: 'node_modules/**',
    sourceMap: true,
    namedExports: {jquery: ['jQuery']}
  }),
  buble()
];

if (env.production) plugins.push(uglify());

let options = {
  entry: 'src/main.js',
  external: [
    'jquery',
    'node_modules/jquery/'
  ],
  plugins: plugins,
  targets: [
    {
      format: 'iife',
      moduleName: `${appName}`,
      dest: `dist/${appName}.js`,
      sourceMap: true,
      globals: {
        jquery: 'jQuery'
      }
    }
  ]
};

if (env.watch || env.serve) {
  watch(rollup, options);
  if (env.serve) {
    bs.watch("*.html, dist/*.js").on("change", bs.reload);
    bs.init({server:"./"});
  }
}
else {
  rollup.rollup(options).then(bundle => {
    for (let i = 0; i < options.targets.length; i++) {
      bundle.write(options.targets[i]);
    }
  }).catch(error => {console.error(error);});
}
