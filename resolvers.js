
const user = {
    _id: 1,
    name: "Artem",
    email: "iart1756@gmail.com",
    picture: "https://cloudinary.com/asdf"
}

module.exports = {
    Query: {
        me: () => user
    }
}