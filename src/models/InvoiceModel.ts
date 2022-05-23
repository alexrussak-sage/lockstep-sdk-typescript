/**
 * Lockstep Platform SDK for TypeScript
 *
 * (c) 2021-2022 Lockstep, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     Lockstep Network <support@lockstep.io
 * @copyright  2021-2022 Lockstep, Inc.
 * @link       https://github.com/Lockstep-Network/lockstep-sdk-typescript
 */

import { InvoiceAddressModel } from "..";
import { InvoiceLineModel } from "..";
import { InvoicePaymentDetailModel } from "..";
import { NoteModel } from "..";
import { AttachmentModel } from "..";
import { CompanyModel } from "..";
import { ContactModel } from "..";
import { CreditMemoInvoiceModel } from "..";
import { CustomFieldValueModel } from "..";
import { CustomFieldDefinitionModel } from "..";

/**
 * An Invoice represents a bill sent from one company to another.  The creator of the invoice is identified
 * by the `CompanyId` field, and the recipient of the invoice is identified by the `CustomerId` field.  Most
 * invoices are uniquely identified both by a Lockstep Platform ID number and a customer ERP "key" that was
 * generated by the system that originated the invoice.  Invoices have a total amount and a due date, and when
 * some payments have been made on the Invoice the `TotalAmount` and the `OutstandingBalanceAmount` may be
 * different.
 */
