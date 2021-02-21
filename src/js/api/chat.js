import db from "../db/firestore";

export const fetchChats = () =>
  db
    .collection("Chats")
    .get()
    .then((snapshot) =>
      snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    );
