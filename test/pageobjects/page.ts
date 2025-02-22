import { browser } from '@wdio/globals'

//containing all methods, selectors and functionality that is shared across all page objects

export default class Page {
    
    //Opens a sub page of the page

    public open (path: string) {
        return browser.url(`http://192.168.0.125:8080/${path}`)   
    }

    //  public open (path:string) {
    //         return browser.url(`http://localhost:4200/${path}`)
    //     }
}