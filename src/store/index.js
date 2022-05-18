import { createStore} from 'vuex'

// The Vuex store manages the data (state) shared between components and enables a central access to it
export default createStore({

    // The shared data
    state: {
        imageURL : "/image.svg",
        storageURL : null,
    },
    // For getting the state
    getters: {
        getImageURL(state) {
            // state variable contains our state data
            return state.imageURL;
        },
        getStorageURL(state){
            return state.storageURL;
        }
    },

    // For changing the state (Synchronous)
    mutations: {
        setImageURL(state,value) {
            state.imageURL = value;
        },
        setStorageURL(state,value){
            state.storageURL = value;
        }
    },

    // For changing the state (Asynchronous)
    actions: {
    },

    modules: {
    }
})