import { CaptalysDashboardPage } from './app.po';

describe('captalys-dashboard App', () => {
  let page: CaptalysDashboardPage;

  beforeEach(() => {
    page = new CaptalysDashboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
