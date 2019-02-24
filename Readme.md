# Project Setup

## intall dependencies
```
cd sequelize-example
npm install
```

## setup database
```
sudo -u postgres psql
```

```
CREATE DATABASE sequelize_example;
CREATE USER sequelize WITH ENCRYPTED PASSWORD 'sequelize';
GRANT ALL PRIVILEGES ON DATABASE sequelize_example TO sequelize;
```

## install sequelize-cli globally
```
npm install -g sequelize-cli
```

## run migrations
```
sequelize db:migrate
```


## start the project

```
npm start
```
