import "./style.css";
import "./js/barChart.js";

import { getMonthsBetweenTwoDates } from './js/functions.js';
import { CTOERangeSlider } from './js/timeline.js';
import { callsToOrder, periods } from "/testData/testDataBarCahrt.js";

/* TIMELINE */
const months = getMonthsBetweenTwoDates(new Date('2020-01-01'), new Date('2022-12-01'));
const margin = { top: 25, right: 20, bottom: 25, left: 20 };
const timelineSettings = {
  width: 800 - margin.left - margin.right,
  height: 100 - margin.top - margin.bottom,
}

const timeline = new CTOERangeSlider(timelineSettings.width, timelineSettings.height, margin, callsToOrder, months);

timeline.onValueChange((selectedMonths) => {
  console.log(selectedMonths);
});