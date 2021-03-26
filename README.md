# Trybe Star Wars Front-end Challenge

All the instructions, architecture and decisions about the project can be found below.

## Language and Library

Following the challenge recommendation, it was used JavaScript and its library, React.

## Dependencies

- [TypeScript](https://www.typescriptlang.org/): it types the code at runtime.
- [Styled Components](https://styled-components.com/): it optimizes the styling experience for React components.
- [React Icons](https://react-icons.github.io/react-icons/): an easier way to get svg icons as React components.xx

## Architecture

This project architecture was created in order to support its growth and keep it organized.

**Project Tree**

```
├── public
│  ├── favicon.ico
│  └── index.html
├── src
│  ├── assets
│  │  ├── background.png
│  │  ├── logo.png
│  │  └── vader-footer.png
│  ├── components
│  │  ├── Footer
│  │  │  ├── footer.hook.ts
│  │  │  ├── index.tsx
│  │  │  └── styles.ts
│  │  ├── Header
│  │  │  ├── index.tsx
│  │  │  └── styles.ts
│  │  └── SearchBar
│  │     ├── search-bar.hook.tsx
│  │     ├── styles.ts
│  │     └── styles.ts
│  ├── context
│  │  └── index.tsx
│  ├── pages
│  │  └── Home
│  │     ├── Table
│  │     │  ├── index.tsx
│  │     │  ├── styles.ts
│  │     │  └── table.hook.ts
│  │     ├── index.tsx
│  │     └── styles.ts
│  ├── styles
│  │  └── GlobalStyles.ts
│  ├── App.tsx
│  ├── index.tsx
│  ├── react-app-env.d.ts
│  └── types.d.ts
├── .eslintrc.js
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.json
└── yarn.lock
```

The simplified version of the project tree is described below:

- **components**: react components used inside the pages and that can be reusable
- **context**: react tool used to share global data to the components tree
- **pages**: homepage and components used in it
- **styles**: global styles to be used in the entire application

## To Do

- Do not use repeted filters: once the filter line is filled, a new one must be loaded and the columns that were already selected before cannot be included again.
- Delete the numeric value filter and undo the filtering from the table by clicking on the **X** icon.
- Sort the columns by ascending and descending.

## Settings

You must have Git installed in your machine to download the following GitHub repository:

- https://github.com/danielejsantos/swapi-trybe

Or you can download it by following the command:

`git clone https://github.com/danielejsantos/swapi-trybe.git`

Then, you must install its dependencies. At the root, run the command:

```
# with yarn:
yarn install
# with npm:
npm install
```

## How to run

Navigate to the root folder and run the following command:

```
# with yarn:
yarn start
# with npm:
npm start
```
