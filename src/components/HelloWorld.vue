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
          @click="toggleQueueDialogue()"
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

    return { isQViz, isDqViz, toggleQueueDialogue, toggleDequeueDialogue };
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
