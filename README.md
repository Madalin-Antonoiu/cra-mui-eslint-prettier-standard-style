# cra-eslint-prettier-standard-style template

To reproduce the contents of this repository, follow the steps below:

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