export type InvoiceModel = {

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * The unique ID of this record, automatically assigned by Lockstep when this record is
   * added to the Lockstep platform.
   *
   * For the ID of this record in its originating financial system, see `ErpKey`.
   */
  invoiceId: string;

  /**
   * The ID number of the company that created this invoice.
   */
  companyId: string;

  /**
   * The ID number of the counterparty for the invoice, for example, a customer or vendor.
   */
  customerId: string;

  /**
   * The unique ID of this record as it was known in its originating financial system.
   *
   * If this company record was imported from a financial system, it will have the value `ErpKey`
   * set to the original primary key number of the record as it was known in the originating financial
   * system.  If this record was not imported, this value will be `null`.
   *
   * For more information, see [Identity Columns](https://developer.lockstep.io/docs/identity-columns).
   */
  erpKey: string | null;

  /**
   * The "Purchase Order Code" is a code that is sometimes used by companies to refer to the original PO
   * that was sent that caused this invoice to be written.  If a customer sends a purchase order to a vendor,
   * the vendor can then create an invoice and refer back to the originating purchase order using this field.
   */
  purchaseOrderCode: string | null;

  /**
   * An additional reference code that is sometimes used to identify this invoice.
   * The meaning of this field is specific to the ERP or accounting system used by the user.
   */
  referenceCode: string | null;

  /**
   * A code identifying the salesperson responsible for writing this quote, invoice, or order.
   */
  salespersonCode: string | null;

  /**
   * A name identifying the salesperson responsible for writing this quote, invoice, or order.
   */
  salespersonName: string | null;

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
   * The total value of this invoice, inclusive of all taxes and line items.
   */
  totalAmount: number | null;

  /**
   * The total sales (or transactional) tax calculated for this invoice.
   */
  salesTaxAmount: number | null;

  /**
   * The total discounts given by the seller to the buyer on this invoice.
   */
  discountAmount: number | null;

  /**
   * The remaining balance value of this invoice.
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
   * The ID number of the invoice's origination address
   */
  primaryOriginAddressId: string | null;

  /**
   * The ID number of the invoice's bill-to address
   */
  primaryBillToAddressId: string | null;

  /**
   * The ID number of the invoice's ship-to address
   */
  primaryShipToAddressId: string | null;

  /**
   * The date on which this invoice record was created.
   */
  created: string | null;

  /**
   * The ID number of the user who created this invoice.
   */
  createdUserId: string | null;

  /**
   * The date on which this invoice record was last modified.
   */
  modified: string | null;

  /**
   * The ID number of the user who most recently modified this invoice.
   */
  modifiedUserId: string | null;

  /**
   * The AppEnrollmentId of the application that imported this record.  For accounts
   * with more than one financial system connected, this field identifies the originating
   * financial system that produced this record.  This value is null if this record
   * was not loaded from an external ERP or financial system.
   */
  appEnrollmentId: string | null;

  /**
   * Is the invoice voided?
   */
  isVoided: boolean;

  /**
   * Is the invoice in dispute?
   */
  inDispute: boolean;

  /**
   * Should the invoice be excluded from aging calculations?
   */
  excludeFromAging: boolean;

  /**
   * Indicates the preferred delivery method for this invoice. Examples include Print, Email, Fax
   */
  preferredDeliveryMethod: string | null;

  /**
   * All addresses connected to this invoice.
   * To retrieve this collection, specify `Addresses` in the "Include" parameter for your query.
   */
  addresses: InvoiceAddressModel[] | null;

  /**
   * All lines attached to this invoice.
   * To retrieve this collection, specify `Lines` in the "Include" parameter for your query.
   */
  lines: InvoiceLineModel[] | null;

  /**
   * All payments attached to this invoice, the amount of the payment applied to this Invoice, and the date the Payment was applied.
   * To retrieve this collection, specify `Payments` in the "Include" parameter for your query.
   */
  payments: InvoicePaymentDetailModel[] | null;

  /**
   * A collection of notes linked to this record.  To retrieve this collection, specify `Notes` in the
   * `include` parameter when retrieving data.
   *
   * To create a note, use the [Create Note](https://developer.lockstep.io/reference/post_api-v1-notes)
   * endpoint with the `TableKey` to `Invoice` and the `ObjectKey` set to the `InvoiceId` for this record.  For
   * more information on extensibility, see [linking extensible metadata to objects](https://developer.lockstep.io/docs/custom-fields#linking-metadata-to-an-object).
   */
  notes: NoteModel[] | null;

  /**
   * A collection of attachments linked to this record.  To retrieve this collection, specify `Attachments` in
   * the `include` parameter when retrieving data.
   *
   * To create an attachment, use the [Upload Attachment](https://developer.lockstep.io/reference/post_api-v1-attachments)
   * endpoint with the `TableKey` to `Invoice` and the `ObjectKey` set to the `InvoiceId` for this record.  For
   * more information on extensibility, see [linking extensible metadata to objects](https://developer.lockstep.io/docs/custom-fields#linking-metadata-to-an-object).
   */
  attachments: AttachmentModel[] | null;

  /**
   * The Company associated to this invoice.
   * To retrieve this item, specify `Company` in the "Include" parameter for your query.
   */
  company: CompanyModel | null;

  /**
   * The Customer associated to the invoice customer
   * To retrieve this item, specify `Customer` in the "Include" parameter for your query.
   */
  customer: CompanyModel | null;

  /**
   * The Contact associated to the invoice customer
   * To retrieve this item, specify `Customer` in the "Include" parameter for your query.
   */
  customerPrimaryContact: ContactModel | null;

  /**
   * The credit memos associated to this invoice.
   * To retrieve this item, specify `CreditMemos` in the "Include" parameter for your query.
   */
  creditMemos: CreditMemoInvoiceModel[] | null;

  /**
   * A collection of custom fields linked to this record.  To retrieve this collection, specify
   * `CustomFieldValues` in the `include` parameter when retrieving data.
   *
   * To create a custom field, use the [Create Custom Field](https://developer.lockstep.io/reference/post_api-v1-customfieldvalues)
   * endpoint with the `TableKey` to `Invoice` and the `ObjectKey` set to the `InvoiceId` for this record.  For
   * more information on extensibility, see [linking extensible metadata to objects](https://developer.lockstep.io/docs/custom-fields#linking-metadata-to-an-object).
   */
  customFieldValues: CustomFieldValueModel[] | null;

  /**
   * A collection of custom fields linked to this record.  To retrieve this collection, specify
   * `CustomFieldDefinitions` in the `include` parameter when retrieving data.
   *
   * To create a custom field, use the [Create Custom Field](https://developer.lockstep.io/reference/post_api-v1-customfieldvalues)
   * endpoint with the `TableKey` to `Invoice` and the `ObjectKey` set to the `InvoiceId` for this record.  For
   * more information on extensibility, see [linking extensible metadata to objects](https://developer.lockstep.io/docs/custom-fields#linking-metadata-to-an-object).
   */
  customFieldDefinitions: CustomFieldDefinitionModel[] | null;
};
