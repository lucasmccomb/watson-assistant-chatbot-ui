# IBM Watson Assistant Node.js/React.js Chatbot UI
A Node.js/React.js app that provides a simple chatbot user interface for the IBM Watson Assistant API that can be integrated into an existing web app with a single script tag.

***

## Environment Setup

The following components are required to effectively use this repository:
- An [IBM Cloud](https://cloud.ibm.com/registration) account
- A [IBM Watson Assistant](https://www.ibm.com/cloud/watson-assistant/) service instance
- A target app or website into which the chatbot will be inserted
- A Command Line Interface (CLI)
- An installation of the [IBM Cloud CLI](https://console.bluemix.net/docs/cli/index.html#overview)
- A text editor or Integrated Development Environment (IDE) e.g. [VS Code](https://code.visualstudio.com/)
- An up-to-date version of [Firefox](https://www.mozilla.org/en-US/firefox/new/) or [Google Chrome](https://www.google.com/chrome/?brand=CHBD&gclid=CjwKCAjwu5veBRBBEiwAFTqDwTggc345A8KxyUcNEmc1evvkxhRQDSb8WS-FLmDQUPOyqJZL-LCsrRoCVMQQAvD_BwE&gclsrc=aw.ds&dclid=CP7z2LWAjt4CFaO6swod1zsEsw)

## Deployment

1. **Create a Node.js resource**  

    ***NOTE: The Node.js resource must be created in the same organization and space as the Watson Assistant service in order to connect to it, otherwise it will not be possible to connect the resource and the service.***  

    1. From the IBM Cloud dashboard, click 'Create Resource'  
        <img src="./screenshots/1-a.png" alt="Image 1-a" width="600px"/>
    2. Enter 'node.js' into the search bar and click on the 'SDK for Node.js' tile  
        <img src="./screenshots/1-b.png" alt="Image 1-b" width="600px"/>
    3. <a id="step_1-iii">Configure the application</a>
        1. Enter an app name
        2. Enter a host name
        3. Select a domain
        4. Choose a region
        5. Choose and organization
        6. Choose a space  
        <img src="./screenshots/1-c-i.png" alt="Image 1-c-i" width="600px"/>
    4. Click 'Create'  
        <img src="./screenshots/1-c-ii.png" alt="Image 1-c-ii" width="600px"/>

2. **Connect the Node.js resource to your Watson Assistant Service**

    1. After being redirected to the dashboard of the newly-created app, click on the 'Connections' tab in the left-hand menu  
        <img src="./screenshots/2-a.png" alt="Image 2-a" width="400px"/>  
    2. Click the 'Create Connection' button  
        <img src="./screenshots/2-b.png" alt="Image 2-b" width="600px"/>  
    3. In the 'Services' list, find the Watson Assistant service that you want to connect to your resource and click 'Connect'  
        <img src="./screenshots/2-c.png" alt="Image 2-c" width="600px"/>  
    4. A 'Connect IAM-Enabled Service' dialog box will appear. There is no need to change either of the configurations shown. Click 'Connect'.  
        <img src="./screenshots/2-d.png" alt="Image 2-d" width="400px"/>
    5. A 'Restage app' dialog box will then appear. Click 'Restage'.  
        <img src="./screenshots/2-e.png" alt="Image 2-e" width="400px"/>

3.  **From your CLI, clone this repository onto your local machine:** 
    - `git clone https://github.com/lukemccomb/watson-assistant-chatbot-ui.git`
4.  **Navigate to the `watson-assistant-chatbot-ui` directory**
    - `cd watson-assistant-chatbot-ui`
5.  **Open the `watson-assistant-chatbot-ui` repository in your IDE or text editor**
6.  **Create a `.env` file**

    1.  From your CLI or IDE, create an `.env` file  
        <img src="./screenshots/5-a.png" alt="Image 5-a" width="600px"/>
    2.  Copy all of the variables from the `.env.example` template into the new `.env` file
        <img src="./screenshots/5-b.png" alt="Image 5-b" width="400px"/>
    3.  In your browser, navigate to the the Watson Assistant Service dashboard and click on `Service Credentials`  
        <img src="./screenshots/5-c.png" alt="Image 5-c" width="400px"/>
    4.  In the 'Service Credentials' list, click `View credentials` on one of the listed credentials (it shouldn't matter which credential you choose).  
        <img src="./screenshots/5-d.png" alt="Image 5-d" width="600px"/>
    5.  Copy the value of `apikey` to the `ASSISTANT_API_KEY` value in the `.env` file  
    6.  Copy the value of `url` to the `ASSISTANT_URL` value in the `.env` file  
        <img src="./screenshots/5-e.png" alt="Image 5-e" width="600px"/>
        <img src="./screenshots/5-e-i.png" alt="Image 5-e-i" width="400px"/>  
        ***NOTE: Do not wrap any values in the `.env` file in quotes.***
    7.  Click 'Manage' in the upper-left of the page to navigate back to the Watson Assistant service dashboard  
        <img src="./screenshots/5-f.png" alt="Image 5-f" width="400px"/>
    8.  Click the 'Launch Tool' button  
        <img src="./screenshots/5-g.png" alt="Image 5-g" width="400px"/>
    9.  A new browser tab will open displaying the IBM Watson Assistant tool
    10. Click on the 'Assistants' tab  
        <img src="./screenshots/5-h.png" alt="Image 5-h" width="400px"/>
    11. Find the Assistant you want to connect to the Node.js Resource and click on the vertical three-dot menu button on the right side of the tile  
        <img src="./screenshots/5-i.png" alt="Image 5-i" width="600px"/>
    12. Select 'View API Details'  
        <img src="./screenshots/5-j.png" alt="Image 5-j" width="400px"/>
    13. Copy the 'Assistant ID' into the `ASSISTANT_ID` variable in the `.env` file  
        <img src="./screenshots/5-k.png" alt="Image 5-k" width="400px"/>  
        <img src="./screenshots/5-l.png" alt="Image 5-l" width="400px"/>

7.  **Update the `manifest.yml` file using your IDE or text editor**

    1. In `manifest.yml`, change the `name` and `route` fields to match your app name which can be found on your IBM Cloud account dashboard  
        <img src="./screenshots/5-m.png" alt="Image 5-m" width="500px"/>
        <img src="./screenshots/5-n.png" alt="Image 5-n" width="400px"/>
    2. In `manifest.yml`, update the `services` list with the Watson Assistant service name which can also be found on your IBM Cloud account dashboard  
        <img src="./screenshots/5-o.png" alt="Image 5-o" width="400px"/>  
        <img src="./screenshots/5-p.png" alt="Image 5-p" width="400px"/>

8.  **Update the `static_store.js` file**

    1. In your browser, from you IBM Cloud account Dashboard, click on your Node.js Resource
        <img src="./screenshots/8-a.png" alt="Image 8-a" width="600px"/>
    2. Click the 'Visit App URL' link  
        <img src="./screenshots/8-b.png" alt="Image 8-b" width="600px"/>
    3. <a id="step_8iii">Copy the URL from the new tab that opens and paste it into the `DEV_HOST_URL` variable in `static_store.js`</a>  
        ***NOTE: Make sure there is no trailing backslash at the end of the URL***  
        <img src="./screenshots/8-c.png" alt="Image 8-c" width="400px"/>
        <img src="./screenshots/8-d.png" alt="Image 8-d" width="500px"/>  

9.  **Push the modified repository**

    1. Make sure you have saved the `.env`, `manifest.yml`, and `static_store.js` files
    2. In the CLI, login to IBM Cloud by running the command: `ibmcloud login`
    3. Select the account on which you created the Node.js resource
    4. Target the Resource group, Organization and Space in which you created your Node.js Resource
    5. From within this directory, run `ibmcloud app push {your-app-name}`, substituting `{your-app-name}` for the name of your app
        - e.g. `ibmcloud app push lem-assistant-chatbot`

10. **The chatbot app is now deployed.**

    - You can test this by navigating to your app's route which you copied in [Step 8.iii](#step_8iii). You should see a blank page with a blue button in the bottom right that says 'Need Help?'. Click on this button to open the chat dialog and test out the Watson Assistant service.  

    <img src="./screenshots/gif-1.gif" alt="Image gif-1" width="600px"/>  

11. **Add `<script>` tag into the target application within which the chatbot will exist**

    1. Open the html file of the page you want to insert the script tag into
    2. Copy the following `<script>` tag and paste it below the end-tag of the `<body>` element:
        ```javascript
            <script data-main='chat_bot_app' src="{host}/chat_bot_app.js"></script>
        ```
    3. Change `{host}` in the `src` attribute to match your app's route which you copied in [Step 8.iii](#step_8iii)  
        ***NOTE: Make sure there is only one backslash between your app's route and `chat_bot_app.js`***  
        <img src="./screenshots/11-a.png" alt="Image 11-a" width="700px"/>  
    4. Save your changes and either run your app locally or deploy it to your cloud environment

**Within your own application or website, you should now see a blue 'Need Help?' button in the bottom right corner of the page that you inserted the script tag into. When the button is clicked, a chatbot window should appear and you should be able to have a conversation with your Watson Assistant service. <a href="https://lem-assistant-demo-1.mybluemix.net/">Here is a working demo.</a>**

***

## Code Base Information

### System Requirements
- [Installation of Node.js](https://nodejs.org/en/download/)
- [Installation of NPM](https://docs.npmjs.com/getting-started/installing-node#terminals-editors-and-git-for-beginners)
- Browser: Up-to-date version of [Firefox](https://www.mozilla.org/en-US/firefox/new/) or [Google Chrome](https://www.google.com/chrome/?brand=CHBD&gclid=CjwKCAjwu5veBRBBEiwAFTqDwTggc345A8KxyUcNEmc1evvkxhRQDSb8WS-FLmDQUPOyqJZL-LCsrRoCVMQQAvD_BwE&gclsrc=aw.ds&dclid=CP7z2LWAjt4CFaO6swod1zsEsw)

### Developer Knowledge
In order to understand the inner-workings of this application and modify any code/configurations, it is recommended that a developer have a basic understanding of the following languages/technologies/frameworks:
- [JavaScript: ECMAScript 2015](https://www.ecma-international.org/ecma-262/6.0/)
- [Node.js](https://nodejs.org/en/docs/)
- [Express.js](http://expressjs.com/en/4x/api.html)
- [React.js](https://reactjs.org/)
- [REST APIs](https://www.restapitutorial.com/)

Non-essential:
- [Atomic CSS](https://css-tricks.com/lets-define-exactly-atomic-css/)
- [Babel](https://babeljs.io/**docs**/en/)
- [Webpack](https://webpack.js.org/concepts/)

### Data Flow
- To initiate the Chat bot, a user clicks the blue "Need Help?" talk bubble positioned at the bottom right of the page
- The user is greeted with a message from the Watson Assistant service
- The user then enters a question/phrase into the text area and presses enter
- The user's input is then sent to the Watson Assistant service associated with the app via the Node.js backend API
- The Watson Assistant service then finds the most relevant node within the service instance and sends a response to the Node.js back-end API
- The Node.js back-end API then sends the response to the front-end where it is put into a message and appended to the chat dialog

### Front-end (React.js)

Directories/Files:
- `/public/*`
- `/src/*`

The `/public/` directory contains:
- `bundle.js`: the compiled file that Webpack produces. ***Do not modify this file***
- `chat_bot_app.js`: a plain JavaScript file that contains an event listener which adds two scripts to the header of the document and a single wrapping `<div>` to the page which the chatbot is then loaded into.
- `chat_bot_styles.css`: CSS styling
- `favicon.ico`: the favicon
- `headerIcon.png`: the chat window header icon
- `index.html`: a sample page to add the `<script data-main="chat_bot_app" src="./chat_bot_app.js"></script>` script to. This holds the place of the actual page that the script would be added to and is only for demo purposes.

The `/src/` directory contains:
- `/components/`: all React components that make up the chat bot UI
- `index.js`: the entry point for the React app

### Back-end (Node.js/Express.js/MongoDB)

Directories/Files:
- `/app.js`: main file that configures the Node app: defines the routes, makes any public files available, and makes some libraries/packages available to the rest of the app through `module.exports`
- `/bin/www`: builds the HTTP server, binds it t a specific port and listens for requests
- `/routes/*`: contains an `/api` directory where all of the API routes are defined

### Configs & Other

Directories/Files:
- `.babelrc`: Babel configuration
- `.cfignore`: Cloud Foundry ignore file
- `.env`: Environment variable storage
- `.gitignore`: Git ignore file
- `manifest.yml`: Manifest file for Cloud Foundry deployment
- `static_store.js`: Static value storage file
- `webpack.config.js`: Webpack config file

### Libraries / Packages
All libraries/packages can be found in the `package.json` file. To add or remove a package to the app, use NPM and the corresponding NPM command for the specific package (e.g. `npm install [package]` or `npm uninstall [package]`). Do not delete or modify the `package-lock.json` file. The `/node_modules` directory is where all package code is stored and there's rarely a need to examine or modify `/node_modules` as long as one correctly adheres to NPM protocol.

Packages:
- [axios](https://github.com/axios/axios): Promise based HTTP client for the browser and Node.js
- [bluebird](http://bluebirdjs.com/docs/getting-started.html): A Promise generator that improves on native ECMAScript2015 promises
- [body-parser](https://github.com/expressjs/body-parser#readme): HTTP request body parsing interface
- [cheerio](https://github.com/cheeriojs/cheerio#readme): Implementation of jQuery designed for the server
- [cookie-parser](https://github.com/expressjs/cookie-parser): HTTP request cookie parsing interface
- [cors](https://github.com/expressjs/cors#readme): Node.js [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) middleware
- [debug](https://github.com/visionmedia/debug#readme): Debugging utility
- [dotenv](https://github.com/motdotla/dotenv#readme): Module that loads environment variables from a .env file into process.env
- [express](http://expressjs.com/en/4x/api.html): Web framework for Node.js
- [morgan](https://github.com/expressjs/morgan#readme): HTTP request logger middleware for Node.js
- [react](https://reactjs.org/): JavaScript library for building user interfaces
- [react-dom](https://reactjs.org/docs/react-dom.html): DOM interface for React
- [react-linkify](https://tasti.github.io/react-linkify/): React component to parse links in anchor tags
- [react-scroll](https://github.com/fisshy/react-scroll): React component for animating vertical scrolling
- [serve-favicon](https://github.com/expressjs/serve-favicon#readme): Node.js middleware for serving a favicon
- [vcap_services](https://github.com/germanattanasio/vcap-services#readme): Parse and return service credentials from VCAP_SERVICES environment variable that Bluemix provides
- [watson-developer-cloud](https://github.com/watson-developer-cloud/node-sdk#readme): Node.js client library to use the Watson APIs
- [babel (all)](https://babeljs.io/docs/en/): A toolchain mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments
- [webpack (all)](https://webpack.js.org/concepts/): A static module bundler for modern JavaScript applications

***

Created by Lucas McComb - lemccomb@us.ibm.com
