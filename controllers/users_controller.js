const createUser = (name, email, passsword) => {
    data.users.push(new User(name, email, passsword));
};

const getUserByID = (id) => {
    const user = data.users.find(user => user.id === id);
    if (!user){
        return("404 - User not found");
    }
    return user;
}

const searchUsers = (attribute, value) => {
    if (attribute === "constructor" || !User.prototype.hasOwnProperty(attribute)){
        throw new UserException("Users have no attribute " + attribute);
    }
    return data.users.filter(user => {
        const dato = attribute === "joined_at"
        ? user[attribute].toISOString().slice(0,10)
        : String(user[attribute]);

        return dato.toLowerCase().includes(String(value).toLowerCase());
    });
};

const getAllUsers = () => {
    return data.users;
}

const updateUser = (id, obj_new_info) => {
    const user = data.users.find(user => user.id === id);
    if ( user === undefined){
        throw new UserException("404 - User not found");
    }
    let updated = false;
    for (const [key, value] of Object.entries(obj_new_info)){
        if (key !== "constructor" && User.prototype.hasOwnProperty(key)){
            user[key] = value;
            updated = true;
        }
    }
    if (!updated){
        throw new UserException("No valid attributes to update");
    }
    return true;
}

const deleteUser = (id) => {
    const index = data.users.findIndex(user => user.id === id);
    if (index === -1){
        throw new UserException("404 - User not found");
    }

    const hasTasks = data.tasks.some(task => task.owner === id);
    if (hasTasks) {
        throw new UserException("Cannot delete user with assigned tasks");
    }
    
    data.users.splice(index, 1);
    return true;
}
