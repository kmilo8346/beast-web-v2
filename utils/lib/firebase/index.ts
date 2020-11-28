import firebase from 'firebase';
import env_var from '../configuration/configurationClient';

const instance = firebase.initializeApp({
    apiKey: env_var.get('API_KEY'),                          // Auth / General Use
    appId: env_var.get('APP_ID'),                            // General Use
    projectId: env_var.get('PROJECT_ID'),                    // General Use
    authDomain: env_var.get('AUTH_DOMAIN'),                  // Auth with popup/redirect
    databaseURL: env_var.get('DATABASE_URL'),                // Realtime Database
    storageBucket: env_var.get('STORAGE_BUCKET'),            // Storage
    messagingSenderId: env_var.get('MESSAGING_SENDER_ID'),   // Cloud Messaging
    measurementId: env_var.get('MEASUREMENT_ID')             // Analytics
});
export default instance;

export const getUser = async () => {
    return new Promise<firebase.User>((resolve, reject) => {
        instance.auth().onAuthStateChanged((authUser) => {
            if (!authUser) {
                instance.auth().signInAnonymously().catch(error => {
                    // TODO: capture error
                    //capture(prefix, 'Init auth error', error);
                    reject(error);
                })
            } else {
                resolve(authUser);
            }
        },  ((error: firebase.auth.Error) => {
            // TODO: capture error
            //capture(prefix, 'Init auth error', error);
            reject(error);
        }))
    });
}