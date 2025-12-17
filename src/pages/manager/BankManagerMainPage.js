import { expect } from '@playwright/test';

export class BankManagerMainPage {
  constructor(page) {
    this.page = page;
    this.addCustomerButton = page.getByRole('button', { name: 'Add Customer' });
    this.openAccountButton = page.getByRole('button', { name: 'Open Account' });
    this.cutomersButton = page.getByRole('button', { name: 'Customers' });
  }

  async open() {
    await this.page.goto('/angularJs-protractor/BankingProject/#/manager');
  }

  async wait() {
    await this.page.waitForTimeout(1000);
  }

  async assertAssertAddCustomerButtonIsVisible() {
    await expect(this.addCustomerButton).toBeVisible();
  }
  async assertAssertOpenAccountButtonIsVisible() {
    await expect(this.openAccountButton).toBeVisible();
  }
  async assertAssertCutomersButtonIsVisible() {
    await expect(this.cutomersButton).toBeVisible();
  }
  
}
