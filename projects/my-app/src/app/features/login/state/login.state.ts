import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable
export class LoginState {
    private loading$ = new BehaviorSubject<boolean>(false);
    private token$ = new BehaviorSubject<string>('');

    isLoading$() {
        return this.loading$.asObservable();
    }

    setIsLoading(isLoading: boolean) {
        this.loading$.next(isLoading);
    }

    getToken$() {
        return this.token$.asObservable();
    }

    setToken(token: string) {
        this.token$.next(token);
    }
}