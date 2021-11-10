class TodoPage {
    
    get todoInput() {
      return cy
        .get("div[class='view'] label")
        .as("Todo Input");
    }

    get deleteIcon() {
      return cy
        .get(".destroy")
        .as("Delete Icon");
    }
  
    get editInput() {
      return cy.get('.edit')
        .as("Edit Input");
    }
    get completedIcon() {
      return cy.get('#toggle-all').as("Completed Icon");
    }
  
    get activeLink() {
      return cy.get("a[href='#/active']").as("Active Link");
    }
  
    get completedLink() {
        return cy.get("a[href='#/completed']").as("Completed Link");
      }


    get clearCompletedButton() {
        return cy.get("#clear-completed").as(" Clear Completed Button");
      }

    get toggleAll() {
        return cy.get("#toggle-all").as("Toggle All");
      }

      get todoCount() {
        return cy.get("#todo-count").as("Todo Count");
      }
    

    deleteTodo()
    {
      cy.wait(1000)
      this.deleteIcon.invoke('show').trigger('click')
    }

    openActiveItems()
    {
      this.activeLink.click(); 
    }

    openCompletedItems()
    {
      this.completedIcon.click();
      cy.wait(1000);
      this.completedLink.click();   
    }

    clearCompletedTodos()
    {
      this.clearCompletedButton.click();  
    }

    editTodo()
    {
       this.todoInput.dblclick();
       this.editInput.eq(0).clear();
       this.editInput.eq(0).type('Updated{enter}')
       
    }


  }
  export default TodoPage;