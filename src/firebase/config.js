import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB8jQlIJ1rYySPq9PVwsoFapoXRtpyPeag',
  //   authDomain: 'your-auth-domain-b1234.firebaseapp.com',
  databaseURL: 'https://caption-game-9081a.firebaseio.com',
  projectId: 'caption-game-9081a',
  storageBucket: 'caption-game-9081a.appspot.com',
  //   messagingSenderId: "12345-insert-yourse",
  appId: '1:529864157432:ios:91d182e6b213465e17330d',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
