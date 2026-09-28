const createNewTask = (title, description, dueDate, owner, status, tags) => {
  const newTask = new Task(
    title, description, dueDate, owner, status, tags
  );

  data.tasks.push(newTask);
  return newTask;
};

const getAllTasks = () => {
    return data.tasks;
}

const searchTasks = (attribute, value) => {
    if (attribute === "constructor" || !Task.prototype.hasOwnProperty(attribute)) {
        throw new TaskException("Tasks have no attribute " + attribute);
    }
    return data.tasks.filter(task => {
        const data = attribute === "due_date"
        ? new Date(task[attribute]).toISOString().slice(0, 10)
        : String(task[attribute]);

        return data.toLowerCase().includes(String(value).toLowerCase());
    });
}

const getTaskById = (id) => {
    const task = data.tasks.find(task => task.id === id);
    if (!task) {
        return "404 - Task not found";
    }
    return task;
}

const findTasksByTag = (tagIds) => {
    if (!Array.isArray(tagIds)) {
        throw new TaskException("tagIds must be an array");
    }
    for (const tagId of tagIds) {
        const tag = data.tags.find(tag => tag.id === tagId);

        if (!tag) {
            throw new TaskException(`Tag with ID ${tagId} not found`);
        }
    }
    return data.tasks.filter(task => 
        tagIds.some(tagId => task.tags.includes(tagId))
    );
};

const updateTask = (id, obj_new_info) => {
    const task = data.tasks.find(task => task.id === id);
    if (task === undefined) {
        throw new TaskException(`Task with ID ${id} not found`);
    }
    let updated = false;
    for (const [key, value] of Object.entries(obj_new_info)) {
        if (key !== "constructor" && Task.prototype.hasOwnProperty(key)) {
            task[key] = value;
            updated = true;
        }
    }
    if (!updated) {
        throw new TaskException("No valid attributes to update");
    }
    return true;
}

const deleteTask = (id) => {
    const index = data.tasks.findIndex(task => task.id === id);
    if (index === -1) {
        throw new TaskException("404 - Task not found");
    }
    data.tasks.splice(index, 1);
    return true;
}
