
import { state, changeState } from "./reducer"

const createStore = () => {
    // renderDom
    const render = (state) => {
        document.querySelector('#count').innerHTML = state.count
    }


    const dispatch = (action) => {
        changeState(action)
        render(state)
    }
    return {
        dispatch
    }
}

const store = createStore()

export default store

