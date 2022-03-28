# To Do List| MODULE-II

> This simple project being built in our second module of our curriculum at microverse. its a is To Do List were you are able to: add, remove, marke as completed and clear all completed notes from the To Do list.
> Our goal here is to Build a simple interactive To Do List app from scratch using JavaScript.

### Features implemented so far are:

- Responsive HTML page
- Add book feature
- Remove book feature
- Saving current state of book list to local storage
- Live date and time update using luxon library
  
   #### take a look at what i'v built [Live Demo](https://l2oukmane.github.io/To-Do-List/). 🙂


## Built With

- Lighthouse (An open-source, automated tool for improving the quality of web pages. It has audits for performance, accessibility, progressive web apps, SEO and more).
- Webhint (A customizable linting tool that helps you improve your site's accessibility, speed, cross-browser compatibility, and more by checking your code for best practices and common errors).
- Stylelint (A mighty, modern linter that helps you avoid errors and enforce conventions in your styles).
- ESlint (A mighty, modern linter that helps you avoid errors and enforce conventions in JavaScript codes)
- webpack a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser,

To get a local copy up and running follow these simple example steps.

### Prerequisites

The basic requirements for building the executable are:

- A working browser application (Google chrome, Mozilla Fire fox, Microsoft edge ...)
- VSCode or any other equivalent code editor
- Node Package Manager (For installing packages like Lighthous, webhint & stylelint used for checking for debugging bad codes before deployment)

# Getting Started

#### Cloning the project

```
git clone  https://github.com/L2oukmane/ToDo-list <Your-Build-Directory>
```

## Getting packages and dependencies

To get all package modules required to build the project run:

```
npm install
```

every package module required to build the project is listed in the package.json file. this is used as a reference to get all dependencies.

## Building the project

```
npm run build
```

## Running

To run the program on a browser through a server run this command in your cli

```
npm start
```

## Unit-Testing

```
npm run test
```

## Getting packages and debuging with Stylelint

```
npm install --save-dev stylelint@13.x stylelint-scss@3.x stylelint-config-standard@21.x stylelint-csstree-validator@1.x
```

##### For validation detection using Stylelint Run

```
npx stylelint "**/*.{css,scss}"
```

##### from parent source directory

## Getting packages and debuging with ESlint

```
 npm install --save-dev eslint@7.x eslint-config-airbnb-base@14.x eslint-plugin-import@2.x babel-eslint@10.x
```

##### For validation detection using Stylelint Run

```
npx eslint .
```

##### from parent source directory

## Getting packages and debuging with Webhint

```
npm init -y
npm install --save-dev hint@6.x
```

##### For validation detection using Webhint Run

```
npx hint .
```

##### from parent source directory

## License

All source code files are licensed under the permissive zlib license
(http://opensource.org/licenses/Zlib) unless marked differently in a particular folder/file.

## Author

- **Oustani Loukmane** - [github](https://github.com/L2oukmane), [linkedin](https://www.linkedin.com/in/loukmane-oustani-221668211/), [twitter](https://twitter.com/LoukmaneOustani)
