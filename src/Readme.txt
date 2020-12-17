1. npx create-react-app hotel-reservation
2. npm react-icons --save
3. npm install react-router-dom --save
4. Do the cleaning in the app
5. ./public/index.html > <title>Hotel Reservation Recording</title>
6. Get the redirect file and put it in the root public in order to match app with Netlify
    https://community.netlify.com/t/netlify-page-not-found-when-sharing-react-router-dom-based-links/11744/2
    File name: _redirects
    File content: /*    /index.html   200
7. Use react-router-dom to make different pages (npm install react-router-dom)
    Go to https://reactrouter.com/web/guides/quick-start
    Need to import:
        index.js > import { BrowserRouter as Router } from "react-router-dom"; 
            Wrap our app in <Router><App/></Router>
        App.js > import { Switch, Route } from "react-router-dom";
        Navbar.js > import { Link } from "react-router-dom";
8. Import icons from https://react-icons.github.io/react-icons/    (npm react-icons --save)
9. 
