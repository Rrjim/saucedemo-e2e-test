export const CheckoutInformationPageSelectors = {
  firstName: () => $("[data-test=firstName]"),
  lastName: () => $("[data-test=lastName]"),
  postalCode: () => $("[data-test=postalCode]"),
  cancelBtn: () => $("[data-test=cancel]"),
  continueBtn: () => $("[data-test=continue]"),
};
