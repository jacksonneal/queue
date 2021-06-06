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
      @click="receiveFromQueue()"
      type="button"
      label="dequeue"
      style="width: 20rem"
      class="p-m-1 p-button-raised p-button-info p-button-outlined p-button-lg"
    />
    <Dialog v-model:visible="isQViz">
      <template #header>
        <h3>adding to queue</h3>
      </template>
      <span class="p-m-1 p-float-label">
        <InputText id="message" type="text" v-model="message" />
        <label for="message">message</label>
      </span>
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
      {{ receivedMessage.Body }}
      <template #footer>
        <Button
          @click="toggleDequeueDialogue()"
          label="reject"
          icon="pi pi-times"
          class="p-button-text"
        />
        <Button
          @click="removeFromQueue()"
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
  sendMessage,
  receiveMessage,
  deleteMessage,
} from "../services/queueService";

export default {
  setup() {
    const message = ref("");
    const isQViz = ref(false);
    const isDqViz = ref(false);
    const receivedMessage: any = ref("No message received yet.");

    function toggleQueueDialogue(): void {
      isQViz.value = !isQViz.value;
    }

    function toggleDequeueDialogue(): void {
      isDqViz.value = !isDqViz.value;
    }

    async function addToQueue(): Promise<void> {
      sendMessage(message.value);
      toggleQueueDialogue();
    }

    async function receiveFromQueue(): Promise<void> {
      console.log("here");
      receivedMessage.value = await receiveMessage();
      toggleDequeueDialogue();
    }

    async function removeFromQueue(): Promise<void> {
      deleteMessage(receivedMessage.value.ReceiptHandle);
      toggleDequeueDialogue();
    }

    return {
      message,
      receivedMessage,
      isQViz,
      isDqViz,
      toggleQueueDialogue,
      toggleDequeueDialogue,
      addToQueue,
      receiveFromQueue,
      removeFromQueue,
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
