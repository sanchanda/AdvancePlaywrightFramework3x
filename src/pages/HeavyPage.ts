import { type Locator, type Page } from '@playwright/test';

/**
 * A deliberately oversized page object: 100 locators in one constructor.
 *
 * It exists to make one point concrete. Locators are LAZY. Building one does
 * not touch the browser, query the DOM, or wait for anything. It only records
 * a selector. The DOM is queried when you act on it, with click(), fill(),
 * or an expect().
 *
 * So a constructor with 100 locators costs microseconds, and a page object
 * can describe an entire screen without the test paying for the parts it
 * never uses. Run 294_heavy_page.spec.ts to see the measured cost.
 *
 * It also carries 100 locator-backed methods and 10 page-level ones, to show
 * that methods live on the prototype: they are shared by every instance
 * and cost nothing per `new HeavyPage(page)`.
 */
export class HeavyPage {
    readonly page: Page;
    readonly buttonSubmit0: Locator;
    readonly linkCancel1: Locator;
    readonly textboxSave2: Locator;
    readonly checkboxDelete3: Locator;
    readonly radioEdit4: Locator;
    readonly headingSearch5: Locator;
    readonly comboboxFilter6: Locator;
    readonly listitemSort7: Locator;
    readonly imgExport8: Locator;
    readonly tabImport9: Locator;
    readonly buttonProfile10: Locator;
    readonly linkSettings11: Locator;
    readonly textboxDashboard12: Locator;
    readonly checkboxReports13: Locator;
    readonly radioOrders14: Locator;
    readonly headingInvoice15: Locator;
    readonly comboboxPayment16: Locator;
    readonly listitemShipping17: Locator;
    readonly imgBilling18: Locator;
    readonly tabAccount19: Locator;
    readonly buttonPassword20: Locator;
    readonly linkUsername21: Locator;
    readonly textboxEmail22: Locator;
    readonly checkboxPhone23: Locator;
    readonly radioAddress24: Locator;
    readonly headingCity25: Locator;
    readonly comboboxCountry26: Locator;
    readonly listitemContinue27: Locator;
    readonly imgCheckout28: Locator;
    readonly tabBack29: Locator;
    readonly byTestfirst_name0: Locator;
    readonly byTestlast_name1: Locator;
    readonly byTestemail2: Locator;
    readonly byTestphone3: Locator;
    readonly byTestzip4: Locator;
    readonly byTestcity5: Locator;
    readonly byTeststate6: Locator;
    readonly byTestcountry7: Locator;
    readonly byTestcompany8: Locator;
    readonly byTestqty9: Locator;
    readonly byTestprice10: Locator;
    readonly byTesttotal11: Locator;
    readonly byTesttax12: Locator;
    readonly byTestdiscount13: Locator;
    readonly byTestcoupon14: Locator;
    readonly byTestnote15: Locator;
    readonly byTestsearch16: Locator;
    readonly byTestfilter17: Locator;
    readonly title: Locator;
    readonly byTestpage19: Locator;
    readonly label_first_name_0: Locator;
    readonly label_last_name_1: Locator;
    readonly label_email_2: Locator;
    readonly label_phone_3: Locator;
    readonly label_zip_4: Locator;
    readonly label_city_5: Locator;
    readonly label_state_6: Locator;
    readonly label_country_7: Locator;
    readonly label_company_8: Locator;
    readonly label_qty_9: Locator;
    readonly label_price_10: Locator;
    readonly label_total_11: Locator;
    readonly label_tax_12: Locator;
    readonly label_discount_13: Locator;
    readonly label_coupon_14: Locator;
    readonly placeholder_first_name_0: Locator;
    readonly placeholder_last_name_1: Locator;
    readonly placeholder_email_2: Locator;
    readonly placeholder_phone_3: Locator;
    readonly placeholder_zip_4: Locator;
    readonly placeholder_city_5: Locator;
    readonly placeholder_state_6: Locator;
    readonly placeholder_country_7: Locator;
    readonly placeholder_company_8: Locator;
    readonly placeholder_qty_9: Locator;
    readonly placeholder_price_10: Locator;
    readonly placeholder_total_11: Locator;
    readonly placeholder_tax_12: Locator;
    readonly text_submit_0: Locator;
    readonly text_cancel_1: Locator;
    readonly text_save_2: Locator;
    readonly text_delete_3: Locator;
    readonly text_edit_4: Locator;
    readonly text_search_5: Locator;
    readonly text_filter_6: Locator;
    readonly text_sort_7: Locator;
    readonly text_export_8: Locator;
    readonly text_import_9: Locator;
    readonly css_row_0: Locator;
    readonly css_row_1: Locator;
    readonly css_row_2: Locator;
    readonly css_row_3: Locator;
    readonly css_row_4: Locator;
    readonly css_row_5: Locator;
    readonly filtered_submit_0: Locator;
    readonly filtered_cancel_1: Locator;
    readonly filtered_save_2: Locator;
    readonly filtered_delete_3: Locator;
    readonly filtered_edit_4: Locator;
    readonly filtered_search_5: Locator;

