const getNextUserID = () => {
  let biggestID = 0;
  for (const user of data.users){
    if (user.id > biggestID){
      biggestID = user.id;
    }
  }

  return biggestID + 1;
}

class UserException{
  constructor(errorMessage) {
    this.errorMessage = errorMessage;
  }
}

class User{
  #id;
  #name;
  #email;
  #password;
  #joined_at;
  constructor(name, email, password) {
    this.#id = getNextUserID();
    this.name = name;
    this.email = email;
    this.password = password;
    this.#joined_at = new Date();
  }
  get id() {
    return this.#id;
  }
  set id(value) {
    throw new UserException("IDs are auto-generated");
  }

  get name() {
    return this.#name;
  }

  get email() {
    return this.#email;
  }

  get password() {
    return this.#password;
  }
  
  get joined_at() {
    return this.#joined_at;
  }

  set joined_at(value) {
    throw new UserException("La fecha de registro no puede modificarse");
  }
  
  set name(value) {
    if (typeof value !== "string" || value.trim() === "") {
      throw new UserException("Name can not be blank");
    }
    this.#name = value.trim();
  }

  set email(value) {
    if (typeof value !== "string" || value.trim() === "") {
      throw new UserException("Email can not be blank");
    }
    const email = value.trim();
    const repetido = data.users.find(
      user => user.email === email && user !== this
    );
    if (repetido !== undefined) {
      throw new UserException("Emails should be unique");
    }
    this.#email = email;
  }
  
  set password(value) {
    if (typeof value !== "string" || value.trim() === "") {
      throw new UserException("Password can not be blank");
    }
    if (value.length < 8) {
      throw new UserException("Password should be at least 8 characters")
    }
    this.#password = value;
  }
}