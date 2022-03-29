import * as aws from 'aws-sdk'
// import sha256 from 'crypto-js/sha256'
// var sha256 = require("crypto-js");

aws.config.loadFromPath('./config.json')

const docClient = new aws.DynamoDB.DocumentClient();

export const handle = async (event: any, context: any) => {
    const reqBody = JSON.parse(event.body as string);

    if (!reqBody.username || !reqBody.email || !reqBody.password) {
        return {
            statusCode: 400,
            body: "invalid input"
        }
    }

    const inputBody = {
        username : reqBody.username,
        email : reqBody.email,
        password : require('crypto')
        .createHash('sha256')
        .update(reqBody.password)
        .digest('hex')
    }
 
    let params = {
        TableName : 'CryptoPortfolioTracker-user-eucarizan',

        Item: inputBody
    };

    try {
        await docClient.put(params).promise();
    } catch (err) {
        return err;
    }


    return {
        statusCode: 200,
        headers: {
            "Content-Type": "*/*",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "*"
        },
        body: "Hello!"
    }
};

