import db from "../db/firestore";
import firebase from "firebase/app";

export const fetchChats = () =>
  db
    .collection("Chats")
    .get()
    .then((snapshot) =>
      snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    );

export const createChat = (chat) =>
  db
    .collection("Chats")
    .add(chat)
    .then((docRef) => docRef.id);

export const joinChat = async (userId, chatId) => {
  const userRef = db.doc(`profiles/${userId}`);
  const chatRef = db.doc(`Chats/${chatId}`);

  await userRef.update({
    joinedChats: firebase.firestore.FieldValue.arrayUnion(chatRef),
  });

  await chatRef.update({
    joinedUsers: firebase.firestore.FieldValue.arrayUnion(userRef),
  });
};

export const subscribeToChat = (chatId, onSubscribe) =>
  db
    .collection("Chats")
    .doc(chatId)
    .onSnapshot((snapshot) => {
      const chat = { id: snapshot.id, ...snapshot.data() };
      onSubscribe(chat);
    });

export const subscribeToProfile = (uid, onSubscribe) =>
  db
    .collection("profiles")
    .doc(uid)
    .onSnapshot((snapshot) => onSubscribe(snapshot.data()));
