export const CommonPageSelectors = {
  pageSubHeader: () => $("[data-test=secondary-header] > span"),
  cartAddedItems: () => $("[data-test=shopping-cart-badge]"),
  burgerMenu: () => $("#react-burger-menu-btn"),
  allItems: () => $("[data-test=inventory-sidebar-link"),
  about: () => $("[data-test=about-sidebar-link"),
  logout: () => $("[data-test=logout-sidebar-link"),
  restAppState: () => $("[data-test=reset-sidebar-link"),
};
