export function getCallsForPartiesInDateRange(
  from,
  to,
  parties,
  callToOrderData
) {
  const result = {};
  parties.forEach((party) => {
    result[party] = [];
    const filteredData = callToOrderData.filter((callToOrder) => {
      const isCallForSelectedParty = callToOrder.calledOut.party === party;
      const isCallInDateRange =
        new Date(callToOrder.date) >= from && new Date(callToOrder.date) <= to;
      return isCallInDateRange && isCallForSelectedParty;
    });
    result[party].push(...filteredData);
  });
  return result;
}

export function addLeadingZeros(input, amount) {
  return (input + Math.pow(10, amount)).toString().substring(1, amount + 1);
}

export function getMonthsBetweenTwoDates(from, to) {
  const fromData = {
    year: from.getFullYear(),
    month: from.getMonth(),
  };

  const toData = {
    year: to.getFullYear(),
    month: to.getMonth(),
  };

  const months = [];

  for(let year = fromData.year; year <= toData.year; year++) {
    for(let month = fromData.month; month < 12; month++) {
      months.push({
        year: year,
        month: month,
        label: `${year}-${addLeadingZeros(month + 1, 2)}`
      });
    }
  }

  return months;
}