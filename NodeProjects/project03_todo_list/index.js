import inquirer from "inquirer";
// making a list to store items
let todos = [];
// addTask
let addMoreTasks = true;
while (addMoreTasks) {
    let addTask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "Enter a task todo: "
        },
        {
            name: "addMore",
            type: "confirm",
            message: "Do you want to add more tasks? "
        },
    ]);
    // adding task todo in todos list
    todos.push(addTask.todo);
    // addMoreTasks --> to use while loop for adding more tasks if addMore is true
    addMoreTasks = addTask.addMore;
}
// display the todo list
console.log("\nBelow Is Your Current Todo List:\n", todos);
