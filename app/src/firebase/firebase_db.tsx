import {firebaseApp} from "./firebase_config";
import {getDatabase, ref, set, get, child, push, ThenableReference} from "firebase/database"
import {useAuthentication} from "./AuthenticationContext";

const realtime_db = getDatabase(firebaseApp)


export function GetArticles(): any {
    let {activeUser} = useAuthentication();
    let articles = {};
    // useEffect(() => {
    if (activeUser) {
        const dbRef = ref(realtime_db);
        get(child(dbRef, "/articles")).then((snapshot) => {
            if (snapshot.exists()) {
                articles = snapshot.val()
            }
            // else {
            //     alert("No data available");
            // }
        }).catch((error) => {
            console.error(error);
        })
    }
    // });
    return articles;
}

export function PushArticle(article: JSON): ThenableReference {
    const dbRef = ref(realtime_db);
    let {activeUser} = useAuthentication();

    if (activeUser) {
        return push(child(child(dbRef, 'users'), activeUser.uid), article)
    } else
        throw new Error("User is not authenticated")
}
