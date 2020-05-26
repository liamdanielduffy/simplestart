import { useEffect, useState } from 'react';
import { isOnServer, environmentVariables } from 'services/shared/Environment'
import * as firebase from "firebase/app";
import "firebase/auth";

interface FirebaseState {
    initialized: boolean;
    user?: firebase.User
}

export function useFirebase() {

    const [firebaseState, setFirebaseState] = useState<FirebaseState>({ initialized: false, user: null });

    useEffect(() => {
        if (!isOnServer()) {
            if(firebase.apps.length === 0) {
                firebase.initializeApp({
                    apiKey: environmentVariables().FIREBASE_API_KEY,
                    authDomain: environmentVariables().FIREBASE_AUTH_DOMAIN,
                    databaseURL: environmentVariables().FIREBASE_DATABASE_URL,
                    projectId: environmentVariables().FIREBASE_PROJECT_ID,
                    storageBucket: environmentVariables().FIREBASE_STORAGE_BUCKET,
                    messagingSenderId: environmentVariables().FIREBASE_MESSAGING_SENDER_ID,
                    appId: environmentVariables().FIREBASE_APP_ID
                });
            }
            firebase.auth().onAuthStateChanged((user) => setFirebaseState({ initialized: true, user }));
        }
    }, [isOnServer()]);

    return firebaseState;
}