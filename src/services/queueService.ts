import axios from "axios";

const sendMessage = (msg: string) => {};

const receiveMessage = async (): Promise<string> => {
  try {
    const response = await axios.get("/api/receive");
    if (response.data.msgs.length > 0) {
      return response.data.msgs[0];
    }
  } catch (error) {
    console.error(error);
  }
  return "No Message";
};

const deleteMessage = async (receiptHandle: string) => {
  try {
    const response = await axios.post("/api/delete", { msg: receiptHandle });
  } catch (error) {
    console.error(error);
  }
  return "No Message";
};

export { sendMessage, receiveMessage, deleteMessage };
