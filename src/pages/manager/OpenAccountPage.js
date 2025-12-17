import { expect } from '@playwright/test';

export class OpenAccountPage {
  constructor(page) {
    this.page = page;
    this.cusomersButton = page.getByRole('button', { name: 'Customers' });
    this.customerSelect = page.getByTestId('userSelect');
    this.currencySelect = page.getByTestId('currency');
    this.processButton = page.getByRole('button', { name: 'Process' });
  }

  async open() {
    await this.page.goto(
      '/angularJs-protractor/BankingProject/#/manager/openAccount',
    );
  }

  async wait() {
    await this.page.waitForTimeout(1000);
  }

  async reloadPage() {
    await this.page.reload();
  }
  
  async selectCurrency(currency) {
    await this.currencySelect.selectOption({ label: currency });
  }

  async expectCurrencyValue(value) {
    await expect(this.currencySelect).toHaveValue(value);
  }

  async selectCustomerByName(fullName) {
    await this.customerSelect.selectOption({ label: fullName });
  }

  async clickProcessButton() {
    await this.processButton.click();
  }
  async clickCustomersButton() {
    await this.cusomersButton.click();
  }

}
