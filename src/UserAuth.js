//moving api setting to config file
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebase";

//now we can adapt logIn function to use firebase
//be aware of the account in firebase is an Email
export function logIn(account, password) {
  return signInWithEmailAndPassword(auth, account, password);
}
export function logOut() {
  return signOut(auth);
}
