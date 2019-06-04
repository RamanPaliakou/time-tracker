// meant to use state as incoming
export const createCardCreationFunction = (value) => () => {
    if (typeof value.id !== "string") {
        console.log('Attempt to create timeCard failed. Id not passed');
        return;
    }
    var card = {
        id: value.id,
        title:  value.title ,
        estimate:  value.estimate ,
        timeSpent:  value.timeSpent,
        status:  value.status ,
        startedTime:  value.startedTime ,
        completed:  value.completed,
        started: value.started,
    }
    if (card.started && !card.completed)
        card.timeSpent += value.timePassed;
    return card;
}