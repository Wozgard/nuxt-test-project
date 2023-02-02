async function getDataFromDB() {
    const req = (await require("axios").get(`https://jsonplaceholder.typicode.com/users`)).data;
    return req
}

async function index() {
    let res = await getDataFromDB();
    return res
}

export { index };