import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB8jQlIJ1rYySPq9PVwsoFapoXRtpyPeag',
  databaseURL: 'https://caption-game-9081a.firebaseio.com',
  projectId: 'caption-game-9081a',
  storageBucket: 'caption-game-9081a.appspot.com',
  appId: '1:529864157432:ios:91d182e6b213465e17330d',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
