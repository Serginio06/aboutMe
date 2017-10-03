/**
 * Created by sergiiivanchenko on 27/09/2017.
 */
import aboutJson from './../data/about.json';
import hobbiesJson from './../data/hobbies.json';
import projectsJson from './../data/projects.json';
import classesJson from './../data/classes.json';
import quotesJson from './../data/quotes.json';


export const asyncGetInitAboutParagraphs = () => dispatch => {

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


export const asyncGetInitProjects = () => dispatch => {

    setTimeout (()=> {
        // fetch (hobbiesJson).then (resp =>resp.json ()).then (resp=> {
        dispatch ({
            type: "GET-INIT-PROJECTS",
            // payload: resp
            payload: projectsJson
        })
        // });

    }, 0)
};


export const asyncGetInitClasses = () => dispatch => {

    setTimeout (()=> {
        // fetch (hobbiesJson).then (resp =>resp.json ()).then (resp=> {
        dispatch ({
            type: "GET-INIT-CLASSES",
            // payload: resp
            payload: classesJson
        })
        // });

    }, 0)
};

export const asyncGetInitQuotes = () => dispatch => {

    setTimeout (()=> {
        // fetch (hobbiesJson).then (resp =>resp.json ()).then (resp=> {
        dispatch ({
            type: "GET-INIT-QUOTES",
            // payload: resp
            payload: quotesJson
        })
        // });

    }, 0)
};