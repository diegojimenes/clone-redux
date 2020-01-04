var store = {}

const setInitialData = (data) => new Promise((ok) => {
    store = data
    return ok(store)
})

const setData = ({data, key}) => new Promise((ok) => {
    store = { ...store, [key]: data }
    return ok(store)
}) 

const getData = (key) => new Promise((ok) => ok(store[key]))

const getAllData = () => new Promise((ok) => ok(store))

const deleteData = (key) => new Promise((ok) => {
    let st = store
    delete st[key]
    
    store = st
    return ok(store)
})

module.exports = method = () => ({
    setInitialData: params => setInitialData(params),
    setData: params => setData(params),
    getData: params => getData(params),
    getAllData: () => getAllData(),
    deleteData: params => deleteData(params)
})

