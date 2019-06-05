import { _timeCards } from '../Mock/TimeCardData';

const getTimeCards = (status) => new Promise((resolve, reject) => {
        return setTimeout(() => {
            if (typeof (status) !== "undefined")
                resolve(_timeCards.filter(tc => (tc.status === status)));
            else resolve (_timeCards);
        }, 500);
    }
    )
     


export { getTimeCards }