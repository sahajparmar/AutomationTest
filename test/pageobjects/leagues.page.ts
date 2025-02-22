import Page from './page';

class LeaguesPage extends Page {
    public get createLeagueButton() {
        return browser.$('//*[@class="btn btn-primary font-size-h6 ng-star-inserted"]');
    }

    public get inputLeagueName() {
        return browser.$('//*[@placeholder="Enter League Name"]');
    }

    public get inputSportName() {
        return browser.$('//*[@placeholder="Enter Sport Name"]');
    }

    public get formatDropdown() {
        return browser.$('(//*[@role="combobox"])[1]');
    }

    public get formatOption() {
        return browser.$('(//*[@class="mdc-list-item__primary-text"])[2]');
    }

    public get eventTypeRadioButton() {
        return browser.$('(//*[@name="mat-radio-group-0"])[1]');
    }

    public get divisionCheckbox() {
        return browser.$('(//*[@class="mdc-checkbox"])');
    }

    public get playersInput() {
        return browser.$('//*[@type="number"]');
    }

    public get startDateCalendarButton() {
        return browser.$('(//*[@class="mat-mdc-button-touch-target"])[3]');
    }

    public get clickonstartDate() {
        return browser.$('(//*[@aria-label="February 27, 2025"])');
    }

    public get endDateCalendarButton() {
        return browser.$('(//*[@class="mat-mdc-button-touch-target"])[4]');
    }

    public get clickonEndDate() {
        return browser.$('(//*[@aria-label="February 28, 2025"])');
    }

    public get submitButton() {
        return browser.$('(//*[@class="btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-3"])');
    }

    public open() {
        return super.open('app/leagues');
    }

    public async createLeague(leagueName: string, sportName: string) {
        await this.createLeagueButton.waitForClickable({ timeout: 10000 });
        await this.createLeagueButton.click();
        await browser.pause(2000);

        await this.inputLeagueName.waitForEnabled({ timeout: 10000 });
        await this.inputLeagueName.setValue(leagueName);
        await browser.pause(2000);

        await this.inputSportName.waitForEnabled({ timeout: 10000 });
        await this.inputSportName.setValue(sportName);
        await browser.pause(2000);
        

        await this.formatDropdown.waitForClickable({ timeout: 10000 });
        await this.formatDropdown.click();
        await browser.pause(2000);

        await this.formatOption.waitForClickable({ timeout: 10000 });
        await this.formatOption.click();
        await browser.pause(2000);

        await (await this.eventTypeRadioButton).waitForDisplayed({ timeout: 15000 });
        await browser.pause(1000); // brief pause if rendering is slow
        await (await this.eventTypeRadioButton).click();
        await browser.pause(1000);

        await this.divisionCheckbox.waitForClickable({ timeout: 10000 });
        await this.divisionCheckbox.click();
        await browser.pause(2000);

        await this.playersInput.waitForEnabled({ timeout: 10000 });
        await this.playersInput.setValue(5);
        await browser.pause(2000);
        await this.eventTypeRadioButton.scrollIntoView();


        await this.startDateCalendarButton.scrollIntoView();
        await this.startDateCalendarButton.waitForClickable({ timeout: 10000 });
        await this.startDateCalendarButton.click();
        await browser.pause(2000);

        await this.clickonstartDate.scrollIntoView();
        await this.clickonstartDate.waitForClickable({ timeout: 10000 });
        await this.clickonstartDate.click();
        await browser.pause(2000);

        await this.endDateCalendarButton.scrollIntoView();
        await this.endDateCalendarButton.waitForClickable({ timeout: 10000 });
        await this.endDateCalendarButton.click();
        await browser.pause(2000);

        await this.clickonEndDate.scrollIntoView();
        await this.clickonEndDate.waitForClickable({ timeout: 10000 });
        await this.clickonEndDate.click();
        await browser.pause(2000);


        await this.submitButton.waitForClickable({ timeout: 10000 });
        await this.submitButton.click();
        await browser.pause(2000);
    }
}

export default new LeaguesPage();



