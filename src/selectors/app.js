export const selectThings = state => state.app.things

export const selectThingById = (state,id) => state.app.things.byIds[id]
