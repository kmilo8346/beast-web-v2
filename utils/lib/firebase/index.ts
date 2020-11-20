import firebase from 'firebase';
import env_var from '../configuration/configurationClient';

class FirebaseClass {
    private static instance: FirebaseClass;
    private firebaseApp: firebase.app.App;

    private constructor () {

        
            this.firebaseApp = firebase.initializeApp({
                apiKey: env_var.get('API_KEY'),                          // Auth / General Use
                appId: env_var.get('APP_ID'),                            // General Use
                projectId: env_var.get('PROJECT_ID'),                    // General Use
                authDomain: env_var.get('AUTH_DOMAIN'),                  // Auth with popup/redirect
                databaseURL: env_var.get('DATABASE_URL'),                // Realtime Database
                storageBucket: env_var.get('STORAGE_BUCKET'),            // Storage
                messagingSenderId: env_var.get('MESSAGING_SENDER_ID'),   // Cloud Messaging
                measurementId: env_var.get('MEASUREMENT_ID')             // Analytics
            });
    }

    public static getInstance():FirebaseClass {
        if(!FirebaseClass.instance){
            FirebaseClass.instance = new FirebaseClass();
        }
        return FirebaseClass.instance;
    }

    async getUser() {
        
        return new Promise<firebase.User>((resolve, reject) => {
                this.firebaseApp.auth().onAuthStateChanged((authUser) => {
                    if(!authUser){
                        this.firebaseApp.auth().signInAnonymously().catch(error => {
                            //capture(prefix, 'Init auth error', error);
                            reject(error);
                        })
                    }else{
                        resolve(authUser);
                    }
                })
        });
    }
}

export default FirebaseClass.getInstance();