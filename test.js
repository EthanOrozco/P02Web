let data = {
  users: [],
  tasks: [],
  tags: []
};

// PUNTO 1:
console.log("<-------------------- PUNTO 1 -------------------->");
console.log("Users:");
console.table(getAllUsers());
console.log("Tasks:");
console.table(getAllTasks());
console.log("Tags:");
console.table(getAllTags());

// PUNTO 2:
console.log("<-------------------- PUNTO 2 -------------------->");
createUser("Ethan", "ethan.g.orozco@gmail.com", "Contraseña6767");
createUser("Daniel", "daniel@example.com", "Contraseña1234");
createUser("Axel", "axel@example.com", "Contraseña5678");

console.log("All users have been created");
console.table(getAllUsers().map(user => ({
  id: user.id,
  name: user.name,
  email: user.email,
  joined_at: user.joined_at.toISOString()
})));

// PUNTO 3:
console.log("<-------------------- PUNTO 3 -------------------->");
console.log("Show user 2");
console.table([getUserByID(2)].map(user => ({
  id: user.id,
  name: user.name,
  email: user.email,
  joined_at: user.joined_at.toISOString()
})));

// PUNTO 4:
console.log("<-------------------- PUNTO 4 -------------------->");
console.log("Filter by name");
console.table(searchUsers("name", "Axel").map(user => ({
  id: user.id,
  name: user.name,
  email: user.email,
  joined_at: user.joined_at.toISOString()
})));

// PUNTO 5:
console.log("<-------------------- PUNTO 5 -------------------->");
console.log("Update user 3");

updateUser(3, {
  name: "ACTUALIZADORX"
});

console.table([getUserByID(3)].map(user => ({
  id: user.id,
  name: user.name,
  email: user.email,
  joined_at: user.joined_at.toISOString()
})));

// PUNTO 6:
console.log("<-------------------- PUNTO 6 -------------------->");
deleteUser(1);
console.log("User 1 deleted");

console.table(getAllUsers().map(user => ({
  id: user.id,
  name: user.name,
  email: user.email,
  joined_at: user.joined_at.toISOString()
})));

// PUNTO 7:
console.log("<-------------------- PUNTO 7 -------------------->");
console.log("Create 5 tags");

createNewTag("Work", "#A875DB");
createNewTag("Personal", "#F5A623");
createNewTag("Urgent", "#FF0000");
createNewTag("Shopping", "#00FF00");
createNewTag("Fitness", "#0000FF");

console.table(getAllTags().map(tag => ({
  id: tag.id,
  name: tag.name,
  color: tag.color
})));

// PUNTO 8:
console.log("<-------------------- PUNTO 8 -------------------->");
console.log("Tag 4 before update:");

console.table([getTagByID(4)].map(tag => ({
  id: tag.id,
  name: tag.name,
  color: tag.color
})));

updateTag(4, {
  name: "ETIQUETADORX",
  color: "#fcba03"
});

console.log("Tag 4 after update:");
console.table([getTagByID(4)].map(tag => ({
  id: tag.id,
  name: tag.name,
  color: tag.color
})));

// PUNTO 9:
console.log("<-------------------- PUNTO 9 -------------------->");
console.log("Tag to delete:");

console.table([getTagByID(2)].map(tag => ({
  id: tag.id,
  name: tag.name,
  color: tag.color
})));

deleteTag(2);
console.log("Tag 2 deleted");

console.table(getAllTags().map(tag => ({
  id: tag.id,
  name: tag.name,
  color: tag.color
})));

// PUNTO 10:
console.log("<-------------------- PUNTO 10 -------------------->");
console.log("Create 7 tasks");

createNewTask("Meal prep", "Prepare meals for the week", "2026-10-01", 2, "A", [1, 4, 5]);
createNewTask("Gym", "Go to the gym", "2026-10-02", 2, "F", [3, 5]);
createNewTask("Shopping", "Go shopping", "2026-10-03", 2, "C", [1, 4]);
createNewTask("Reading", "Read a book", "2026-10-04", 2, "A", [1, 3]);
createNewTask("Coding", "Work on a coding project Dorx", "2026-10-05", 2, "A", [4, 5]);
createNewTask("Writing", "Write an article", "2026-10-06", 2, "C", [1, 3]);
createNewTask("Learning", "Learn something new", "2026-10-07", 2, "F", [1, 5]);

console.table(getAllTasks().map(task => ({
  id: task.id,
  title: task.title,
  description: task.description,
  due_date: task.due_date,
  owner: task.owner,
  status: task.status,
  tags: JSON.stringify(task.tags)
})));

// PUNTO 11:
console.log("<-------------------- PUNTO 11 -------------------->");
console.log("Task 5 before update:");

console.table([getTaskById(5)].map(task => ({
  id: task.id,
  title: task.title,
  tags: JSON.stringify(task.tags)
})));

updateTask(5, {
  tags: []
});

console.log("Task 5 after update:");
console.table([getTaskById(5)].map(task => ({
  id: task.id,
  title: task.title,
  tags: JSON.stringify(task.tags)
})));

// PUNTO 12:
console.log("<-------------------- PUNTO 12 -------------------->");
console.log("Tasks 1 and 4 before update:");

console.table([getTaskById(1), getTaskById(4)].map(task => ({
  id: task.id,
  title: task.title,
  description: task.description
})));

updateTask(1, {
  description: "Dorx Task"
});

updateTask(4, {
  description: "Dorx Task"
});

console.log("Tasks 1 and 4 after update:");
console.table([getTaskById(1), getTaskById(4)].map(task => ({
  id: task.id,
  title: task.title,
  description: task.description
})));

// PUNTO 13:
console.log("<-------------------- PUNTO 13 -------------------->");
console.log("Filter tasks by Dorx");

console.table(searchTasks("description", "Dorx").map(task => ({
  id: task.id,
  title: task.title,
  description: task.description
})));

// PUNTO 14:
console.log("<-------------------- PUNTO 14 -------------------->");
console.log("Tasks with tag 4 or 5:");

console.table(findTasksByTag([4, 5]).map(task => ({
  id: task.id,
  title: task.title,
  tags: JSON.stringify(task.tags)
})));

// PUNTO 15:
console.log("<-------------------- PUNTO 15 -------------------->");
console.log("Task to delete:");

console.table([getTaskById(3)].map(task => ({
  id: task.id,
  title: task.title,
  description: task.description
})));

deleteTask(3);
console.log("Task 3 deleted");

console.table(getAllTasks().map(task => ({
  id: task.id,
  title: task.title,
  description: task.description,
  due_date: task.due_date,
  owner: task.owner,
  status: task.status,
  tags: JSON.stringify(task.tags)
})));