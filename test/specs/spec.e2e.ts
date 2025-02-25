import LoginPage from '../pageobjects/login.page';
import DashboardPage from '../pageobjects/dashboard.page';
import LeaguesPage from '../pageobjects/leagues.page';

const leagues = [
  {
    name: 'International Racquetball Tour (IRT)',
    sport: 'Racquetball',
    formatOptionIndex: 1, // Round Robin
    eventTypeIndex: 1,    // Individual
    checkboxes: [1, 3],   // Juniors U-15, Young Adults
    players: 6,           // Valid for both divisions
    startDate: 'February 27, 2025',
    endDate: 'February 28, 2025'
  },
  {
    name: 'Ladies Professional Racquetball Tour (LPRT)',
    sport: 'Racquetball',
    formatOptionIndex: 2, // Knockout
    eventTypeIndex: 2,    // Team
    checkboxes: [2, 4],   // Juniors U-18, Adults
    players: 8,           // Recommended range
    startDate: 'March 1, 2025',
    endDate: 'March 3, 2025'
  },
  {
    name: 'USA Racquetball National Championships',
    sport: 'Racquetball',
    formatOptionIndex: 1, // Round Robin
    eventTypeIndex: 1,    // Individual
    checkboxes: [1, 5],   // Juniors U-15, Seniors
    players: 10,          // Suitable for mixed divisions
    startDate: 'March 5, 2025',
    endDate: 'March 10, 2025'
  },
  {
    name: 'International Racquetball Federation (IRF)',
    sport: 'Racquetball',
    formatOptionIndex: 2, // Knockout
    eventTypeIndex: 2,    // Team
    checkboxes: [3, 4],   // Young Adults, Adults
    players: 7,           // Within range for competitive divisions
    startDate: 'March 12, 2025',
    endDate: 'March 15, 2025'
  },
  {
    name: 'Canadian Racquetball Championships',
    sport: 'Racquetball',
    formatOptionIndex: 1, // Round Robin
    eventTypeIndex: 1,    // Individual
    checkboxes: [2, 5],   // Juniors U-18, Seniors
    players: 5,           // Appropriate for youth and seniors
    startDate: 'March 17, 2025',
    endDate: 'March 19, 2025'
  },
  {
    name: 'European Racquetball Championships',
    sport: 'Racquetball',
    formatOptionIndex: 2, // Knockout
    eventTypeIndex: 2,    // Team
    checkboxes: [1, 3, 5],// Juniors U-15, Young Adults, Seniors
    players: 9,           // Good balance for mixed-age teams
    startDate: 'March 21, 2025',
    endDate: 'March 23, 2025'
  },
  {
    name: 'Pan American Racquetball Championships',
    sport: 'Racquetball',
    formatOptionIndex: 1, // Round Robin
    eventTypeIndex: 1,    // Individual
    checkboxes: [4],      // Adults
    players: 6,           // Ideal for adult division
    startDate: 'March 25, 2025',
    endDate: 'March 28, 2025'
  },
  {
    name: 'Junior World Racquetball Championships',
    sport: 'Racquetball',
    formatOptionIndex: 2, // Knockout
    eventTypeIndex: 2,    // Team
    checkboxes: [1, 2],   // Juniors U-15, Juniors U-18
    players: 8,           // Fits youth division standards
    startDate: 'March 10, 2025',
    endDate: 'March 12, 2025'
  },
  {
    name: 'World Senior Racquetball Championships',
    sport: 'Racquetball',
    formatOptionIndex: 1, // Round Robin
    eventTypeIndex: 1,    // Individual
    checkboxes: [5],      // Seniors
    players: 4,           // Compact senior competition
    startDate: 'March 14, 2025',
    endDate: 'March 16, 2025'
  },
  {
    name: 'Mexico Racquetball Tournament',
    sport: 'Racquetball',
    formatOptionIndex: 2, // Knockout
    eventTypeIndex: 2,    // Team
    checkboxes: [3, 5],   // Young Adults, Seniors
    players: 10,          // Balanced for team play
    startDate: 'March 18, 2025',
    endDate: 'March 20, 2025'
  }
];

describe('Login, Create 10 Unique Leagues, and Sign Out', () => {
  it('should login, create leagues with different configurations, and sign out', async () => {
    await LoginPage.open();
    await LoginPage.login('sahajrajput369@gmail.com', 'Sahaj369@');
    await DashboardPage.open();

    for (const league of leagues) {
      await browser.url(`${browser.options.baseUrl}/app/leagues`);
      await LeaguesPage.createLeague(
        league.name,
        league.sport,
        league.formatOptionIndex,
        league.eventTypeIndex,
        league.checkboxes,
        league.players,
        league.startDate,
        league.endDate
      );
      await browser.pause(3000); // Ensure proper wait between creations
    }

    await DashboardPage.signOut();
  });
});