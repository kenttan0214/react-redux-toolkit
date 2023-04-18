# React Infinite Scroll with RTK Query and Redux Toolkit

RTK Query is a great choice for managing API requests in a Redux application, but it currently does not provide a built-in pagination feature. However, with some customization, we can use RTK Query to achieve pagination and infinite scrolling.

In order to implement infinite scrolling and pagination using RTK Query, we need to fetch one page of data at a time and store the data in the Redux state. We can then use this data to render the list of posts and load more data as the user scrolls down the page.

To achieve this, we use the `onQueryStarted` option provided by RTK Query. This option allows us to trigger a side effect whenever a query is started. In our case, we use this option to dispatch an action to store the current page of data in the Redux state.

When the API response is received, RTK Query will automatically update the Redux state with the response data. If we're fetching the first page of data, the response data will replace any existing data in the Redux state. If we're fetching a subsequent page, the response data will be appended to the existing data.

By using onQueryStarted and storing the data in the Redux state, we can easily implement infinite scrolling and pagination in our React app.

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
