export default function quotesStore(store = [''], action) {

    if ( action.type === "GET-INIT-QUOTES" ) {

        return action.payload
    }

    return store;
}
