const moment = require('moment');

export const filterByDate = (type, data) => {
    const byDate = data.filter(attend => moment(attend.checkin).format('dddd') === `${type}`);
    return byDate;
};

export const truncate = (elem, limit) => {
    if (!elem || !limit) return;

    const content = elem.split('').slice(0, limit).join('');
    return `${content}...`;
}

export const filterByMonth = (data, number) => {
    if (data === null) {
        return false;
    }

    const start = moment().add(number, 'months').startOf('month');
    const end = moment().add(number, 'months').endOf('month');

    return moment(data).isBetween(start, end);
}

export const generateDataSlide = (data, type) => {
    // console.log('in', data);
    return {
        date: moment(data).format('dddd Do MMMM YYYY'),
        inHour: moment(data).format('h:mm:a'),
        day: parseInt(moment(data).format('DD'), 10),
        status: `${type}`
    };
}

export function removeDuplicates(myArr, prop) {
    return myArr.filter((obj, pos, arr) => {
        return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
    });
}

export const generateSlideMonth = (data, number) => {
    const attends = data.attendances.filter(att => {
            return filterByMonth(att.checkin, number);
        })
        .map(att => generateDataSlide(att.checkin, 'attend'));
        const over = data.attendances.filter(att => {
            return filterByMonth(att.checkin, number);
        })
        .filter(over => {
            return over.overTime !== '';
        })
        .map(att => generateDataSlide(att.checkin, 'over'));

    const late = data.lates.filter(late => {
            return filterByMonth(late.date, number);
        })
        .map(late => generateDataSlide(late.date, 'late'));

    const leave = data.leaves.filter(leave => {
            return filterByMonth(leave.date, number);
        })
        .map(leave => generateDataSlide(leave.date, 'leave'))
    const mergeData = [...late, ...over, ...attends, ...leave];
    const slideData = removeDuplicates(mergeData, 'day').sort(function (first, second) {
        return first.day - second.day;
    });
    return slideData;
}

export const average = (time, length) => {
    if (time.length === 0) {
        return 0;
    }

    return Math.floor(time.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0) / length );
}

export const countOccurence = function (arr) {
    let result = [];
    for (let i = 0; i < 31; i++) {
        result[i] = 0;
    }
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < 31; j++) {
            if (arr[i] === j) {
                result[j]++;
            }
        }
    }
    result.shift();
    // console.log('result', result);
    return result;
}

export const totalHoursInMonth = (arr) => {
      let res = [];
      for (let i = 0 ; i < 31; i++) {
        res[i] = 0;
      };
      // console.log(res);

      for (let i = 0; i < arr.length; i++) {
        for (let j = 0 ; j < 31; j++ ) {
          if (arr[i].day === j) {
            res[j] += arr[i].hours;
          }
        }
      }
      res.shift();

    //   console.log(res);

      return res.map(res => Math.floor(res));
}

export const sortByDay = (data, type) => {
    return data.map(item => {
        return parseInt(moment(item[type]).format('DD'), 10)
      }).sort(function(first, second) {
        return first.day - second.day
      })
};

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

export const getModalStyle = () => {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}