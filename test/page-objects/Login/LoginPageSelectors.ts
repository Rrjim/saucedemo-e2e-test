export const LoginPageSelectors = {
    headerSelector: $('[class=login_logo]'),
    usernameSelector: $('[data-test=username]'),
    passwordSelector: $('[data-test=password]'),
    loginButtonSelector: $('[data-test=login-button]'),
    // dynamic locator
    errorLoginUserPopUp: () => $('h3[data-test=error]') 
};
