export default function hobbiesStore(store = [''], action) {

    if ( action.type === "GET-INIT-HOBBIES" ) {

        return action.payload
    }

    return store;
}
