const express = require("express");
const router = express.Router();
const {
  SQSClient,
  SendMessageCommand,
  ReceiveMessageCommand,
  DeleteMessageCommand,
} = require("@aws-sdk/client-sqs");

router.get("/hello", (req, res) => {
  res.send("Hello from queue server.");
});

router.get("/send", async (req, res) => {
  process.env.AWS_ACCESS_KEY_ID = "AKIAQL54BOILXR4O4QP6";
  process.env.AWS_SECRET_ACCESS_KEY =
    "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";
  const params = {
    MessageBody: req.body,
    QueueUrl: "https://sqs.us-east-2.amazonaws.com/025627292183/queue",
  };
  const command = new SendMessageCommand(params);
  const client = new SQSClient({
    region: "us-east-2",
  });
  try {
    const data = await client.send(command);
    console.log(data);
  } catch (error) {
    console.log(error);
    res.send(error);
  } finally {
    res.send("success");
  }
});

router.get("/receive", async (req, res) => {
  process.env.AWS_ACCESS_KEY_ID = "AKIAQL54BOILXR4O4QP6";
  process.env.AWS_SECRET_ACCESS_KEY =
    "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";
  const params = {
    QueueUrl: "https://sqs.us-east-2.amazonaws.com/025627292183/queue",
  };
  console.log(process.env);
  const command = new ReceiveMessageCommand(params);
  const client = new SQSClient({
    region: "us-east-2",
  });
  try {
    const data = await client.send(command);
    res.send(data);
    console.log(data);
  } catch (error) {
    console.log(error);
    res.send(error);
  } finally {
    res.send("success");
  }
});

router.get("/delete", async (req, res) => {
  process.env.AWS_ACCESS_KEY_ID = "AKIAQL54BOILXR4O4QP6";
  process.env.AWS_SECRET_ACCESS_KEY =
    "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";
  console.log(req.body.msg);
  const params = {
    ReceiptHandle: req.body.msg,
    QueueUrl: "https://sqs.us-east-2.amazonaws.com/025627292183/queue",
  };
  const command = new DeleteMessageCommand(params);
  const client = new SQSClient({
    region: "us-east-2",
  });
  try {
    const data = await client.send(command);
    res.send(data);
    console.log(data);
  } catch (error) {
    console.log(error);
    res.send(error);
  } finally {
    res.send("success");
  }
});

module.exports = router;