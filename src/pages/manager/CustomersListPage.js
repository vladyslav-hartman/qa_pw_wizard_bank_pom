import { expect } from '@playwright/test';

export class CustomersListPage {
  constructor(page) {
    this.page = page;
    this.customerRows = page.locator('table tbody tr');
    this.lastCustomerRow = this.customerRows.last();
    this.lastCustomerCells = this.lastCustomerRow.locator('td');
    this.accountNumberCell = this.lastCustomerRow.locator('td').nth(3);
    this.deleteLastCustomerButton = this.lastCustomerRow.getByRole('button', { name: 'Delete' });
    this.searchField = page.getByRole('textbox', { name: 'Search Customer' });
}

  async open() {
    await this.page.goto('/angularJs-protractor/BankingProject/#/manager/list');
  }

  async wait() {
    await this.page.waitForTimeout(1000);
  }

  async reloadPage() {
    await this.page.reload();
  }

  async assertLastCustomerFirstName(firstName) {
    await expect(this.lastCustomerCells.nth(0)).toHaveText(firstName);
  }

  async assertLastCustomerLastName(lastName) {
    await expect(this.lastCustomerCells.nth(1)).toHaveText(lastName);
  }

  async assertLastCustomerPostCode(postCode) {
    await expect(this.lastCustomerCells.nth(2)).toHaveText(postCode);
  }

  async assertLastCustomerAccountNumber() {
    await expect(this.accountNumberCell).toBeEmpty();
  }

  async clickDeleteNewCustomerButton() {
    await this.deleteLastCustomerButton.click();
  }
  
  async assertCustomerIsNotPresent(firstName, lastName, postCode) {
  await expect(this.page.locator('table')).not.toContainText(firstName);
  await expect(this.page.locator('table')).not.toContainText(lastName);
  await expect(this.page.locator('table')).not.toContainText(postCode);
}

  async expectLastCustomerHasAccountNumber() {
    await expect(this.accountNumberCell).not.toBeEmpty();
  }

  async fillSearchField(name) {
    await this.searchField.fill(name);
  }

  async expectCustomerRowWithName(Name) {
    await expect(this.customerRows).toContainText(Name);
  }

  async expectOnlyOneCustomerRow() {
  await expect(this.customerRows).toHaveCount(1);
}
}