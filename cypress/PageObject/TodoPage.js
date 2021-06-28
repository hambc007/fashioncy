class TodoPage {
    // Labels
    pageTitle = "Node/Angular Todo App";
    url = "http://localhost:8080/";
    PageHeader = "Simple ToDo List ";
    Button="Add";

    // locators
    Header = "div > h1";
    todoInput = 'input[ng-model="formData.text"]';
    addButton = 'button[type="submit"]';
    counter = 'span.ng-binding';
    todoList = '[ng-repeat="todo in todos"].ng-binding';
    item = 'label.ng-binding';

};

module.exports= new TodoPage();