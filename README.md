# User Admin

## Specification for app

Created with Create-React-App with TypeScript.

Bootstrap is used for UI component library. Chosen because it is extendable, customisable, and removable, since it mostly relies on CSS classes.

React-Router is used for navigating. 

Layout:
A table view is a compact and easily sortable layout for displaying lots of data. This will be coupled with a card for showing details, including large image. The table will have pagination for large result sets.

The page will display a loader while fetching data and a placeholder for the card.

File structure:
The app will have two main components: UserTable and UserDetail. They will have separate folders with stylesheets

App
	|_index.ts
	|_style.css
UserTable
	|_index.ts
	|_style.css
UserDetail
	|_index.ts
	|_style.css

State:
State will be handled using the useState hook. It could be considered to switch to useReducer if the UI state or data increases in complexity

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
