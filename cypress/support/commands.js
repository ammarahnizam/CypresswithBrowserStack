Cypress.Commands.add("addTodo", () => {
    cy.visit("/");
    cy.get("#new-todo").type("Functional Testing{enter}")
  });


Cypress.Commands.add("deleteTodoItem", () => {
  cy.request(
    "DELETE",
    "https://todo-backend-django.herokuapp.com/").then((response) => {
    expect(response.status).to.be.eq(204);
    cy.reload();
    
  });
});