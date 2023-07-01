# Food Ordering App

- npm install -D parcel
- npm install react
- npm install react-dom

# Parcel (https://parceljs.org/)

- Dev Build
- Local Server
- HMR (Hot Module Replacement)
- File Watching Algorithm (written in c++)
- Caching (Faster Builds)
- Image Optimization
- Minification
- Bundling
- Compressing
- Consistent Hashing
- Code Splitting
- Differential Building - support older browsers
- Diagnostic
- Error Handling
- Https
- Tree Shaking (removes unused code)
- Different Dev and Production build
- Production Build Command
  - npx parcel build index.html

# Browser Compatibilty

- "last 10 versions" this ensures that it will definitely work in last 10 versions , but it does not mean that it will not work in other older browser versions.

# Production Buld

- Add "build":"parcel build index.html" in package.json
  - "scripts": {
    "start": "npx parcel index.html",
    "build": "parcel build index.html",
    "test": "jest"
    }
- npm run start = npm start
- npm run build (in this case "run" keywords needs to be there to build)

# JSX

- Different than html
- It is html like syntax
- It is (transpiled by parcel) converted to code which is understood by the browser
- parcel gives this job to "Babel package" (it is js compiler / transpiler)
  - takes jsx and converts it to code which is understood by the react
- Attribute is written in "camelCase"

# React Components

- Functional Components - New
- Class Based Components - Old

- Component should always be Capital Case
- Component returns some jsx element or or react element
- Everything in react is component (header , button , etc)
- { } inside jsx , any code of js can be run
- it does data sanization , so it prevents malicous attack

# Component Composition

- Nested Component

# React Fragment

- <React.Fragment> this beahaves like empty tag <React.Fragment>
- it allows to have multiple element inside it

# Props

- its just normal arguments

# useState Hooks

- const [state,setState] = useState(defaultValue);
- Whenever state valriable updates, React re-renders component;
- Always call this inside body of component
- it should always be called on top
- Never use this inside if condition

# Reconsilation Algorithm (React Fiber)

- React created virtual DOM
- Actual DOM <div>,<img>
- Virtual is a representation of the actual DOM
- Virtual DOM is basically the object which represent the actual DOM
- Diff Algorithm
  - It finds the difference between Old And New virtual DOM and then updates the actual DOM
  - This makes React Faster

# useEffect Hooks

- useEffect(()=>{console.log("useEffect Called")},[dependancy])
- This is called after component is rendered and called after dependancy is fullfilled
- if no dependancy is provided then it is called on each render of that component
- Empty Dependancy array , useEffect called only once

# Shimmer UI for better user experience

# React Router DOM

- npm install react-router-dom

# useRouteError

- it is used to handle the error and it helps us in understaning the status and statusText

# children Routes

- Outlet is used to dynamically load component which are defined by children routes

# Link Component

# 2 Types of Routing in web apps

- Client Side
- Server Side

# Class based component

- constructor to be called in class component
- super to be used manadatory to inherit to the property from React Component
- to set state varitables
  - this.state = {key:value}
- Never update state variables directly
- this.setState({key:newValue})

# Life Cycle Class based Components (https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

- Constructor()
- render()
- componentDidMount()
  - we can perform actions to be performed after rendering inside componentDidMount
  - action like API Calls
