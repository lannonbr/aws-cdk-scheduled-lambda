const { Construct } = require("@aws-cdk/core");
const lambda = require("@aws-cdk/aws-lambda");
const events = require("@aws-cdk/aws-events");
const targets = require("@aws-cdk/aws-events-targets");

class ScheduledLambda extends Construct {
  /**
   * A scheduled Lambda function
   * @param {Construct} scope
   * @param {String} id
   * @param {Object} opts - options
   * @param {lambda.FunctionProps} opts.lambdaProps - AWS Lambda Function props
   * @param {String} opts.schedule - AWS Events Rule Schedule expression
   */
  constructor(scope, id, opts) {
    super(scope, id);

    this.fn = new lambda.Function(this, `${id}-fn`, {
      ...opts.lambdaProps,
    });

    this.schedule = new events.Rule(this, "${id}-schedule", {
      schedule: events.Schedule.expression(opts.schedule),
    });

    this.schedule.addTarget(new targets.LambdaFunction(this.fn));
  }
}

module.exports = { ScheduledLambda };
