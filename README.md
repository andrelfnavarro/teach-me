# Teach.Me

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm run dev` 

And you'll run both the localhost:3000 - front end - and localhost:5000 - back end.

## Backend routes
There are 3 backend routes on this app
 - /api/health: health check, returns a simple json saying { 'status': 'health check ok' } to see if the server is working
 - /api/members: allows you to find, create and delete a member from the database, api/members/all finds all the members
 - /api/absences: it is a simple get to find the absences crossed with the members data, which allows to retrieve the user names

