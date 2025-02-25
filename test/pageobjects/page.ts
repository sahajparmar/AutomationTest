import { browser } from '@wdio/globals';

// containing all methods, selectors and functionality that is shared across all page objects

export default class Page {

    // Opens a sub page of the page
    public open(path: string) {
        return browser.url(`${browser.options.baseUrl}/${path}`);
    }
}