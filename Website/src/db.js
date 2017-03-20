import AWS from 'aws-sdk';
let config = {
	"apiVersion": "2012-08-10",
	"accessKeyId": "abcde",
	"secretAccessKey": "abcde",
	"region":"us-west-2",
	"endpoint": "http://localhost:8000"
};

let dynamodb = new AWS.DynamoDB(config);
