/* -OLD DEV CONFIG
export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY: "pk_test_51HSmN6FEyRvMHF5hQGg5JpRpdHhvHadHuBsEXSiiheMM7gnM0PW66Q5Z4epO5AgJritbjVKZ2wvqgIYQwDLY5o4R00m8hgXNp4",
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
*/

const dev = {
  STRIPE_KEY: "pk_test_51HSmN6FEyRvMHF5hQGg5JpRpdHhvHadHuBsEXSiiheMM7gnM0PW66Q5Z4epO5AgJritbjVKZ2wvqgIYQwDLY5o4R00m8hgXNp4",
  s3: {
    REGION: "us-west-2",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-ospqdzat1b98"
  },
  apiGateway: {
    REGION: "us-west-2",
    URL: "https://rf2xbnh192.execute-api.us-west-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-west-2",
    USER_POOL_ID: "us-west-2_XGM0qTTAu",
    APP_CLIENT_ID: "7ngklvahpd2scbp65c6il67muk",
    IDENTITY_POOL_ID: "us-west-2:6a91d6e3-eea2-4aa4-810e-1fe6d982ce78"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_51HSmN6FEyRvMHF5hQGg5JpRpdHhvHadHuBsEXSiiheMM7gnM0PW66Q5Z4epO5AgJritbjVKZ2wvqgIYQwDLY5o4R00m8hgXNp4",
  s3: {
    REGION: "us-west-2",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-ospqdzat1b98"
  },
  apiGateway: {
    REGION: "us-west-2",
    URL: "YOUR_PROD_API_GATEWAY_URL"
  },
  cognito: {
    REGION: "us-west-2",
    USER_POOL_ID: "YOUR_PROD_COGNITO_USER_POOL_ID",
    APP_CLIENT_ID: "YOUR_PROD_COGNITO_APP_CLIENT_ID",
    IDENTITY_POOL_ID: "YOUR_PROD_IDENTITY_POOL_ID"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};