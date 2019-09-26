# About this repo

This repo contains my personal code to the Universal React with Next.js - The Ultimate Guide course on Udemy.

# About Next.js

This repo is about Next.js a server-side rendering React.js framework. The idea is to make rendering on the server side instead of client-side, which is the usual approach.

# Creating our first app with Nextjs

1. Create a folder and inside of it create a page folder.
2. npm init -y
3. install next react and react-dom with npm or yarn
4. Set a script in package.json with "next"
5. Run your command with the next value

Your package.json will endup like this:

```json
{
  "name": "next-portifolio",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "next"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "next": "^9.0.6",
    "react": "^16.9.0",
    "react-dom": "^16.9.0"
  }
}
```

This will create a new next project with a 404 error page.

Creating an index file and a functional component will endup serving it as the '/' uri.

### Set different port for developement server

If you desire to set a different port for the development server, just set the command -p PORT_NUMBER after the next command:

```json
{
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "next -p 4000"
  }
}
```
