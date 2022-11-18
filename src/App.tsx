import {
  signInWithEmailAndPassword,
  User,
  UserCredential,
} from "firebase/auth";
import React from "react";
import auth from "./firebase";

const App = () => {
  signInWithEmailAndPassword(auth, "test_mail@gmail.com", "testuser").then(
    (credential: UserCredential) => {
      const user: User = credential.user;
      if (user) {
        console.log("アプリにログインしました");
      }
    }
  );
  return <div className="App">App</div>;
};

export default App;
