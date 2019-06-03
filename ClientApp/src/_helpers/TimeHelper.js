const createTimeDiferenceFunction = (value) => () => {

    const diffTime = value;

    if (value === 0) return 'Immediate';

    let diffSeconds = parseInt(diffTime / 1000);
    let diffMinutes = parseInt(diffSeconds / 60);
    let diffHours = parseInt(diffMinutes / 60);
    let diffDays = parseInt(diffHours / 24);

    diffSeconds = diffSeconds % 60;
    diffMinutes = diffMinutes % 60;
    diffHours = diffHours % 24;

    var cd = '';
    if (diffDays !== 0) {
        cd += (diffDays + ' days ');
    }
    if (diffHours !== 0) {
        cd += (diffHours + ' hours ');
    }
    if (diffMinutes !== 0) {
        cd += (diffMinutes + ' minutes ');
    }
    cd += (diffSeconds + ' seconds');

    return cd;
}

export default createTimeDiferenceFunction;