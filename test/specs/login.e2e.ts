import LoginPage from '../pageobjects/login.page';
import DashboardPage from '../pageobjects/dashboard.page';
import LeaguesPage from '../pageobjects/leagues.page';

describe('My Login and League Creation application', () => {
    // it('should not be able to login with invalid credentials', async () => {
    //     await LoginPage.open();
    //     await LoginPage.login('invalid@example.com', 'invalidpassword');
    //     await browser.pause(2000);
    // });

    it('should login with valid credentials, navigate to dashboard, navigate to leagues, create a league, and sign out', async () => {
        await LoginPage.open();
        await LoginPage.login('sahajrajput369@gmail.com', 'Sahaj369@');
        await browser.pause(2000);
        await DashboardPage.open();
        await browser.pause(2000);

        // Navigate to leagues page
        await DashboardPage.navigateToLeagues();
        await LeaguesPage.open();
        await browser.pause(2000);

        // Create a league
        await LeaguesPage.createLeague('My League', 'Racquetball ');

        // Sign out from the application
        await DashboardPage.signOut();
    });
});