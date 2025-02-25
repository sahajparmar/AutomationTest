import Page from './page';


    //sub page containing specific selectors and methods for a specific page
 
class DashboardPage extends Page {
    
     // define selectors using getter methods
     
    public get profileIcon() {
        return browser.$('//*[@class="mat-mdc-menu-trigger mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base"]');
    }

    public get signOutButton() {
        return browser.$('(//*[@class="mat-mdc-menu-item-text"])[3]');
    }
    public get leaguesLink() {
        return browser.$('//a[span[text()="Leagues"]]');
    }

    //overwrite specific options to adapt it to page object
     
    public open() {
        return super.open('app/dashboard');
    }

    //method to sign out from the application
     
    public async signOut() {
        await this.profileIcon.click();
        await browser.pause(2000);
        await this.signOutButton.click();
        await browser.pause(2000);
    }

    //method to navigate to leagues page
     
    public async navigateToLeagues() {
        await this.leaguesLink.click();
        await browser.pause(2000);
    }
}

export default new DashboardPage();