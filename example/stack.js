const { Runtime } = require("@aws-cdk/aws-lambda");
const { Stack, Duration } = require("@aws-cdk/core");
const { ScheduledLambda } = require("../");

class MyStack extends Stack {
  constructor(app, id) {
    super(app, id);

    this.newFn = new ScheduledLambda(this, "new-fn", {
      lambdaProps: {
        // @aws-cdk/aws-lambda Function props
        runtime: Runtime.NODEJS_14_X,
        timeout: Duration.seconds(20),
        // ...
      },
      schedule: "cron(0 * * * ? *)", // Run this script once an hour
    });
  }
}

const app = new cdk.App();
new MyStack(app, "my-stack");
app.synth();
