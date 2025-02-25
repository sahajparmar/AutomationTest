import { browser } from '@wdio/globals';
import Page from './page';

    //sub page containing specific selectors and methods for a specific page

class LoginPage extends Page {
    //define selectors using getter methods

    public get inputEmail() {
        return browser.$('//*[@name="email"]');
    }

    public get inputPassword() {
        return browser.$('//*[@name="password"]');
    }

    public get btnSubmit() {
        return browser.$('//*[@type="submit"]');
    }


    //a method to encapsule automation code to interact with the page
    //e.g. to login using email and password

    public async login(email: string, password: string) {
        await this.inputEmail.setValue(email);
        await browser.pause(2000);
        await this.inputPassword.setValue(password);
        await browser.pause(2000);
        await this.btnSubmit.click();
        await browser.pause(2000);
    }

    //overwrite specific options to adapt it to page object

    public open() {
        return super.open('auth/login');
    }
}

export default new LoginPage();