export default function aboutStore(store = [''], action) {

    if ( action.type === "GET-INIT-ABOUT" ) {

        return action.payload
    }

    return store;
}
