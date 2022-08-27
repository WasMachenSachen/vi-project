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

export function normalizeData() {
  console.log("normalized!");
}
