export default function projectsStore(store = [''], action) {

    if ( action.type === "GET-INIT-PROJECTS" ) {

        return action.payload
    }

    return store;
}
