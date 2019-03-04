# SuperMarket-FoodInfo
It is a MERN based application, through which a person can check the information of the food currently available in that suprtmarket like Fat, Kcal, Protien, etc. Live preview of the project can be seen at https://supermarket-foodinfo.herokuapp.com/.

<p align="center">
  <img src="https://github.com/AwesomeChap/supermarket/blob/master/public/images/demo.png" width="800" hspace="20">
</p>

## Available Scripts

In the project directory, you can run:

### `npm run build:dev`

Builds and Hot reloads the app in the development mode.<br>
Open [http://localhost:1234](http://localhost:1234) to view it in the browser.

### `npm run build:prod`

Builds the app in the production mode.<br>

### `npm run start:dev`

Starts development express server.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm start`

Starts the node server in production environment.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Usage

* In order to run this project, You are required to have some seed data which is to be displayed. Fo that you need to create your account [here](https://www.mongodb.com/cloud/atlas). After creattion of the account you need to genearate MONGO_URI in order to connect to database

* Create nodemon.json at root directory for development server (to work with nodemon)

```javascript
{
  "env":{
    "MONGO_ATLAS_PW" : "<YOUR_MONGO_URI_GOES_HERE>"
  }
}
```

* Create .env at root directory to work with node 

```javascript
  NODE_ENV=development
  MONGO_ATLAS_PW=<YOUR_MONGO_URI_GOES_HERE>
```

* now you just need to do `npm install`
