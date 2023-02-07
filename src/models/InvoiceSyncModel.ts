/**
 * Lockstep Platform SDK for TypeScript
 *
 * (c) 2021-2023 Lockstep, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     Lockstep Network <support@lockstep.io>
 * @copyright  2021-2023 Lockstep, Inc.
 * @link       https://github.com/Lockstep-Network/lockstep-sdk-typescript
 */


/**
 * The InvoiceSyncModel represents information coming into Lockstep from an external financial system or other
 * enterprise resource planning system.  To import data from an external system, convert your original data into
 * the InvoiceSyncModel format and call the [Upload Sync File API](https://developer.lockstep.io/reference/post_api-v1-sync-zip).
 * This API retrieves all of the data you uploaded in a compressed ZIP file and imports it into the Lockstep
 * platform.
 *
 * Once imported, this record will be available in the Lockstep API as an [InvoiceModel](https://developer.lockstep.io/docs/invoicemodel).
 *
 * For more information on writing your own connector, see [Connector Data](https://developer.lockstep.io/docs/connector-data).
 */
export type InvoiceSyncModel = {

  /**
   * This is the primary key of the Invoice record. For this field, you should use whatever the invoice's unique
   * identifying number is in the originating system. Search for a unique, non-changing number within the
   * originating financial system for this record.
   *
   * Example: If you store your invoice records in a database, whatever the primary key for the invoice table is
   * in the database should be the "ErpKey".
   *
   * For more information, see [Identity Columns](https://developer.lockstep.io/docs/identity-columns).
   */
  erpKey: string;

  /**
   * The original primary key or unique ID of the company to which this invoice belongs.  This value should
   * match the [Company ErpKey](https://developer.lockstep.io/docs/importing-companies#erpkey) field on the
   * [CompanySyncModel](https://developer.lockstep.io/docs/importing-companies).
   *
   * An Invoice has two relationships: The Company and the Customer.  The field `CompanyErpKey` identifies the
   * company that created the invoice, and the field `CustomerErpKey` is the customer to whom the invoice
   * was sent.
   */
  companyErpKey: string;

  /**
   * The original primary key or unique ID of the company to which this invoice was sent.  This value should
   * match the [Company ErpKey](https://developer.lockstep.io/docs/importing-companies#erpkey) field on the
   * [CompanySyncModel](https://developer.lockstep.io/docs/importing-companies).
   *
   * An Invoice has two relationships: The Company and the Customer.  The field `CompanyErpKey` identifies the
   * company that created the invoice, and the field `CustomerErpKey` is the customer to whom the invoice
   * was sent.
   */
  customerErpKey: string;

  /**
   * The name of the salesperson that wrote this invoice.  This is just text, it is not a reference to the
   * "Contacts" table.  You will not receive an error if this field does not match a known contact person.
   */
  salespersonName: string | null;

  /**
   * The "Purchase Order Code" is a code that is sometimes used by companies to refer to the original PO
   * that was sent that caused this invoice to be written.  If a customer sends a purchase order to a vendor,
   * the vendor can then create an invoice and refer back to the originating purchase order using this field.
   */
  purchaseOrderCode: string | null;

  /**
   * An additional reference code that is sometimes used to identify this invoice. The meaning of this field
   * is specific to the ERP or accounting system used by the user.
   */
  referenceCode: string | null;

  /**
   * A code identifying the salesperson responsible for writing this quote, invoice, or order.  This is just
   * text, it is not a reference to the "Contacts" table.  You will not receive an error if this field does
   * not match a known contact person.
   */
  salespersonCode: string | null;

  /**
   * A code identifying the type of this invoice.
   *
   * Recognized Invoice types are:
   * * `AR Invoice` - Represents an invoice sent by Company to the Customer
   * * `AP Invoice` - Represents an invoice sent by Vendor to the Company
   * * `AR Credit Memo` - Represents a credit memo generated by Company given to Customer
   * * `AP Credit Memo` - Represents a credit memo generated by Vendor given to Company
   */
  invoiceTypeCode: string | null;

  /**
   * A code identifying the status of this invoice.
   *
   * Recognized Invoice status codes are:
   * * `Open` - Represents an invoice that is considered open and needs more work to complete
   * * `Closed` - Represents an invoice that is considered closed and resolved
   */
  invoiceStatusCode: string | null;

  /**
   * A code identifying the terms given to the purchaser.  This field is imported directly from the originating
   * financial system and does not follow a specified format.
   */
  termsCode: string | null;

  /**
   * If the customer negotiated any special terms different from the standard terms above, describe them here.
   */
  specialTerms: string | null;

  /**
   * The three-character ISO 4217 currency code used for this invoice.
   */
  currencyCode: string | null;

  /**
   * The total value of this invoice, inclusive of all taxes and line items in the invoice currency.
   */
  totalAmount: number | null;

  /**
   * The total sales (or transactional) tax calculated for this invoice in the invoice currency.
   */
  salesTaxAmount: number | null;

  /**
   * The total discounts given by the seller to the buyer on this invoice in the invoice currency.
   */
  discountAmount: number | null;

  /**
   * The remaining balance value of this invoice in the invoice currency.
   */
  outstandingBalanceAmount: number | null;

  /**
   * The reporting date for this invoice.
   */
  invoiceDate: string | null;

  /**
   * The date when discounts were adjusted for this invoice.
   */
  discountDate: string | null;

  /**
   * The date when this invoice posted to the company's general ledger.
   */
  postedDate: string | null;

  /**
   * The date when the invoice was closed and finalized after completion of all payments and delivery of all products and
   * services.
   */
  invoiceClosedDate: string | null;

  /**
   * The date when the remaining outstanding balance is due.
   */
  paymentDueDate: string | null;

  /**
   * The date and time when this record was imported from the user's ERP or accounting system.
   */
  importedDate: string | null;

  /**
   * The origination address for this invoice
   */
  originAddressLine1: string | null;

  /**
   * The origination address for this invoice
   */
  originAddressLine2: string | null;

  /**
   * The origination address for this invoice
   */
  originAddressLine3: string | null;

  /**
   * The origination address for this invoice
   */
  originAddressCity: string | null;

  /**
   * The origination address for this invoice
   */
  originAddressRegion: string | null;

  /**
   * The origination address for this invoice
   */
  originAddressPostalCode: string | null;

  /**
   * The origination address for this invoice
   */
  originAddressCountry: string | null;

  /**
   * The origination address for this invoice
   */
  originAddressLatitude: number | null;

  /**
   * The origination address for this invoice
   */
  originAddressLongitude: number | null;

  /**
   * The billing address for this invoice
   */
  billToAddressLine1: string | null;

  /**
   * The billing address for this invoice
   */
  billToAddressLine2: string | null;

  /**
   * The billing address for this invoice
   */
  billToAddressLine3: string | null;

  /**
   * The billing address for this invoice
   */
  billToAddressCity: string | null;

  /**
   * The billing address for this invoice
   */
  billToAddressRegion: string | null;

  /**
   * The billing address for this invoice
   */
  billToAddressPostalCode: string | null;

  /**
   * The billing address for this invoice
   */
  billToAddressCountry: string | null;

  /**
   * The billing address for this invoice
   */
  billToAddressLatitude: number | null;

  /**
   * The billing address for this invoice
   */
  billToAddressLongitude: number | null;

  /**
   * The shipping address for this invoice
   */
  shipToAddressLine1: string | null;

  /**
   * The shipping address for this invoice
   */
  shipToAddressLine2: string | null;

  /**
   * The shipping address for this invoice
   */
  shipToAddressLine3: string | null;

  /**
   * The shipping address for this invoice
   */
  shipToAddressCity: string | null;

  /**
   * The shipping address for this invoice
   */
  shipToAddressRegion: string | null;

  /**
   * The shipping address for this invoice
   */
  shipToAddressPostalCode: string | null;

  /**
   * The shipping address for this invoice
   */
  shipToAddressCountry: string | null;

  /**
   * The shipping address for this invoice
   */
  shipToAddressLatitude: number | null;

  /**
   * The shipping address for this invoice
   */
  shipToAddressLongitude: number | null;

  /**
   * If known, the date when this record was created according to the originating financial system
   * in which this record is maintained.  If the originating financial system does not maintain a
   * created-date, leave this field null.
   */
  created: string | null;

  /**
   * If known, the date when this record was most recently modified according to the originating
   * financial system in which this record is maintained.  If the originating financial system does
   * not maintain a most-recently-modified-date, leave this field null.
   */
  modified: string | null;

  /**
   * Is the invoice voided? If not specified, we assume the invoice is not voided.
   */
  isVoided: boolean | null;

  /**
   * Is the invoice in dispute? If not specified, we assume the invoice is not in dispute.
   */
  inDispute: boolean | null;

  /**
   * Indicates the preferred delivery method for this invoice. Examples include Print, Email, Fax
   */
  preferredDeliveryMethod: string | null;

  /**
   * The Currency Rate used to get from the account's base currency to the invoice amount.
   */
  currencyRate: number;

  /**
   * The total value of this invoice, inclusive of all taxes and line items in the erp's base currency.
   */
  baseCurrencyTotalAmount: number | null;

  /**
   * The total sales (or transactional) tax calculated for this invoice in the erp's base currency.
   */
  baseCurrencySalesTaxAmount: number | null;

  /**
   * The total discounts given by the seller to the buyer on this invoice in the erp's base currency.
   */
  baseCurrencyDiscountAmount: number | null;

  /**
   * The remaining balance value of this invoice in the erp's base currency.
   */
  baseCurrencyOutstandingBalanceAmount: number | null;
};
