const projectsContainer = document.querySelector(".projectsContainer");
const newProjectButton = document.querySelector(".newProject");
const projectList = document.querySelector(".projectLists");

// Array to hold projects
const projects = [];

newProjectButton.addEventListener("click", function() {

    if (!projectList.querySelector("input")) {
        // Project input elements
        const projectInput = document.createElement("input");
        projectInput.placeholder = "Enter project title";
        const addButton = document.createElement("button");
        addButton.textContent = "Add Project";
        const cancelButton = document.createElement("button");
        cancelButton.textContent = "Cancel";

        // Wrapping input and buttons in a container to manage them independently
        const projectContainer = document.createElement("div");
        projectContainer.classList.add("newProjectContainer");
        projectContainer.append(projectInput, addButton, cancelButton);
        projectList.append(projectContainer);

        // Cancel button removes the input container
        cancelButton.addEventListener("click", function() {
            projectContainer.remove();
        });

        // Add button creates a new project
        addButton.addEventListener("click", function() {
            const newProject = new Project(projectInput.value);
            projects.push(newProject);  // Add to the project array

            const newProjectDiv = document.createElement("div");
            newProjectDiv.classList.add("project");

            // Title and "Add Task" button for the project
            const titleDiv = document.createElement("div");
            titleDiv.textContent = newProject.title;
            const addTask = document.createElement("button");
            addTask.textContent = "+ Add Task";

            // Container for project tasks
            const toDoCard = document.createElement("div");
            toDoCard.classList.add("tasksContainer");

            // Append elements to project div and display in the list
            newProjectDiv.append(titleDiv, toDoCard, addTask);
            projectList.appendChild(newProjectDiv);
            projectContainer.remove();  // Clear the input fields

            // Task adding functionality
            addTask.addEventListener("click", function() {
                if (!toDoCard.querySelector("input")) {
                    // Task input fields
                    const titleText = document.createElement("div");
                    titleText.textContent = "Title:"; 
                    const titleForm = document.createElement("input");
                    const detailsText = document.createElement("div");
                    detailsText.textContent = "Details:";
                    const detailsForm = document.createElement("input");
                    const dateForm = document.createElement("input");
                    dateForm.type = "date";
                    const dateText = document.createElement("div");
                    dateText.textContent = "Date:";
                    const addToDo = document.createElement("button");
                    addToDo.textContent = "Add Task";
                    const cancelToDo = document.createElement("button");
                    cancelToDo.textContent = "Cancel";

                    // Append task input fields
                    toDoCard.append(titleText, titleForm, detailsText, detailsForm, dateText, dateForm, addToDo, cancelToDo);

                    // Cancel task creation
                    cancelToDo.addEventListener("click", function() {
                        toDoCard.innerHTML = "";  // Clear only task input fields
                    });

                    // Add task to the project
                    addToDo.addEventListener("click", function() {
                        const newTask = new toDo(titleForm.value, detailsForm.value, dateForm.value);
                        newProject.tasks.push(newTask);  // Add to project tasks array

                        // Display the task
                        const taskDiv = document.createElement("div");
                        taskDiv.classList.add("task");
                        taskDiv.textContent = `${newTask.title} - ${newTask.details} - Due: ${newTask.date}`;
                        toDoCard.appendChild(taskDiv);

                        // Clear task input fields after adding the task
                        titleForm.value = "";
                        detailsForm.value = "";
                        dateForm.value = "";
                    });
                }
            });
        });
    }
});

// Project class to store tasks
class Project {
    constructor(title) {
        this.title = title;
        this.tasks = [];
    }
}

// Task class to store task details
class toDo {
    constructor(title, details, date) {
        this.title = title;
        this.details = details;
        this.date = date;
    }
}
