const firebaseConfig = {
    apiKey: "AIzaSyBksOl4j1MrKt1aKcInSTyJaL97wSoDk3w",
    authDomain: "test1227-847ea.firebaseapp.com",
    databaseURL: "https://test1227-847ea-default-rtdb.firebaseio.com",
    projectId: "test1227-847ea",
    storageBucket: "test1227-847ea.appspot.com",
    messagingSenderId: "551012502419",
    appId: "1:551012502419:web:a8e087b086620d626ff666"
};

const model = firebase.initializeApp(firebaseConfig, firebaseConfig.appId);

async function write(value, path) {
    try {
        await model.database().ref(path).set(value)
        return true
    } catch (err) {
        return false
    }
}

async function read(path) {
    let snapshot = await model.database().ref(path).get()
    return snapshot.val()
}

function listen(path, callback) {
    model
        .database()
        .ref(path)
        .on('value', (snapshot) => {
            if (typeof callback === 'function') {
                callback(snapshot.val())
            }
        })
}

;(async () => {
    // let result = await write('BBB', 'test')
    // console.log(result)

    // let response = await read('test')
    // console.log(response)

    // listen('test', (value) => {
    //     console.log(value)
    // })
})()
