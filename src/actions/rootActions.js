export function changeColor(payload) {
    return {
        type: "CHANGE_COLOR",
        payload: payload
    };
}

export function changeColorBack(payload) {
    return {
        type: "CHANGE_COLOR_BACK",
        payload: payload
    };
}