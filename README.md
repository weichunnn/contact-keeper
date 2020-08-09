# Full Stack Contact-Keeper

The app was built to enable users to track their contacts. Users have basic CRUD functionalities in the app. The app implements ReactJS as the frontend, used React Hooks and Context API to manage the Global State, and implements ExpressJS and MongoDb for the backend.

Link to app: [Contact-Keeper](https://fast-temple-72087.herokuapp.com/login)

## Technologies Used
* ReactJS
* ExpressJS
* Mongoose
* NodeJS
* JsonWebToken
* Bcryptjs
* React Hooks
* Context API
* Axios
* dotenv
* Colors
* HTML
* CSS


## Usage

Install dependencies

```bash
npm install 
cd client
npm install
```

### Mongo connection setup

Edit your /config/config.env file to include personalised configs:
* mongoURI = ...
* jwtSecret = ... 
* NODE_ENV = production

### Run Server

```bash
npm run dev     # Express & React :3000 & :5000
npm run server  # Express API Only :5000
npm run client  # React Client Only :3000
```
