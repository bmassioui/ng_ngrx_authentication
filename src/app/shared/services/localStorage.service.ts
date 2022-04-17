import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
/**
 * Local Storage Service
 */
export class LocalStorageService<T> {
    private localStorage: Storage;

    constructor() {
        this.localStorage = window.localStorage;
    }

    /**
     * Set new key value:T data
     * @param key 
     * @param value 
     */
    set(key: string, value: T): void {
        this.localStorage.setItem(key, JSON.stringify(value));
    }

    /**
     * Get value: T | null by its key
     * @param key 
     * @returns 
     */
    get(key: string): T | null {

        var dataByKey = this.localStorage.getItem(key);

        if (!dataByKey) return null;

        let dataByKeyAsT: T = JSON.parse(dataByKey);

        return dataByKeyAsT;
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