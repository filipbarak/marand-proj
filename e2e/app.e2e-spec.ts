import { MarandProjPage } from './app.po';

describe('marand-proj App', function() {
  let page: MarandProjPage;

  beforeEach(() => {
    page = new MarandProjPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
