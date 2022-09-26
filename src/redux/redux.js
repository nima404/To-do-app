
function kindOf(val) {
    return Object.prototype.toString.call(val).slice(8, -1).toLowerCase()
}
function createStore(reducerFunc, initialValue) {

    if (typeof reducerFunc !== "function") {
        throw new Error("reducer is not a function")
    }

    if (typeof initialValue === "function") {
        throw new Error("initialValue is Function")
    }

    let state = initialValue
    let listeners = []

    function getState() {
        return state
    }

    function dispacth(action) {
        if (!action.hasOwnProperty("type")) {
            throw new Error("action hasn't type")
        }
        if (typeof action.type !== "object") {
            throw new Error("action type not object")
        }

        try {
            state = reducer(state, action)
        } catch (error) {
            console.log(error);
        }

        for (const listener of listeners) {
            listener();
        }
    }


    function subscribe(listener) {
        if (typeof listener !== "function") {
            throw new Error("listener is not a function")
        }

        listeners.push(listener)

        return () => {
            const indexItem = listeners.indexOf(listener)
            if (indexItem > 0) {
                listeners.splice(indexItem, 1)
            }
        }
    }

    return {
        dispacth,
        subscribe,
        getState
    }
}

// const actions = {

// }

// const counterItem = {

// }

// const initial = {
//     value: 10
// }

// const store = createStore(counterItem, initial)

// const unsubscribe = store.unsubscribe(() => {

// })





// const arr = ["nima", "sajad", "alireza"]
// const newArr = []
// function undo(arr) {

// }