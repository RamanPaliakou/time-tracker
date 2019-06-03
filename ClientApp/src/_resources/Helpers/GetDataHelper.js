import { _timeCards } from '../../_mock/TimeCardData';

const getTimeCards = (status) => new Promise((resolve, reject) => {
        console.log('status',status);
        return setTimeout(() => {
            if (typeof (status) !== "undefined")
                resolve(_timeCards.filter(tc => (tc.status === status)));
            else resolve (_timeCards);
        }, 500);
    }
    )
     


export { getTimeCards }