import { BinglawyerPage } from './app.po';

describe('binglawyer App', () => {
  let page: BinglawyerPage;

  beforeEach(() => {
    page = new BinglawyerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
