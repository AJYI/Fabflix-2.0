# Fabflix-2.0

test

## For Backend:

### Required Software for the backend:

- [NodeJS](https://nodejs.org/en/download/)
- [MySQL](https://dev.mysql.com/downloads/windows/installer/8.0.html)

### Setting up the database:

1. Import the SQL scripts from 'backend/database/SQL_scripts/' into MySQL
2. First run the 'movie_database_tables.sql' file.
3. Then run 'movie_database_data.sql' file.

### Getting the backend running:

1. Run 'npm install'.
2. Set up the '.env' file by creating it within the backend folder.
3. Inside the '.env' file add:
   - PORT=3002
   - MYSQL_DATABASE=moviedb
   - MYSQL_ROOT=root
   - MYSQL_HOST=127.0.0.1
   - MYSQL_PASSWORD=ThePasswordYouUsedDuringSetUp

### To check whether the backend has been set-up properly:

1. Run 'npm run dev'
2. If you see 'ORM Connection Established!' then the backend has been setup properly.
3. If you see an error re-read the steps and try again.

#### Features to add in the feature

1. Dockerize the database
2. Dockerize the backend
3. Add authentication
4. Add cookies/states

## Sources:

https://www.youtube.com/watch?v=344Zv2m9TYI&t=2130s&ab_channel=TheFullStackJunkie
https://sequelize.org/docs/v6/core-concepts/model-querying-basics/
https://sequelize.org/docs/v6/core-concepts/assocs/
https://devdotcode.com/many-to-many-association-in-mysql-database-using-sequelize-async-await-with-node-js/
https://stackoverflow.com/questions/33232147/sequelize-query-returns-same-result-twice
