import * as d3 from "d3";

export class CTOEChart {
  constructor(width, height, margin, data, parties) {
    this.data = data;
    this.parties = parties;
    this.selectedParties = [...this.parties];
    this.width = width;
    this.height = height;
    this.xAxis = d3
      .scaleBand()
      .domain(this.parties)
      .rangeRound([0, this.width])
      .paddingOuter(0)
      .paddingInner([0.15]);

    this.svg = this.createSVG(this.width, this.height, margin);
    this.addFilterCheckboxes();
    this.addBars();
    this.addAxis();
  }

  update(data, parties) {
    this.data = data;
    this.parties = parties;
    this.addBars();
  }

  createSVG(width, height, margin) {
    const svg = d3
    .select("#d3-bar-wrapper")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    return svg;
  }

  addFilterCheckboxes() {
    const partyContainers = d3.select('#checkbox-wrapper')
      .selectAll('div')
      .data(this.parties)
      .enter()
      .append('div')
      .attr("class", "relative flex items-start py-2");

    partyContainers.append("label")
      .attr("class", "flex-1 min-w-0 text-lg text-gray-700 cursor-pointer")
      .attr("for", (d, i) => `party-${i}`)
      .text((d) => d);

    partyContainers.append("div")
    .attr("class", "flex-none items-center h-5 ml-3")
    .append("input")
    .attr(
      "class",
      "w-5 h-5 text-gray-600 border-gray-300 rounded cursor-pointer focus:ring-gray-500"
    )
    .attr("id", (d, i) => `party-${i}`)
    .attr("name", (d, i) => `party-${i}`)
    .attr("type", "checkbox")
    .attr("checked", "true");
    
    /* TODO: eventlistener and function to filter out selected party */
    /* TODO: select all partys eventlistener */
  }

  addBars() {
    const context = this;

    const maxCount = d3.max(
      Object.values(this.data).map((el) => {
        return el.length;
      })
    );

    // BARCHART
    const partyWrappers = this.svg
      .selectAll('g')
      .data(this.parties)
      .enter()
      
    partyWrappers
      .append("clipPath")
      .attr("id", (d, i) => `bar-clipPath-${i}`)
      .append("rect")
      .attr("x", (d) => context.xAxis(d))
      .attr("y", 0)
      .attr("width", context.xAxis.bandwidth())
      .attr("height", context.height);

    const barGroup = partyWrappers.append('g');

    barGroup.selectAll('rect')
      .data((d, i) => context.data[d])
      .enter()
      .append('rect')
      .attr("x", (d) => {
        return context.xAxis(d.calledOut.party);
      })
      .attr("y", (d, i) => {
        const sliceHeight = context.height / maxCount;
        return context.height - sliceHeight - sliceHeight * i;
      })
      .attr("width", context.xAxis.bandwidth())
      .attr("height", context.height / maxCount)
      .attr("class", "bar-slice")
      .on("mousemove", function (event, d) {
        /* tooltip position & content */
        const xPosition =
          parseFloat(d3.select(this).attr("x")) + context.xAxis.bandwidth();
        const yPosition = parseFloat(d3.pointer(event, this)[1]);
        //Update the tooltip position and value
        d3.select("#tooltip")
          .style("left", xPosition + "px")
          .style("top", yPosition + "px")
          .select("#name")
          .text(d.calledOut.name);
        d3.select("#tooltip").select("#party").text(d.calledOut.party);
        //Show the tooltip
        d3.select("#tooltip").classed("hidden", false);
      })
      .on("mouseout", function () {
        //Hide the tooltip
        /* TODO: check if mouse is over tooltip - dont hide it */
        d3.select("#tooltip").classed("hidden", true);
      });
    
    barGroup.selectAll('line')
      .data((d, i) => context.data[d])
      .enter()
      .append('line')
      .attr("x1", (d) => {
        return context.xAxis(d.calledOut.party);
      })
      .attr("x2", (d) => {
        return context.xAxis.bandwidth() + context.xAxis(d.calledOut.party);
      })
      .attr("y1", (d, i) => {
        return context.height - (context.height / maxCount) * (i + 1);
      })
      .attr("y2", (d, i) => {
        return context.height - (context.height / maxCount) * (i + 1);
      })
      .attr("class", "bar-divider");
      
  }

  addAxis() {
    // const xDomain = [...new Set(periods[0].parties.map((el) => el.name))];

    this.svg
      .append("g")
      .attr("transform", `translate(0, ${this.height})`)
      .call(d3.axisBottom(this.xAxis).tickSizeOuter(0))
      .call((g) => g.select(".domain").remove())
      .call((g) => g.selectAll("line").remove())
      .selectAll("text")
      .style("font-size", "20px");
  }
  /*
  * TODO: Still needed?
  * Y Axis

  const lengths = Object.keys(currentSelection).map(
    (key) => currentSelection[key].length
  );

  const yMax = d3.max(lengths);
  const yAxis = d3.scaleLinear().domain([0, yMax]).range([this.height, 0]);
  */
}



