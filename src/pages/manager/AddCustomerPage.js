import { expect } from '@playwright/test';

export class AddCustomerPage {
  constructor(page) {
    this.page = page;
    this.firstNameField = this.page.getByRole('textbox', { name: 'First Name' });
    this.lastNameField = this.page.getByRole('textbox', { name: 'Last Name' });
    this.postCodeField = this.page.getByRole('textbox', { name: 'Post Code' });
    this.addCustomerButton = this.page.getByRole('form').getByRole('button', { name: 'Add Customer' });
    this.customersButton = this.page.getByRole('button', { name: 'Customers' });
    this.openAccountButton = this.page.getByRole('button', { name: 'Open Account' });

  }

  async open() {
    await this.page.goto(
      '/angularJs-protractor/BankingProject/#/manager/addCust',
    );
  }

  async wait() {
    await this.page.waitForTimeout(1000);
  }

  async fillFirstNameField(firstName) {
    await this.firstNameField.fill(firstName);
  }

  async fillLastNameField(lastName) {
    await this.lastNameField.fill(lastName);
  }

  async fillPostCodeField(postCode) {
    await this.postCodeField.fill(postCode);
  }
  
  async clickAddCustomerButton() {
    await this.addCustomerButton.click();
  }

  async reloadPage() {
    await this.page.reload();
  }

  async clickCustomersButton() {
    await this.customersButton.click();
  }

  async clickOpenAccountButton() {
    await this.openAccountButton.click();
  }
}
