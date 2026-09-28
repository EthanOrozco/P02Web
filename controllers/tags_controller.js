const createNewTag = (name, color) => {
    const newTag = new Tag(name, color);
    data.tags.push(newTag);
    return newTag;
}

const getTagByID = (id) => {
    const tag = data.tags.find(tag => tag.id === id);
    if (tag === undefined) {
        return "404 - Tag not found";
    }
    return tag;
}

const searchTags = (attribute, value) => {
    if (attribute === "constructor" || !Tag.prototype.hasOwnProperty(attribute)) {
        throw new TagException("Tags have no attribute " + attribute);
    }
    return data.tags.filter(tag => {
        const data = String(tag[attribute]);
        return data.toLowerCase().includes(String(value).toLowerCase());
    });
}

const getAllTags = () => {
    return data.tags;
}

const updateTag = (id, obj_new_info) => {
    const tag = data.tags.find(tag => tag.id === id);
    if(tag === undefined) {
        throw new TagException("Tag with ID " + id + " does not exist");
    }
    let updated = false;
    for (const [key, value] of Object.entries(obj_new_info)) {
        if (key !== "constructor" && Tag.prototype.hasOwnProperty(key)) {
            tag[key] = value;
            updated = true;
        }
    }
    if (!updated) {
        throw new TagException("No valid attributes to update");
    }
    return true;
}

const deleteTag = (id) => {
    const index = data.tags.findIndex(tag => tag.id === id);
    if (index === -1) {
        throw new TagException("Tag with ID " + id + " does not exist");
    }

    const taskUsingTag = data.tasks.filter(
        task => task.tags.includes(id)
    )
    if (taskUsingTag.length > 0) {
        const Tasks = taskUsingTag
            .map(task => `${task.id}: ${task.title}`)
            .join(", ");    
        throw new TagException(
            `Cannot delete tag, it is used by: ${Tasks}`
        );
    }
    data.tags.splice(index, 1);
    return true;
}
