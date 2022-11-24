
const config = {
    apiKey: "AIzaSyABFvMI0hnUvzy1uWkSFrnEzVBChVSGYKQ",
    authDomain: "sqli-forum-51bf7.firebaseapp.com",
    projectId: "sqli-forum-51bf7",
    storageBucket: "sqli-forum-51bf7.appspot.com",
    messagingSenderId: "103078905019",
    appId: "1:103078905019:web:cf284b4a524955d3ad959e",
    measurementId: "G-81RNDXHSM5"
};

export default config
// Initialize Firebase

// const firebaseApp = firebase.initializeApp(config)

// const db = firebaseApp.firestore();
// export const usersCollection = db.collection('users');

// export const createUser = user => usersCollection.add(user);

// export const getUser = async id => {
//     const user = await usersCollection.doc(id).get();
//     return user.exist() ? user.data() : null;
// }

// export const updateUser = async (id, user) => {
//     return usersCollection.doc(id).update(user);
// }

// export const useLoadUsers = () => {
//   const users = ref([])
//   const close = usersCollection.onSnapshot(snapshot => {
//     users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
//   })
//   onUnmounted(close)
//   return users
// }

