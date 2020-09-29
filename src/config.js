export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "us-west-2",
      BUCKET: "notes-app-uploads-iteration"
    },
    apiGateway: {
      REGION: "us-west-2",
      URL: "https://ofcbloiii9.execute-api.us-west-2.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-west-2",
      USER_POOL_ID: "us-west-2_xhQBfHkZ8",
      APP_CLIENT_ID: "g29ghmqonkkngp2tn4rmhk8nn",
      IDENTITY_POOL_ID: "us-west-2:814cf486-6998-4ff9-a4fe-28ca28cf63e2"
    }
  };