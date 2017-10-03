export default function classesStore(store = [''], action) {

    if ( action.type === "GET-INIT-CLASSES" ) {

        return action.payload
    }

    return store;
}
