export function changeValue(e) {
    console.log('changeValue')
    return {
        type: "VALUE_CHANGED",
        payload: e.target.value //dado que vem junto de uma ação
    }
}