/// <reference types="cypress" />

import TodoPage from "../../pageobjects/todo.po";

const todopage = new TodoPage();

describe('Verify a todo item when checkmarked should display as completed', () => {
  before(() => {
  cy.addTodo();
  })
  
  it('SHOULD check mark an item as completed',() => {
    cy.contains('Functional Testing')
      .parent()
      .find('input[type=checkbox]')
      .check()
      cy.wait(1000);
    cy.contains('Functional Testing')
      .parents('li')
      .should('have.class', 'completed')
  })

  after(() => {
    cy.deleteTodoItem();
})
})

describe('Verify Active filter should show active items only', () => {
  before(() => {
  cy.addTodo();
  })
  
  it('SHOULD show active items in Active filter', () => {
    todopage.openActiveItems()
    cy.contains('Functional Testing')
      .parents('li')
      .should('not.have.class', 'completed')
    })

    after(() => {
      cy.deleteTodoItem();
  })
  })



describe('Verify a todo item is getting updated successfully', () => {
  before(() => {
  cy.addTodo();
  })
  
   it('SHOULD edit a todo item', () => { 
    todopage.editTodo();
    cy.contains('Updated').should('be.visible')

    })

    after(() => {
    cy.deleteTodoItem();
  })
  })


describe('Verify a todo item is getting deleted successfully', () => {
  before(() => {
  cy.addTodo();
  })
  
   it('SHOULD delete a todo item', () => { 
    todopage.deleteTodo();
    todopage.todoInput.should('have.length', 0);

    })

})


describe('Verify Completed filter should show completed items only', () => {
  before(() => {
  cy.addTodo();
  })
  
  it('SHOULD show completed items in Completed filter', () => {
    todopage.openCompletedItems();
    cy.contains('Functional Testing')
      .parents('li')
      .should('have.class', 'completed')
    })

    after(() => {
      cy.deleteTodoItem();
  })
  })

  describe('Verify a Clear Completed button is removing all completed todos', () => {
    before(() => {
    cy.addTodo();
    })
    
     it('SHOULD clear all todos', () => { 
      todopage.openCompletedItems();
      todopage.clearCompletedTodos()
      todopage.todoCount.should('contain.text','0')
      cy.contains('Clear completed').should('not.be.visible')
  
      })
  
  })

       