    constructor(page: Page) {
        this.page = page;

        // TTACart tags elements with data-test, not Playwright's default data-testid.
        const byTest = (id: string) => page.locator(`[data-test="${id}"]`);

        this.buttonSubmit0 = page.getByRole('button', { name: 'Submit' });
        this.linkCancel1 = page.getByRole('link', { name: 'Cancel' });
        this.textboxSave2 = page.getByRole('textbox', { name: 'Save' });
        this.checkboxDelete3 = page.getByRole('checkbox', { name: 'Delete' });
        this.radioEdit4 = page.getByRole('radio', { name: 'Edit' });
        this.headingSearch5 = page.getByRole('heading', { name: 'Search' });
        this.comboboxFilter6 = page.getByRole('combobox', { name: 'Filter' });
        this.listitemSort7 = page.getByRole('listitem', { name: 'Sort' });
        this.imgExport8 = page.getByRole('img', { name: 'Export' });
        this.tabImport9 = page.getByRole('tab', { name: 'Import' });
        this.buttonProfile10 = page.getByRole('button', { name: 'Profile' });
        this.linkSettings11 = page.getByRole('link', { name: 'Settings' });
        this.textboxDashboard12 = page.getByRole('textbox', { name: 'Dashboard' });
        this.checkboxReports13 = page.getByRole('checkbox', { name: 'Reports' });
        this.radioOrders14 = page.getByRole('radio', { name: 'Orders' });
        this.headingInvoice15 = page.getByRole('heading', { name: 'Invoice' });
        this.comboboxPayment16 = page.getByRole('combobox', { name: 'Payment' });
        this.listitemShipping17 = page.getByRole('listitem', { name: 'Shipping' });
        this.imgBilling18 = page.getByRole('img', { name: 'Billing' });
        this.tabAccount19 = page.getByRole('tab', { name: 'Account' });
        this.buttonPassword20 = page.getByRole('button', { name: 'Password' });
        this.linkUsername21 = page.getByRole('link', { name: 'Username' });
        this.textboxEmail22 = page.getByRole('textbox', { name: 'Email' });
        this.checkboxPhone23 = page.getByRole('checkbox', { name: 'Phone' });
        this.radioAddress24 = page.getByRole('radio', { name: 'Address' });
        this.headingCity25 = page.getByRole('heading', { name: 'City' });
        this.comboboxCountry26 = page.getByRole('combobox', { name: 'Country' });
        this.listitemContinue27 = page.getByRole('listitem', { name: 'Continue' });
        this.imgCheckout28 = page.getByRole('img', { name: 'Checkout' });
        this.tabBack29 = page.getByRole('tab', { name: 'Back' });
        this.byTestfirst_name0 = byTest('first-name');
        this.byTestlast_name1 = byTest('last-name');
        this.byTestemail2 = byTest('email');
        this.byTestphone3 = byTest('phone');
        this.byTestzip4 = byTest('zip');
        this.byTestcity5 = byTest('city');
        this.byTeststate6 = byTest('state');
        this.byTestcountry7 = byTest('country');
        this.byTestcompany8 = byTest('company');
        this.byTestqty9 = byTest('qty');
        this.byTestprice10 = byTest('price');
        this.byTesttotal11 = byTest('total');
        this.byTesttax12 = byTest('tax');
        this.byTestdiscount13 = byTest('discount');
        this.byTestcoupon14 = byTest('coupon');
        this.byTestnote15 = byTest('note');
        this.byTestsearch16 = byTest('search');
        this.byTestfilter17 = byTest('filter');
        this.title = byTest('title');
        this.byTestpage19 = byTest('page');
        this.label_first_name_0 = page.getByLabel('First Name');
        this.label_last_name_1 = page.getByLabel('Last Name');
        this.label_email_2 = page.getByLabel('Email');
        this.label_phone_3 = page.getByLabel('Phone');
        this.label_zip_4 = page.getByLabel('Zip');
        this.label_city_5 = page.getByLabel('City');
        this.label_state_6 = page.getByLabel('State');
        this.label_country_7 = page.getByLabel('Country');
        this.label_company_8 = page.getByLabel('Company');
        this.label_qty_9 = page.getByLabel('Qty');
        this.label_price_10 = page.getByLabel('Price');
        this.label_total_11 = page.getByLabel('Total');
        this.label_tax_12 = page.getByLabel('Tax');
        this.label_discount_13 = page.getByLabel('Discount');
        this.label_coupon_14 = page.getByLabel('Coupon');
        this.placeholder_first_name_0 = page.getByPlaceholder('Enter first name');
        this.placeholder_last_name_1 = page.getByPlaceholder('Enter last name');
        this.placeholder_email_2 = page.getByPlaceholder('Enter email');
        this.placeholder_phone_3 = page.getByPlaceholder('Enter phone');
        this.placeholder_zip_4 = page.getByPlaceholder('Enter zip');
        this.placeholder_city_5 = page.getByPlaceholder('Enter city');
        this.placeholder_state_6 = page.getByPlaceholder('Enter state');
        this.placeholder_country_7 = page.getByPlaceholder('Enter country');
        this.placeholder_company_8 = page.getByPlaceholder('Enter company');
        this.placeholder_qty_9 = page.getByPlaceholder('Enter qty');
        this.placeholder_price_10 = page.getByPlaceholder('Enter price');
        this.placeholder_total_11 = page.getByPlaceholder('Enter total');
        this.placeholder_tax_12 = page.getByPlaceholder('Enter tax');
        this.text_submit_0 = page.getByText('Submit', { exact: true });
        this.text_cancel_1 = page.getByText('Cancel', { exact: true });
        this.text_save_2 = page.getByText('Save', { exact: true });
        this.text_delete_3 = page.getByText('Delete', { exact: true });
        this.text_edit_4 = page.getByText('Edit', { exact: true });
        this.text_search_5 = page.getByText('Search', { exact: true });
        this.text_filter_6 = page.getByText('Filter', { exact: true });
        this.text_sort_7 = page.getByText('Sort', { exact: true });
        this.text_export_8 = page.getByText('Export', { exact: true });
        this.text_import_9 = page.getByText('Import', { exact: true });
        this.css_row_0 = page.locator('table tbody tr').nth(0);
        this.css_row_1 = page.locator('table tbody tr').nth(1);
        this.css_row_2 = page.locator('table tbody tr').nth(2);
        this.css_row_3 = page.locator('table tbody tr').nth(3);
        this.css_row_4 = page.locator('table tbody tr').nth(4);
        this.css_row_5 = page.locator('table tbody tr').nth(5);
        this.filtered_submit_0 = page.locator('.card').filter({ hasText: 'Submit' });
        this.filtered_cancel_1 = page.locator('.card').filter({ hasText: 'Cancel' });
        this.filtered_save_2 = page.locator('.card').filter({ hasText: 'Save' });
        this.filtered_delete_3 = page.locator('.card').filter({ hasText: 'Delete' });
        this.filtered_edit_4 = page.locator('.card').filter({ hasText: 'Edit' });
        this.filtered_search_5 = page.locator('.card').filter({ hasText: 'Search' });
    }

