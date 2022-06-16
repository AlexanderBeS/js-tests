console.log('Request data...')

const p = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('Preparing data...')
        const backendData = {
            server: 'aws',
            port: 8080,
            status: 'success'
        }
        resolve(backendData)
    }, 2000)
})

p.then((data) => {
    console.log('Promise resolved', data)
})
    .catch(err => console.log('Error: ', err))
    .finally(() => console.log('Finally'))

//-------------------------
const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms)
    })
}
//передаём массив промисов, возвращает промис, выполнен только тогда, когда завершатся все промисы в массиве
Promise.all([sleep(2000), sleep(5000)])
    .then(() => {
        console.log('All promises')
    })

//принимает массив, когда выполнется самый быстрый промис, то race отработает
Promise.race([sleep(2000), sleep(5000)])
    .then(() => {
        console.log('Race promises')
    })



