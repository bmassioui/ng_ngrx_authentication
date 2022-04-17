import { Injectable } from "@angular/core";
import { CurrentUserInterface } from "../models";

@Injectable({
    providedIn: 'root'
})
/**
 * Local Storage Service
 */
export class LocalStorageService {
    private localStorage: Storage;

    constructor() {
        this.localStorage = window.localStorage;
    }

    /**
     * Set new key value:string data
     * @param key 
     * @param value 
     */
    set(key: string, value: string): void {
        this.localStorage.setItem(key, value);
    }

    /**
     * Get value: string by its key
     * @param key 
     * @returns 
     */
    get(key: string): string | null {
        return this.localStorage.getItem(key) ?? null;
    }

    /**
     * Remove value by its key
     * @param key 
     */
    remove(key: string): void {
        this.localStorage.removeItem(key);
    }

    /**
     * Clear Local storage
     */
    clear(): void {
        this.localStorage.clear();
    }
}