    async goto() {
        await this.page.goto('https://app.thetestingacademy.com/playwright/ttacart/inventory');
    }


    // ---------------------------------------------------------------- page
    async reload() {
        await this.page.reload();
    }

    async back() {
        await this.page.goBack();
    }

    async forward() {
        await this.page.goForward();
    }

    async getTitle(): Promise<string> {
        return this.page.title();
    }

    getUrl(): string {
        return this.page.url();
    }

    async waitUntilIdle() {
        await this.page.waitForLoadState('networkidle');
    }

    async screenshot(name: string) {
        await this.page.screenshot({ path: `test-results/${name}.png`, fullPage: true });
    }

    async pressKey(key: string) {
        await this.page.keyboard.press(key);
    }

    async scrollToBottom() {
        await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    }

    async gotoCart() {
        await this.page.goto('https://app.thetestingacademy.com/playwright/ttacart/cart');
    }

    // ------------------------------------------------- locator actions
    async clickButtonSubmit0() {
        await this.buttonSubmit0.click();
    }

    async fillLinkCancel1(value: string) {
        await this.linkCancel1.fill(value);
    }

    async getTextboxSave2Text(): Promise<string> {
        return (await this.textboxSave2.innerText()).trim();
    }

    async isCheckboxDelete3Visible(): Promise<boolean> {
        return this.checkboxDelete3.isVisible();
    }

