import { WwwrootPage } from './app.po';

describe('wwwroot App', function() {
  let page: WwwrootPage;

  beforeEach(() => {
    page = new WwwrootPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
