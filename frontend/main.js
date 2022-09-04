import "./style.css";

import { getMonthsBetweenTwoDates, getCallsForPartiesInDateRange, getAllPartiesFromDataset, normalizeData } from './js/functions.js';
import { CTOERangeSlider } from './js/timeline.js';
import { CTOEChart } from './js/barChart.js';
import { callsToOrder, periods } from "/testData/testDataBarCahrt.js";

/* expose for alpine */
window.normalizeData = normalizeData;

const allPossibleParties = getAllPartiesFromDataset(callsToOrder);

/* CHART */
const chartMargin = { top: 20, right: 10, bottom: 40, left: 10 };
const chartSettings = {
  width: 800,
  height: 400,
}

const chartData = getCallsForPartiesInDateRange(
  new Date('1980-01-01'),
  new Date('1990-01-01'),
  allPossibleParties,
  callsToOrder
);

const chart = new CTOEChart(chartSettings.width, chartSettings.height, chartMargin, chartData, allPossibleParties);

/* TIMELINE */
const thisMonth = new Date();
thisMonth.setDate(1);
const months = getMonthsBetweenTwoDates(new Date(`1949-01-01`), thisMonth);
const timelineMargin = { top: 20, right: 20, bottom: 20, left: 20 };
const timelineSettings = {
  width: 1000,
  height: 100,
}

const timeline = new CTOERangeSlider(timelineSettings.width, timelineSettings.height, timelineMargin, callsToOrder, months);

timeline.onValueChange((selectedMonths) => {
  console.log(
    getCallsForPartiesInDateRange(
      new Date(selectedMonths.from),
      new Date(selectedMonths.to),
      allPossibleParties,
      callsToOrder
    )
  );
});