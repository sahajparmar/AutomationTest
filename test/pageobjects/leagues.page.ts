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

    public get formatOptionRoundRobin() {
        return browser.$('(//*[@class="mdc-list-item__primary-text"])[1]');
    }

    public get formatOptionKnockout() {
        return browser.$('(//*[@class="mdc-list-item__primary-text"])[2]');
    }

    public get eventTypeRadioButton1() {
        return browser.$('(//*[@class="mdc-radio__native-control"])[1]');
    }

    public get eventTypeRadioButton2() {
        return browser.$('(//*[@class="mdc-radio__native-control"])[2]');
    }

    public get divisionCheckbox1() {
        return browser.$('(//*[@class="mdc-checkbox"])[1]');
    }

    public get divisionCheckbox2() {
        return browser.$('(//*[@class="mdc-checkbox"])[2]');
    }

    public get divisionCheckbox3() {
        return browser.$('(//*[@class="mdc-checkbox"])[3]');
    }

    public get divisionCheckbox4() {
        return browser.$('(//*[@class="mdc-checkbox"])[4]');
    }

    public get divisionCheckbox5() {
        return browser.$('(//*[@class="mdc-checkbox"])[5]');
    }

    public get playersInput() {
        return browser.$('//*[@type="number"]');
    }

    public get startDateCalendarButton() {
        return browser.$('(//*[@class="mat-mdc-button-touch-target"])[3]');
    }

    public get nextMonthButton() {
        return browser.$('(//*[@class="mat-calendar-next-button mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base"])');
    }

    public get endDateCalendarButton() {
        return browser.$('(//*[@class="mat-mdc-button-touch-target"])[4]');
    }

    public async selectDate(date: string) {
        const dateSelector = `//*[@aria-label="${date}"]`;
        let dateElement = await browser.$(dateSelector);

        // Navigate to the correct month if the date is not found
        while (!(await dateElement.isExisting())) {
            await this.nextMonthButton.waitForClickable({ timeout: 10000 });
            await this.nextMonthButton.click();
            await browser.pause(1000);
            dateElement = await browser.$(dateSelector);
        }

        await dateElement.scrollIntoView();
        await dateElement.waitForClickable({ timeout: 10000 });
        await dateElement.click();
        await browser.pause(2000);
    }

    public get submitButton() {
        return browser.$('(//*[@class="btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-3"])');
    }

    public open() {
        return super.open('app/leagues');
    }

    public async createLeague(leagueName: string, sportName: string, formatOptionIndex: number, eventTypeIndex: number, checkboxes: number[], players: number, startDate: string, endDate: string) {
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

        if (formatOptionIndex === 1) {
            await this.formatOptionRoundRobin.waitForClickable({ timeout: 10000 });
            await this.formatOptionRoundRobin.click();
        } else {
            await this.formatOptionKnockout.waitForClickable({ timeout: 10000 });
            await this.formatOptionKnockout.click();
        }
        await browser.pause(2000);

        if (eventTypeIndex === 1) {
            await this.eventTypeRadioButton1.waitForDisplayed({ timeout: 15000 });
            await browser.pause(1000); // brief pause if rendering is slow
            await this.eventTypeRadioButton1.click();
        } else {
            await this.eventTypeRadioButton2.waitForDisplayed({ timeout: 15000 });
            await browser.pause(1000); // brief pause if rendering is slow
            await this.eventTypeRadioButton2.click();
        }
        await browser.pause(1000);

        for (const checkboxIndex of checkboxes) {
            const checkbox = await browser.$(`(//*[@class="mdc-checkbox"])[${checkboxIndex}]`);
            await checkbox.waitForClickable({ timeout: 10000 });
            await checkbox.click();
            await browser.pause(1000);
        }

        await this.playersInput.waitForEnabled({ timeout: 10000 });
        await this.playersInput.setValue(players);
        await browser.pause(2000);

        await this.startDateCalendarButton.scrollIntoView();
        await this.startDateCalendarButton.waitForClickable({ timeout: 10000 });
        await this.startDateCalendarButton.click();
        await browser.pause(2000);

        await this.selectDate(startDate);

        await this.endDateCalendarButton.scrollIntoView();
        await this.endDateCalendarButton.waitForClickable({ timeout: 10000 });
        await this.endDateCalendarButton.click();
        await browser.pause(2000);

        await this.selectDate(endDate);

        await this.submitButton.waitForClickable({ timeout: 10000 });
        await this.submitButton.click();
        await browser.pause(2000);

        
        await browser.url(`${browser.options.baseUrl}/app/leagues`);
    }
}

export default new LeaguesPage();