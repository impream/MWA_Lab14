import { ASN14Page } from './app.po';

describe('asn14 App', function() {
  let page: ASN14Page;

  beforeEach(() => {
    page = new ASN14Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
