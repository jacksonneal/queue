const express = require("express");
const router = express.Router();

router.get("/hello", (req, res) => {
  res.send("Hello from queue server.");
});

// app.get("/send", (req, res) => {
//   process.env.AWS_ACCESS_KEY_ID = "AKIAQL54BOILXR4O4QP6";
//   process.env.AWS_SECRET_ACCESS_KEY =
//     "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";
//   const params = {
//     MessageBody: "HI there",
//     QueueUrl: "https://sqs.us-east-2.amazonaws.com/025627292183/queue",
//   };
//   console.log(process.env);
//   const command = new SendMessageCommand(params);
//   const client = new SQSClient({
//     region: "us-east-2",
//     credentialDefaultProvider: fromEnv,
//   });
//   try {
//     const data = await client.send(command);
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     res.send("tried");
//   }
// });

module.exports = router;
