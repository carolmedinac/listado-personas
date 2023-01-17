import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'any'})
export class LoginService {

    token: string;

    constructor(private router:Router){}

    login(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
                response => {
                    console.log('esta es una pruebA ' + response);
                    firebase.auth().currentUser?.getIdToken().then(
                        token => {
                            console.log(token);
                            this.token = token;
                            this.router.navigate(['/']);

                        }
                    )
                }
            )
         
    }

    getIdToken() {
        return this.token;
    }
    
    isAutenticado(){
        return this.token != null;
    }

    logout(){
        console.log("logout");
        firebase.auth().signOut().then(() =>{
            this.token = "";
            console.log("dentro de signout")
            this.router.navigate(['login']);
        }).catch(error => console.log(error));
    }


}