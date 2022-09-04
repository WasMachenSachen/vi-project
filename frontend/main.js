import "./style.css";
import "./js/barChart.js";

import { getMonthsBetweenTwoDates } from './js/functions.js';
import { CTOERangeSlider } from './js/timeline.js';
import { callsToOrder, sampleCallsToOrder, periods } from "/testData/testDataBarCahrt.js";

/* TIMELINE */
const thisMonth = new Date();
thisMonth.setDate(1);
const months = getMonthsBetweenTwoDates(new Date(`1949-01-01`), thisMonth);
const margin = { top: 20, right: 20, bottom: 20, left: 20 };
const timelineSettings = {
  width: 1000,
  height: 100,
}

console.log(months);

const timeline = new CTOERangeSlider(timelineSettings.width, timelineSettings.height, margin, callsToOrder, months);

timeline.onValueChange((selectedMonths) => {
  console.log(selectedMonths);
});