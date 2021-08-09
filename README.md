# cra-eslint-prettier-standard-style template

### - To use this repository, clone it and run `npm install && npm run start`

### - To reproduce the contents of this repository, follow the steps below:

0. You must have **Node.js** installed.
1. Bootstrap a fresh React app using **cra**: `npx create-react-app my-project`
2. ( _VSCode_ ) Change directory into the new project: `code my-project`
3. Install **EsLint & Prettier** dependencies `npm i -D eslint prettier eslint-config-prettier`
4. Run **EsLint** to configure the project, `npx eslint --init`:  
    a. Select the options:

   - To check syntax, find problems, and enforce code style
   - React
   - No (Yes if using TS)
   - Browser
   - Use a popular style guide
   - Standard style
   - JavaScript
   - Yes to install dependencies with npm

   b. Add _'prettier'_ to _`.eslintrc.js`_ file

   ```javascript
   module.exports = {
     extends: [
       // add at the end
       'prettier',
     ],
   };
   ```

   c. Create _`.prettierrc.js`_ config file at root level.

   ```javascript
   module.exports = {
     semi: true,
     singleQuote: true,
     trailingComma: 'es5',
     arrowParens: 'avoid',
     endOfLine: 'auto',
   };
   ```

5. **VSCode** configurations:  
    a. Go to `Settings` > Search for `Default Formatter` and choose `esbenp.prettier-vscode` to enable Prettier.  
    b. Also search for `Format on save` and check the box so that every time you save a file, Prettier will automatically format it for you.  
    To enforce it on any machine, also create _`.vscode`_ folder at root level, and _`settings.json`_ inside

   ```json
   {
     "editor.codeActionsOnSave": {
       "source.fixAll.eslint": true
     },
     "editor.formatOnSave": true
   }
   ```

   (Previous steps come from my other repo template, https://github.com/Madalin-Antonoiu/cra-eslint-prettier-standard-style )

6. To be able to write state = {} and arrow functions inside class components, install babel-parser for eslint , `npm install -d babel-eslint` and add `parser: "@babel/eslint-parser"` to **.esintrc.js**

7. Optional - Adding _**Material UI**_ to the project:  
    a. `npm install @material-ui/core`  
    b. Optional - Add Roboto Font to _`public/index.html`_

   ```HTML
   <link
     rel="stylesheet"
     href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
   />
   ```

   c. Optional - Add **Font Icons** _`public/index.html`_

   ```HTML
   <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
   ```

   d. Optional - Add **SVG Icons** `npm install @material-ui/icons`  
   e. Optional - Add **Theming** to your project:
   https://material-ui.com/customization/theming/

### - Useful info:

https://iconify.design/ - Over 100,000 vector icons (CC0).
