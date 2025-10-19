export const CheckoutOverviewPageSelectors = {
  paymentInfo: () => $("[data-test=payment-info-label] + div"),
  shippingInfo: () => $("[data-test=shipping-info-label] + div"),
  itemTotal: () => $("[data-test=total-info-label] + div"),
  tax: () => $("[data-test=total-info-label] + div + div"),
  tatalAfterTax: () => $("[data-test=total-label]"),
  cancelBtn: () => $("[data-test=cancel]"),
  finishBtn: () => $("[data-test=finish]"),
};
