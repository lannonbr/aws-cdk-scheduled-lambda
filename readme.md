# AWS CDK Scheduled Lambda

[![NPM Link](https://img.shields.io/npm/v/cdk-github-stats-construct)](https://www.npmjs.com/package/cdk-scheduled-lambda)

An AWS CDK Construct that wraps a Lambda function alongside an AWS Events Rule that is set up on a schedule.

## Installation

```shell
npm install cdk-scheduled-lambda
```

## Example:

```js
this.newFn = new ScheduledLambda(this, "new-fn", {
  lambdaProps: {
    // @aws-cdk/aws-lambda Function props
    runtime: Runtime.NODEJS_14_X,
    timeout: Duration.seconds(20),
    // ...
  },
  schedule: "cron(0 * * * ? *)", // Run this script once an hour
});
```

To access the underlying event rule or Lambda, access the `schedule` or `fn` props
