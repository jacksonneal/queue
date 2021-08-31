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

router.post("/send", async (req, res) => {
  process.env.AWS_ACCESS_KEY_ID = "a";
  process.env.AWS_SECRET_ACCESS_KEY =
    "b";
  const params = {
    MessageBody: req.body.msg,
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
  process.env.AWS_ACCESS_KEY_ID = "a";
  process.env.AWS_SECRET_ACCESS_KEY =
    "b";
  const params = {
    QueueUrl: "https://sqs.us-east-2.amazonaws.com/025627292183/queue",
    MaxNumberOfMessages: 1,
  };
  const command = new ReceiveMessageCommand(params);
  const client = new SQSClient({
    region: "us-east-2",
  });
  try {
    const data = await client.send(command);
    res.send({
      msgs: data.Messages,
    });
    console.log(data);
  } catch (error) {
    console.log(error);
    res.send(error);
  } finally {
    // res.send("success");
  }
});

router.post("/delete", async (req, res) => {
  process.env.AWS_ACCESS_KEY_ID = "a";
  process.env.AWS_SECRET_ACCESS_KEY =
    "b";
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
  } catch (error) {
    console.log(error);
    res.send(error);
  } finally {
    // res.send("success");
  }
});

module.exports = router;
