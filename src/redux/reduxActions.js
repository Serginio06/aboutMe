/**
 * Created by sergiiivanchenko on 27/09/2017.
 */
import aboutJson from './../data/about.json';
import hobbiesJson from './../data/hobbies.json';


export const asyncGetInitAboutParagraphs = () => dispatch => {
    
    console.log('aboutJson= ', aboutJson);

    setTimeout (()=> {
        // fetch ('./build/data/about.json').then (resp =>resp.json ()).then (resp=> {
        // fetch (aboutJson).then (resp =>resp.json ()).then (resp=> {
            dispatch ({
                type: "GET-INIT-ABOUT",
                payload: aboutJson
            });
        // });

    }, 0)
};


export const asyncGetInitHobbies = () => dispatch => {

    setTimeout (()=> {
        // fetch (hobbiesJson).then (resp =>resp.json ()).then (resp=> {
            dispatch ({
                type: "GET-INIT-HOBBIES",
                // payload: resp
                payload: hobbiesJson
            })
        // });

    }, 0)
};
