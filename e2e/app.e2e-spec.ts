import { Material2appPage } from './app.po';

describe('material2app App', () => {
  let page: Material2appPage;

  beforeEach(() => {
    page = new Material2appPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