    async countRadioEdit4(): Promise<number> {
        return this.radioEdit4.count();
    }

    async clickHeadingSearch5() {
        await this.headingSearch5.click();
    }

    async fillComboboxFilter6(value: string) {
        await this.comboboxFilter6.fill(value);
    }

    async getListitemSort7Text(): Promise<string> {
        return (await this.listitemSort7.innerText()).trim();
    }

    async isImgExport8Visible(): Promise<boolean> {
        return this.imgExport8.isVisible();
    }

    async countTabImport9(): Promise<number> {
        return this.tabImport9.count();
    }

    async clickButtonProfile10() {
        await this.buttonProfile10.click();
    }

    async fillLinkSettings11(value: string) {
        await this.linkSettings11.fill(value);
    }

    async getTextboxDashboard12Text(): Promise<string> {
        return (await this.textboxDashboard12.innerText()).trim();
    }

    async isCheckboxReports13Visible(): Promise<boolean> {
        return this.checkboxReports13.isVisible();
    }

    async countRadioOrders14(): Promise<number> {
        return this.radioOrders14.count();
    }

    async clickHeadingInvoice15() {
        await this.headingInvoice15.click();
    }

    async fillComboboxPayment16(value: string) {
        await this.comboboxPayment16.fill(value);
    }

    async getListitemShipping17Text(): Promise<string> {
        return (await this.listitemShipping17.innerText()).trim();
    }

    async isImgBilling18Visible(): Promise<boolean> {
        return this.imgBilling18.isVisible();
    }

    async countTabAccount19(): Promise<number> {
        return this.tabAccount19.count();
    }

    async clickButtonPassword20() {
        await this.buttonPassword20.click();
    }

    async fillLinkUsername21(value: string) {
        await this.linkUsername21.fill(value);
    }

    async getTextboxEmail22Text(): Promise<string> {
        return (await this.textboxEmail22.innerText()).trim();
    }

    async isCheckboxPhone23Visible(): Promise<boolean> {
        return this.checkboxPhone23.isVisible();
    }

    async countRadioAddress24(): Promise<number> {
        return this.radioAddress24.count();
    }

    async clickHeadingCity25() {
        await this.headingCity25.click();
    }

