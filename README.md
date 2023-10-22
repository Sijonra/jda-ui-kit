# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

# JDA UI-KIT

Custom ui-kit with simple demonstration pages.

## Decomposition:

## 1. Preparing project

      1.1. installing vite project
      1.2. creating github repository
      1.3. project init on github

## 2. Creating basic file structure

      2.1. - [JDA-0201] create directories for pages and components
      2.2. - [JDA-0202] create directories and files for each component and page

## 3. Creating UI components

      3.1. - [JDA-0301] create scss mixins and variables
      3.2. - [JDA-0302] making Text component
      3.3. - [JDA-0303] making Paragraph component
      3.4. - [JDA-0304] making Button component
      3.5. - [JDA-0305] making Card component
      3.6. - [JDA-0306] making Badge component
      3.7. - [JDA-0307] making Toast component
      3.8. - [JDA-0308] making Heading component

## 4. Creating pages for components demonstration

      4.1. - [JDA-0401] creating routing with react-router-dom
      4.2. - [JDA-0402] making Text page
      4.3. - [JDA-0403] making Paragraph page
      4.4. - [JDA-0404] making Button page
      4.5. - [JDA-0405] making Card page
      4.6. - [JDA-0406] making Badge page
      4.7. - [JDA-0407] making Toast page
      4.8. - [JDA-0408] making Greeting page
      4.9. - [JDA-0409] making Heading page
      4.10. - [JDA-0410] creating menu component
