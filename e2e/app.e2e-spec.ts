import { RealEstatePage } from './app.po';

describe('real-estate App', () => {
  let page: RealEstatePage;

  beforeEach(() => {
    page = new RealEstatePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
