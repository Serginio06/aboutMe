/**
 * Created by sergiiivanchenko on 27/09/2017.
 */

export const asyncGetInitAboutParagraphs = () => dispatch => {

    setTimeout (()=> {
        fetch ('./build/data/about.json').then (resp =>resp.json ()).then (resp=> {
            dispatch ({
                type: "GET-INIT-ABOUT",
                payload: resp
            })
        });

    }, 0)
};


export const asyncGetInitHobbies = () => dispatch => {

    setTimeout (()=> {
        fetch ('./build/data/hobbies.json').then (resp =>resp.json ()).then (resp=> {
            dispatch ({
                type: "GET-INIT-HOBBIES",
                payload: resp
            })
        });

    }, 0)
};
