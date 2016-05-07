// user.name must be a string
isTrue(typeof user.name === 'string')

// user.name must be longer than 3
isTrue(user.name.length > 3)

// user.name must contain only alphanumeric characters or _, -, . separators
isTrue(/^[A-Za-z0-9_.-]+$/.test(user.name))

// user.name must not start with a separator
isFalse(/^[_.-]/.test(user.name))

// user.name must not end with a separator
isFalse(/[_.-]$/.test(user.name))

// user.name must not have consecutive separators
isFalse(/[_.-]{2}/.test(user.name))

// user.password must be a string
isTrue(typeof user.password === 'string')

// user.password must be longer than 6
isTrue(user.password.length > 6)

// user.password must have at least a letter
isTrue(/[A-Za-z]/.test(user.password))

// user.password must have at least a number
isTrue(/[0-9]/.test(user.password))

// check user in the server
server.user.check(user)
// if the user already exists, it will login, otherwhise create it.

// Tests can save data that you may access later on
// this test export the user for your next tests

store.set('user', user)

completed('variables')