    async fillComboboxCountry26(value: string) {
        await this.comboboxCountry26.fill(value);
    }

    async getListitemContinue27Text(): Promise<string> {
        return (await this.listitemContinue27.innerText()).trim();
    }

    async isImgCheckout28Visible(): Promise<boolean> {
        return this.imgCheckout28.isVisible();
    }

    async countTabBack29(): Promise<number> {
        return this.tabBack29.count();
    }

    async clickByTestfirst_name0() {
        await this.byTestfirst_name0.click();
    }

    async fillByTestlast_name1(value: string) {
        await this.byTestlast_name1.fill(value);
    }

    async getByTestemail2Text(): Promise<string> {
        return (await this.byTestemail2.innerText()).trim();
    }

    async isByTestphone3Visible(): Promise<boolean> {
        return this.byTestphone3.isVisible();
    }

    async countByTestzip4(): Promise<number> {
        return this.byTestzip4.count();
    }

    async clickByTestcity5() {
        await this.byTestcity5.click();
    }

    async fillByTeststate6(value: string) {
        await this.byTeststate6.fill(value);
    }

    async getByTestcountry7Text(): Promise<string> {
        return (await this.byTestcountry7.innerText()).trim();
    }

    async isByTestcompany8Visible(): Promise<boolean> {
        return this.byTestcompany8.isVisible();
    }

    async countByTestqty9(): Promise<number> {
        return this.byTestqty9.count();
    }

    async clickByTestprice10() {
        await this.byTestprice10.click();
    }

    async fillByTesttotal11(value: string) {
        await this.byTesttotal11.fill(value);
    }

    async getByTesttax12Text(): Promise<string> {
        return (await this.byTesttax12.innerText()).trim();
    }

    async isByTestdiscount13Visible(): Promise<boolean> {
        return this.byTestdiscount13.isVisible();
    }

    async countByTestcoupon14(): Promise<number> {
        return this.byTestcoupon14.count();
    }

    async clickByTestnote15() {
        await this.byTestnote15.click();
    }

    async fillByTestsearch16(value: string) {
        await this.byTestsearch16.fill(value);
    }

    async getByTestfilter17Text(): Promise<string> {
        return (await this.byTestfilter17.innerText()).trim();
    }

    async isTitleVisible(): Promise<boolean> {
        return this.title.isVisible();
    }

    async countByTestpage19(): Promise<number> {
        return this.byTestpage19.count();
    }

    async clickLabel_first_name_0() {
        await this.label_first_name_0.click();
    }

    async fillLabel_last_name_1(value: string) {
        await this.label_last_name_1.fill(value);
    }

    async getLabel_email_2Text(): Promise<string> {
        return (await this.label_email_2.innerText()).trim();
    }

    async isLabel_phone_3Visible(): Promise<boolean> {
        return this.label_phone_3.isVisible();
    }

    async countLabel_zip_4(): Promise<number> {
        return this.label_zip_4.count();
    }

    async clickLabel_city_5() {
        await this.label_city_5.click();
    }

    async fillLabel_state_6(value: string) {
        await this.label_state_6.fill(value);
    }

    async getLabel_country_7Text(): Promise<string> {
        return (await this.label_country_7.innerText()).trim();
    }

    async isLabel_company_8Visible(): Promise<boolean> {
        return this.label_company_8.isVisible();
    }

    async countLabel_qty_9(): Promise<number> {
        return this.label_qty_9.count();
    }

    async clickLabel_price_10() {
        await this.label_price_10.click();
    }

    async fillLabel_total_11(value: string) {
        await this.label_total_11.fill(value);
    }

    async getLabel_tax_12Text(): Promise<string> {
        return (await this.label_tax_12.innerText()).trim();
    }

    async isLabel_discount_13Visible(): Promise<boolean> {
        return this.label_discount_13.isVisible();
    }

    async countLabel_coupon_14(): Promise<number> {
        return this.label_coupon_14.count();
    }

