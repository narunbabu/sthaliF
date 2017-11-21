<<<<<<< HEAD
import { Ang1Page } from './app.po';

describe('ang1 App', () => {
  let page: Ang1Page;

  beforeEach(() => {
    page = new Ang1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
=======
import { DinoExplorerPage } from './app.po';

describe('dino-explorer App', () => {
  let page: DinoExplorerPage;

  beforeEach(() => {
    page = new DinoExplorerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
>>>>>>> fffc3ea8608214c3eb5a6e880a1f461ac11350ba
  });
});
