import '../styles/globals.css';

import { useEffect } from 'react';

import { useAuthState } from 'react-firebase-hooks/auth';

import Login from '../components/Login';
import {
  auth,
  db,
} from '../firebase';

function MyApp({ Component, pageProps }) {
  const[user]=useAuthState(auth);


 useEffect(() => {
		if (user) {
			db.collection('users').doc(user.uid).set(
				{
					email: user.email,
					
				},
				{ merge: true }
			);
		}
	}, [user]);
  
  if(!user) return <Login/>;
  return <Component {...pageProps} />

}

export default MyApp
