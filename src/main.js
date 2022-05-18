import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import store from './store'
import router from "./router";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const app =createApp(App);

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDB5EYJBxremrw1FbINzZ0FuQvwHgtruyU",
  authDomain: "imageuploader-6a1bb.firebaseapp.com",
  projectId: "imageuploader-6a1bb",
  storageBucket: "imageuploader-6a1bb.appspot.com",
  messagingSenderId: "226095645528",
  appId: "1:226095645528:web:72a32beafc5a81e9295b2d"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage(firebaseApp);

app.use(store);
app.use(router);
app.mount('#app');

