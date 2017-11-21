<<<<<<< HEAD
import { browser, by, element } from 'protractor';

export class Ang1Page {
=======
import { browser, element, by } from 'protractor';

export class DinoExplorerPage {
>>>>>>> fffc3ea8608214c3eb5a6e880a1f461ac11350ba
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
