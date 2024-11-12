{
    function  getProperty<T , K extends keyof T>(obj: T, key:K):T[K]{
        return obj [key]
    }
    let person = {
        name: "Alice",
        age: "30"
    }
    console.log(getProperty(person, "name"));
    console.log(getProperty(person, "age"));
}