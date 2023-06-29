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
