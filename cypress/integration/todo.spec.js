const TodoPage = require("../PageObject/TodoPage")

describe('Validate node-todo app', () => {
  let newItem = 1;
  let cnt= 0;
  beforeEach(() => {

    cy.visit('/')
  
  })
  it('displays Elements', () => {
    //verify the page
	cy.title().should("eq", TodoPage.pageTitle);
	cy.url().should("eq", TodoPage.url);
  cy.get(TodoPage.Header).should("be.visible").contains(TodoPage.PageHeader);
  cy.get(TodoPage.counter).should("be.visible").should('have.text', cnt);
  cy.get(TodoPage.todoInput).should("be.visible");
  cy.get(TodoPage.addButton).should("be.visible").should('have.text', TodoPage.Button);
  })

  it('can add new items', () => {
     //increment counter value
    cnt++;
    cy.log("can add item by clicking enter");
    cy.get(TodoPage.todoInput).type(`${newItem}{enter}`)
    cy.log("validate counter has incremented")
    cy.get(TodoPage.counter).should('have.text', cnt);
    cy.log('validate item was added');
    cy.get(TodoPage.item).first().should("be.visible").contains( newItem);
    //increment counter & item value
    newItem++;
    cnt++;

    cy.log("can add item by clikcing the button add")
    cy.get(TodoPage.todoInput).type(`${newItem}`);
    cy.get(TodoPage.addButton).click();
    cy.log("validate counter has incremented")
    cy.get(TodoPage.counter).should('have.text', cnt);
    cy.log('validate item was added');
    cy.get(TodoPage.item).last().should("be.visible").contains( newItem);

  })

  it('can delete items', () => {

    cy.log('validate both added items can be deleted');
    cy.get(TodoPage.item).last().should("be.visible").click();
    cnt--;
    cy.log("validate counter has decremented")
    cy.get(TodoPage.counter).should('have.text', cnt);

    cy.get(TodoPage.item).last().should("be.visible").click();
    cnt--;
    cy.log("validate counter has decremented")
    cy.get(TodoPage.counter).should('have.text', cnt);

    cy.log("validate no items displayed")
    cy.get(TodoPage.item).should("not.exist");
  })

})