    async clickPlaceholder_first_name_0() {
        await this.placeholder_first_name_0.click();
    }

    async fillPlaceholder_last_name_1(value: string) {
        await this.placeholder_last_name_1.fill(value);
    }

    async getPlaceholder_email_2Text(): Promise<string> {
        return (await this.placeholder_email_2.innerText()).trim();
    }

    async isPlaceholder_phone_3Visible(): Promise<boolean> {
        return this.placeholder_phone_3.isVisible();
    }

    async countPlaceholder_zip_4(): Promise<number> {
        return this.placeholder_zip_4.count();
    }

    async clickPlaceholder_city_5() {
        await this.placeholder_city_5.click();
    }

    async fillPlaceholder_state_6(value: string) {
        await this.placeholder_state_6.fill(value);
    }

    async getPlaceholder_country_7Text(): Promise<string> {
        return (await this.placeholder_country_7.innerText()).trim();
    }

    async isPlaceholder_company_8Visible(): Promise<boolean> {
        return this.placeholder_company_8.isVisible();
    }

    async countPlaceholder_qty_9(): Promise<number> {
        return this.placeholder_qty_9.count();
    }

    async clickPlaceholder_price_10() {
        await this.placeholder_price_10.click();
    }

    async fillPlaceholder_total_11(value: string) {
        await this.placeholder_total_11.fill(value);
    }

    async getPlaceholder_tax_12Text(): Promise<string> {
        return (await this.placeholder_tax_12.innerText()).trim();
    }

    async isText_submit_0Visible(): Promise<boolean> {
        return this.text_submit_0.isVisible();
    }

    async countText_cancel_1(): Promise<number> {
        return this.text_cancel_1.count();
    }

    async clickText_save_2() {
        await this.text_save_2.click();
    }

    async fillText_delete_3(value: string) {
        await this.text_delete_3.fill(value);
    }

    async getText_edit_4Text(): Promise<string> {
        return (await this.text_edit_4.innerText()).trim();
    }

    async isText_search_5Visible(): Promise<boolean> {
        return this.text_search_5.isVisible();
    }

    async countText_filter_6(): Promise<number> {
        return this.text_filter_6.count();
    }

    async clickText_sort_7() {
        await this.text_sort_7.click();
    }

    async fillText_export_8(value: string) {
        await this.text_export_8.fill(value);
    }

    async getText_import_9Text(): Promise<string> {
        return (await this.text_import_9.innerText()).trim();
    }

    async isCss_row_0Visible(): Promise<boolean> {
        return this.css_row_0.isVisible();
    }

    async countCss_row_1(): Promise<number> {
        return this.css_row_1.count();
    }

    async clickCss_row_2() {
        await this.css_row_2.click();
    }

    async fillCss_row_3(value: string) {
        await this.css_row_3.fill(value);
    }

    async getCss_row_4Text(): Promise<string> {
        return (await this.css_row_4.innerText()).trim();
    }

    async isCss_row_5Visible(): Promise<boolean> {
        return this.css_row_5.isVisible();
    }

    async countFiltered_submit_0(): Promise<number> {
        return this.filtered_submit_0.count();
    }

    async clickFiltered_cancel_1() {
        await this.filtered_cancel_1.click();
    }

    async fillFiltered_save_2(value: string) {
        await this.filtered_save_2.fill(value);
    }

    async getFiltered_delete_3Text(): Promise<string> {
        return (await this.filtered_delete_3.innerText()).trim();
    }

    async isFiltered_edit_4Visible(): Promise<boolean> {
        return this.filtered_edit_4.isVisible();
    }

    async countFiltered_search_5(): Promise<number> {
        return this.filtered_search_5.count();
    }

    /** Every locator on this page object, for the laziness demo.
     *  Checks for `nth`, which Locator has and Page does not, so `this.page`
     *  is not miscounted as a locator. */
    allLocators(): Locator[] {
        return Object.values(this).filter(
            (v): v is Locator => typeof v === 'object' && v !== null && 'nth' in v
        );
    }
}