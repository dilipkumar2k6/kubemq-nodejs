const kubemq = require("kubemq-nodejs");

(async () => {
  let channelName = "queue";
  let kubemqAdd = "localhost:50000";
  let message_queue = new kubemq.MessageQueue(
    kubemqAdd,
    channelName,
    "clientId"
  );
  const message1 = { hello: "I am test message" };
  let bytes = kubemq.stringToByte("TestBody");

  let tags = [];
  tags["key3"] = "value3";
  tags["key2"] = "value2";

  let message = new kubemq.Message(JSON.stringify(message1), bytes, tags);

  const messageQueueResponse = await message_queue.sendQueueMessage(message);
  console.log(
    `finished sending message ${message} messages response ${messageQueueResponse}`
  );
})();
