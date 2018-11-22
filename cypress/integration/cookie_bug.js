function get_sess(cookies) {

}

context('Bugs', () => {
  var shared_cookie = {};
  it('setup session', () => {
    cy.visit('/');
    cy.get('body').should('contain', 'no state');
    cy.getCookies().then(function (cookies) {
      for (var i = 0; i < cookies.length; i++) {
        /*@type {Cookie} */
        var cookie = cookies[i];
        cy.log(cookie.name);
        if (cookie.name == 'PHPSESSID') {
          shared_cookie = cookie;
        }
      }
    });
    cy.visit('/');
    cy.get('body').should('contain', 'saved_state');
  });
  it('check state', () => {
    cy.setCookie(shared_cookie.name, shared_cookie.value);
    cy.visit('/');
    cy.get('body').should('contain', 'saved_state');
  });
});
