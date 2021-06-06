<template>
  <div class="card">
    <Button
      @click="toggleQueueDialogue()"
      type="button"
      label="enqueue"
      style="width: 20rem"
      class="p-m-1 p-button-raised p-button-info p-button-outlined p-button-lg"
    />
    <Button
      @click="toggleDequeueDialogue()"
      type="button"
      label="dequeue"
      style="width: 20rem"
      class="p-m-1 p-button-raised p-button-info p-button-outlined p-button-lg"
    />
    <Dialog v-model:visible="isQViz">
      <template #header>
        <h3>adding to queue</h3>
      </template>
      Feature not yet available.
      <template #footer>
        <Button
          @click="toggleQueueDialogue()"
          label="cancel"
          icon="pi pi-times"
          class="p-button-text"
        />
        <Button
          @click="addToQueue()"
          label="queue"
          icon="pi pi-check"
          autofocus
        />
      </template>
    </Dialog>
    <Dialog v-model:visible="isDqViz">
      <template #header>
        <h3>received from queue</h3>
      </template>
      Feature not yet available.
      <template #footer>
        <Button
          @click="toggleDequeueDialogue()"
          label="reject"
          icon="pi pi-times"
          class="p-button-text"
        />
        <Button
          @click="toggleDequeueDialogue()"
          label="accept"
          icon="pi pi-check"
          autofocus
        />
      </template>
    </Dialog>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import {
  SQSClient,
  SendMessageCommand,
  SendMessageCommandInput,
} from "@aws-sdk/client-sqs";
import { fromEnv } from "@aws-sdk/credential-provider-env";

export default {
  setup() {
    const isQViz = ref(false);
    const isDqViz = ref(false);

    function toggleQueueDialogue(): void {
      isQViz.value = !isQViz.value;
    }

    function toggleDequeueDialogue(): void {
      isDqViz.value = !isDqViz.value;
    }

    async function addToQueue(): Promise<void> {
      process.env.AWS_ACCESS_KEY_ID = "AKIAQL54BOILXR4O4QP6";
      process.env.AWS_SECRET_ACCESS_KEY =
        "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";
      const params: SendMessageCommandInput = {
        MessageBody: "HI there",
        QueueUrl: "https://sqs.us-east-2.amazonaws.com/025627292183/queue",
      };
      const command = new SendMessageCommand(params);
      const client = new SQSClient({
        region: "us-east-2",
        credentialDefaultProvider: fromEnv,
      });
      try {
        const data = await client.send(command);
        console.log(data);
      } catch (error) {
        console.log(error);
      } finally {
        toggleQueueDialogue();
      }
    }

    return {
      isQViz,
      isDqViz,
      toggleQueueDialogue,
      toggleDequeueDialogue,
      addToQueue,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
