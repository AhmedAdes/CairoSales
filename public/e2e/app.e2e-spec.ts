import { CairoSalesNodeJSPage } from './app.po';

describe('cairo-sales-node-js App', function() {
  let page: CairoSalesNodeJSPage;

  beforeEach(() => {
    page = new CairoSalesNodeJSPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
