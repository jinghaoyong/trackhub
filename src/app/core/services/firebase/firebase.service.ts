import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { collection, addDoc, getDocs, getFirestore, doc, setDoc, getDoc, query, where, orderBy, Timestamp, onSnapshot, updateDoc, DocumentData, QuerySnapshot, QueryDocumentSnapshot } from "firebase/firestore";
import { BehaviorSubject, Observable } from 'rxjs';
// import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { environment } from 'src/environments/environment';
import { User } from '../../models/auth.models';

// Initialize Firebase
const app = initializeApp(environment.firebaseConfig);
const db = getFirestore(app);

// Initialize Firebase Cloud Messaging and get a reference to the service
// const messaging = getMessaging(app);

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor() {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }


  async signUp(userId: string, userName: string, userImage: string, userRole: string, password: string): Promise<void> {
    const userRef = doc(db, 'users', userId);
    const docSnap = await getDoc(userRef);

    if (!docSnap.exists()) {
      await setDoc(userRef, { userName, userImage, userRole, password });
    } else {
      throw new Error('User with this ID already exists');
    }
  }

  async login(userName: string, password: string): Promise<DocumentData | null> {
    const usersRef = collection(db, 'users');
    const q = query(usersRef, where('userName', '==', userName), where('password', '==', password));
    const querySnapshot = await getDocs(q);
    let user = null;
    querySnapshot.forEach((doc) => {
      user = doc.data();
    });

    if (user) {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
    }

    return user;
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  async changePasswordBasedOnUserId(userId: string, newPassword: string): Promise<void> {
    const userRef = doc(db, 'users', userId);
    await updateDoc(userRef, { password: newPassword });
  }


  async sendMessage(chatroomId: string, message: string, senderId: string, senderName: string, readStatus: boolean): Promise<void> {
    // const messagesRef = collection(db, `chatrooms/${chatroomId}/messages`);
    // const createdAt = Timestamp.now();

    // await addDoc(messagesRef, {
    //   createdAt,
    //   message,
    //   senderId,
    //   senderName,
    //   readStatus
    // });
  }

  async getMessagesBasedOnChatroomId(chatroomId: string, callback: (messages: any[]) => void): Promise<any> {
    // const messagesRef = collection(db, `chatrooms/${chatroomId}/messages`);
    // const q = query(messagesRef, orderBy('createdAt', 'asc'));

    // const unsubscribe = onSnapshot(q, (snapshot: QuerySnapshot<DocumentData>) => {
    //   const messages: Messages[] = snapshot.docs.map((doc: QueryDocumentSnapshot<DocumentData>) => ({ id: doc.id, ...doc.data() } as Messages ));
    //   callback(messages);
    // }, (error) => {
    //   console.error("Error fetching messages: ", error);
    //   callback([]);
    // });

    // return unsubscribe;
  }
}
