var store = require('./index')

store().setInitialData({teste: '', nome: '', email: ''})

store().setData({key:'teste', data: 'teste'})
    .then((s) => console.log('set', s))

store().getData('teste')
    .then((g) => console.log('get', g))

store().getAllData()
    .then((a) => console.log('all', a))
    .then(() => {
        store().deleteData('teste')
            .then(d => console.log('delete', d))
    })
