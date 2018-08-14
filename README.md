# ClipsTube - A react/redux app

This app allows you to slice up a video into clips.

See it running: [DEMO](http://138.68.9.12:5000/)

![alt text](https://github.com/jhoansebastianlara/clipstube-reactjs/blob/master/clipstube.demo.gif)

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Available Scripts

In the project directory, you can run:

## `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Component Structure

I built them reusables so I divide them into two categories: Container and Presentational trying to follow Dan Abramov advices. [See more](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0):

```
MyComponent/
  components/ -> Child components
    ChildComponent/
    AnotherChildComponent/
  index.js -> just re-exports components in order to avoid double imports like '/MyComponent/MyComponent'.
  MyComponent.js -> Presentational, just a plain view.
  MyComponentContainer.js -> Container, used for fetching, preparing data, getting data from redux-store...
  MyComponent.scss -> Styles, it generates a .css file automatically.
```
## About folder structure

```
  action-types/ -> hold redux-actions types.
  action/ -> hold redux-actions.
  assets/ -> hold static files like images, videos, fonts...
  components/ -> is a folder for all the components.
  reducers/ -> is a folder for all the reducers.
  helpers/ -> contain useful methods that could be used through the app.
  styles/ -> contain global styles, variables and colors.
  data.json: initial state of the app.
```

## License
MIT
