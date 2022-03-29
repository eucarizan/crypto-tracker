# Task CPT30: Create a Service to handle user registration
Previously we created a static landing page with a simple registration form. In this task we want to create a backend service that accepts the form data from the registration form and saves it into the Users table in the database. This data will be used later to allow users to login and to display user information in other places on the website.

## **Wireframes & Media**
![Overview Video](CPT3VideoOverviewOne.mp4)


## **Acceptance Criteria**
Given a new potential customer who wants to register

When the app calls the register endpoint for this user with the registration data

### **AC1:** Then the endpoint should save the data to the database table
The endpoint will serve HTTP POST requests and should accept JSON data as input. The payload for POST requests will be of the following structure:
```json
{
"username": "JohnW",
"email": "johnw@skillreactor.io",
"password": "MyPassword"
}
```
This payload will be available to your handler in the `event.body` parameter. The payload will be a JSON string and you will need to parse it into Javascript Object.

You will need to store this data in the users table, which will be an AWS DynamoDB table and the table name will be `CryptoPortfolioTracker-user-eucarizan`. To learn more about dynamodb please see this [link](https://aws.amazon.com/dynamodb/).

You will need to use aws-sdk to work with the DynamoDB table. [This page](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GettingStarted.NodeJs.03.html) provides examples of how to work with DynamoDB using aws-sdk. Note that examples are in plain Javascript and since our code is in typescript you should not just copy and paste it but implement it in Typescript yourself.


### **AC2:** And if the request is not valid it throws a 400 error
The endpoint should throw a HTTP 400 error in case of the following cases:
* No request data exists
* Any of the fields are missing from the data or are empty. See data structure in previous Acceptance Criteria.
The HTTP error code is defined by the `statusCode` property of the return object.

### **AC3:** And the password should be encrypted with SHA256 before saving to the database
Password should be encrypted using SHA256 algorithm before saving it to the database. Encrypting passwords is necessary to ensure user information stays protected even if the database gets hacked.

The encrypted password needs to be stored in hex format.

NodeJs provides has a built-in [crypto](https://nodejs.org/en/knowledge/cryptography/how-to-use-crypto-module/) module that can help you encrypt the data.

### **AC4:** And the service should return CORS headers in the response
[CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) is a mechanism to allow request from cross domains requests to work in ajax requests. It needs to be enabled on the backend so that browser can communicate with it.

To enable Cors you will have to return the headers below, via the headers property of the response object
```json
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*"
```


## Task Workflow
The steps below will need to be repeated for every task

### 1. Check out the task Branch
SkillReactor platform will create a branch for the component you are working on when you initiate the task. Once resources are initialized you can see the branch name in the Details Tab. You can visit [this link](https://www.atlassian.com/git/tutorials/using-branches) to learn more about git branches.

To checkout the branch for this task, follow the steps below:
1.  Copy the branch name from details tab
2.  Navigate to your working directory (`crypto_tracker`)
3.  Run `git fetch`
4.  Run `git checkout COPIED_BRANCH_NAME`

___Note:___ _You will have to do this whenever you start a new task that has a different branch to what you are currently on_

### 2. Implement the Requirements
You can now start implementing the requirements as defined by the Acceptance Criteria on this page. Some tasks can be completed from the terminal, but for most tasks you will want to open the working directory in your IDE.

Acceptance Criteria for each requirement can be found on this page in the Task overview. To view the specific details about a given Acceptance Criteria click into it and you will see a popup.
### 3. Push your code to the Remote Repository
Once you have implemented the solution and would like to submit it for verification, you will need to push it to the remote repository as per steps below.

1. Navigate to your working directory (`crypto_tracker`)
2.  Run `git add -A`. This will add all the files for [staging](https://www.atlassian.com/git/tutorials/saving-changes)
3.  Run `git commit -m "MESSAGE"`. This will save all staged files to your local repository. (MESSAGE could be any text for e.g. "Implementation of AC1")
4.  Run `git push`. This will upload all the changes in your local repository to the remote repository.

### 4. Submit your solution
1. You can now run `node skillreactor/submit.js` to submit your solution for verification.
2.  Once verification is complete, you can see the results on the platform. Every AC will indicate whether it passed or failed. If an AC failed, you can click on it to get more details.
3.  If all the requirements are met you will be able to move to the next task.

## Further Information
The backend service will be hosted on [AWS Lambda](https://aws.amazon.com/lambda/). AWS Lambda is a serverless computing environment.

AWS Lambda simply requires you to implement a function handler. When a request is received then AWS calls this handler and passes in the request details as parameters.

The code you will find in the branch for this task will already contain a boilerplate implementation of the function handler required for AWS Lambda. You will implement your code within this handler.

The code in the branch is also configured to handle HTTP GET and POST requests. You can use API testing tools such as [Postman](https://www.postman.com/) to test your code

