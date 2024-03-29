import * as d3 from "d3";

export class CTOEChart {
  constructor(width, height, margin, data, parties) {
    this.data = data;
    this.parties = parties;
    this.maxCount = d3.max(
      Object.values(this.data).map((el) => {
        return el.length;
      })
    );
    this.selectedParties = [...this.parties];
    this.width = width;
    this.height = height;
    this.xAxis = d3
      .scaleBand()
      .domain(this.selectedParties)
      .rangeRound([0, this.width])
      .paddingOuter(0);

    this.svg = this.createSVG(this.width, this.height, margin);
    this.addFilterCheckboxes();
    this.drawAxis();
    this.drawBars();
    this.update(this.data, this.selectedParties);
  }

  update(data, parties) {
    console.log({...this.selectedParties});
    this.data = data;
    this.selectedParties = parties;
    console.log(this.selectedParties);
    this.xAxis.domain(this.selectedParties);
    this.drawBars();
    this.drawAxis();
    // this.drawLabels();
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
    const context = this;
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
    .attr("checked", "true")
    .attr('value', (d) => d)
    .on('click', (e) => {
      context.update(context.data, context.getSelectedParties());
    });
  }

  getSelectedParties() {
    const elements = document.querySelectorAll('input[type=checkbox]');
    const selectedParties = [];
    elements.forEach((element) => {
      if(element.checked) selectedParties.push(element.value)
    });
   return selectedParties;
  }
  
  drawLabels() {
    const context = this;
    const labels = this.svg.selectAll('text')
      .data(this.selectedParties);
    labels.exit().remove();
    labels.enter().append('text')
    .text((d) => d)
    .attr('x', (d, i) => i * context.xAxis.bandwidth())
    .attr('y', context.height)
    .attr('fill', 'black');
  }

  drawBars() {
    const context = this;

    const groups = this.svg.selectAll('g.party')
      .data(this.selectedParties);

    groups.join(
      function(enter){
        return enter.append('g')
          .attr('class', 'party');
      },
      function(update){
        return update.attr('transform', (d, i) => `translate(${i*context.xAxis.bandwidth()},0)`);
      },
      function(exit){
        return exit.remove();
      },
    ) 

    const bars = groups.selectAll('rect')
      .data((d, i) => {return context.data[d]});

    const gap = 20;
    bars.join(
      function(enter){
        return enter.append('rect')
        .attr("x", gap / 2)
        .attr("y", (d, i) => {
          const sliceHeight = (context.height - 20) / context.maxCount;
          return (context.height - sliceHeight * i) - 50;
        })
        .attr("width", context.xAxis.bandwidth() - gap)
        .attr("height", ((context.height - 20) / context.maxCount) - 1)
        .attr("class", "bar-slice")
        .on("mousemove", function (event, d) {
          const xPosition = event.x + context.xAxis.bandwidth() / 3;
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
      },
      function(update){ return update.attr("width", context.xAxis.bandwidth() - gap) },
      function(exit){ return exit.remove() },
    );
      
    return;

    

    // BARCHART
    const partyBar = this.svg
      .selectAll('g.partyBar')
      .data(this.parties);

    partyBar.exit().remove();
    
    const clipPaths = partyBar
      .enter()
      .append("clipPath")
      .attr("id", (d, i) => `bar-clipPath-${i}`)
      .append("rect")
      .attr("x", (d) => context.xAxis(d))
      .attr("y", 0)
      .attr("width", context.xAxis.bandwidth())
      .attr("height", context.height);

    const bar = partyBar.enter().append('g').attr('class', 'partyBar');

    const barSlice = bar.selectAll('rect')
      .data((d, i) => context.data[d]);

    console.log(barSlice);

    barSlice.exit().remove();

    barSlice.enter()
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
    
    const seperatorLines = bar.selectAll('line')
      .data((d, i) => context.data[d]);

    seperatorLines.exit().remove();
    seperatorLines.enter()
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

  drawAxis() {
    // const xDomain = [...new Set(periods[0].parties.map((el) => el.name))];
    this.svg.selectAll('g.axis').remove();
    this.svg
      .append('g')
      .attr('class', 'axis')
      .attr("transform", `translate(0, ${this.height - 50})`)
      .call(d3.axisBottom(this.xAxis).tickSizeOuter(0))
      .call((g) => g.select(".domain").remove())
      .call((g) => g.selectAll("line").remove())
      .selectAll("text")
      .style("font-size", "16px");
  }
}