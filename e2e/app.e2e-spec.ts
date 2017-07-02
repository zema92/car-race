import { CarRacePage } from './app.po';

describe('car-race App', () => {
  let page: CarRacePage;

  beforeEach(() => {
    page = new CarRacePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
