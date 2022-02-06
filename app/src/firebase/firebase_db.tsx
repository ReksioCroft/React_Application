import {firebaseApp} from "./firebase_config";
import {getDatabase, ref, set, get, child} from "firebase/database"
import {useEffect} from "react";

const realtime_db = getDatabase(firebaseApp)


export async function GetArticles() {
    // await realtime_db.ref(`foo/bar`).once('value');

        const dbRef = ref(realtime_db);
        alert(dbRef)
        get(child(dbRef, "/ceva")).then((snapshot) => {
            if (snapshot.exists()) {
                alert(snapshot.val());
            } else {
                alert("No data available");
            }
        }).catch((error) => {
            alert(error);
        });

}