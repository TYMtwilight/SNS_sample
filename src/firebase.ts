// インポート対象のFirebaseApp,Auth,Firestore,FirebaseStorageはTypeScriptの型です
import { FirebaseApp, initializeApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";
import { Firestore, getFirestore } from "firebase/firestore";
import { FirebaseStorage, getStorage } from "firebase/storage";

// Firebaseの設定は機密情報のため、環境変数のenvファイルを別途用意し、そこに記述します。
// 「process.env.*」と記述することで、envファイルを参照するようにしています。
const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

// NOTE >> Firebaseの初期化を行います。
const app: FirebaseApp = initializeApp(firebaseConfig);
const auth: Auth = getAuth();
const db: Firestore = getFirestore(app);
const storage: FirebaseStorage = getStorage();
export default auth;
