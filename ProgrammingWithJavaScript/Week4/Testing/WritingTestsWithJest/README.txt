Flow of testing with JEST:

1) MAINJSSCRIPT.js generated with some methods and exported

2) Check if npm,node and jest are downloaded in local parents path`s terminal
    >node --version 
    >npm --version
    >jest --version

3) If Jest is not downloaded, setup jest by using npm as following

    3.1) First create your package.json by using npm
    >npm init -y

    3.2) Download jest locally
    >npm install --save-dev jest

    node_modules will be downloaded in the same folder.
    package.json will be updated.

    3.3) Change script section`s test prop as following from package.json
    
    "scripts": {
        "test" : "jest"
    },

4) Run test for the folder
    >npm run test

5) Create test file for target js file.
    Create name file such as MAINJSSCRIPT.test.js

6) Write testing codes as in the addFive.test.js file example.

7) Run test
    npm run test