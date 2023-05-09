[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
[![forthebadge](./readme-assets/made-with-react.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-css.svg)](https://forthebadge.com)
[![forthebadge](./readme-assets/uses-redux.svg)](https://forthebadge.com)

<br/>

<div id="header" align="left">
  <img src="./argentbank-frontend/src/assets/argentBankLogo.png" width="200"/>
</div>

# ARGENT BANK :

- PHASE 1 :

  Implementation of an user Authentification system for the bank ARGENT BANK.

  The app can :

  - Register a new user
  - Login a registered user
  - Display the profile page of a logged user
  - Update profile data firstname and lastname for a logged user
  - Display the transactions page for a logged user
  - Disconnect a logged user

- PHASE 2 :

  A [swagger.yml](./swagger.yml) document have been written to document the backend endpoints and models datas needed to implement account and transactions api requests.

## TECHNOLOGIES

- JS
- CSS with Sass
- React
- Redux toolkit
- MongoDB

## PROJECT'S INSTALLATION

### \* Prerequites

- Github account
- [Node.js v12](https://nodejs.org/en/) (IMPORTANT)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)

### \* STEP 1 : RUN API

- Fork this repository : https://github.com/dahisland/argent-bank to your Github account.
- Clone it to the local folder's project of your choice in your computer.
- Open the folder in your favorite framework editor.
- Use the command `cd ArgentBank-backend` to change your working directory to the backend folder.
- Use the `npm install` command to install dependencies.

To run the api locally :

- `npm run dev:server`
- `npm run populate-db`

Your server should now be running at http://localhost:3001 and you will now have two users in your MongoDB database :

##### Tony Stark

- First Name: `Tony`
- Last Name: `Stark`
- Email: `tony@stark.com`
- Password: `password123`

##### Steve Rogers

- First Name: `Steve`,
- Last Name: `Rogers`,
- Email: `steve@rogers.com`,
- Password: `password456`

#### API Infos :

To learn more about how the API works, once you have started your local environment, you can visit: http://localhost:3001/api-docs

Static HTML and CSS has been created for most of the site and is located in :
[designs](./ArgentBank-backend/designs).

For some of the dynamic features, like toggling user editing, there is a mock-up for it in :
[wireframe edit user name](./ArgentBank-backend/designs/wireframes/edit-user-name.png).

And for the API model that you will be proposing for transactitons, the wireframe can be found in :
[wireframe transactions](./ArgentBank-backend/designs/wireframes/transactions.png).

### \* STEP 2 : RUN FRONTEND

- Use the command `cd argentbank-frontend` to change your working directory to the frontend folder.
- Use the `npm install` command to install dependencies.
- Use the `npm start` command to run the project localy on your browser.

IMPORTANT: To use API data in the front project instead of mock data, you have to turn ["serverIsOn" (line 8)](./argentbank-frontend/src/AppProvider.js) context value to "true".

Local url by default is : http://localhost:3000/ .

You can consult the jsdoc by using live-server on the [jsdoc index.html](./argentbank-frontend/jsdoc/index.html) file.

## \* GIT PAGES

A version using mock data is available [here](https://dahisland.github.io/argent-bank/).
