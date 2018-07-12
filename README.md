# rollup-jquery-boilerplate

Simple jquery + es6 + autoprefixer boilerplate using [Rollup](https://github.com/rollup/rollup)

## 2018.07.12

I set up boilerplate for IE 11 and above browser with css grid. This will be enough for legacy web development.

I removed old configs including eslint, but prettier in VS Code doesn't work well with .babelrc [Fix](https://github.com/prettier/prettier/issues/4636). There are some problems in rollup and babel7, so I set up using babel6. I'll fix it later.

## Install

```
git clone https://github.com/fri13th/rollup-jquery-boilerplate your-project
cd your-project
yarn
```

## Dev

```
yarn start
```

## Prod

```
yarn build
```
