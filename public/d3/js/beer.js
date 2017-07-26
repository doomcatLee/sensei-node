$(function(){
  console.log("HEY");
  var hoverColor = "#0099C6";
  var staticColor  = "#DD4477";
  var svg = d3.select("#beerSvg"),
    margin = {top: 20, right: 20, bottom: 30, left: 80},
    width = 800;
    height = 500;

    var tooltip = d3.select(".beerGraph").append("div").attr("class", "toolTip");

    var x = d3.scaleLinear().range([0, width]);
    var y = d3.scaleBand().range([height, 0]);

    var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var data = [
          {label:"IPA", value:1452},
          {label:"Saison", value:645},
          {label:"Wild Ale", value:177},
          {label:"Fruit Beer", value:207},
          {label:"Sour Ale", value:522},
          {label:"Pale Ale", value:667},
          {label:"Imperial/Double", value:436}
      ];
      x.domain([0, d3.max(data, function(d) { return d.value; })]);
      y.domain(data.map(function(d) { return d.label; })).padding(0.2);

      g.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")

      g.append("g")
      .attr("class", "y axis")
      .call(d3.axisLeft(y));

      g.selectAll(".bar")
      .data(data)
      .enter().append("rect")
      .attr("class", "bar")
      .attr("x", 0)
      .transition()
      .duration(1500)
      .attr("height", y.bandwidth())
      .style("fill", staticColor)

      .attr("y", function(d) { return y(d.label); })
      .attr("width", function(d) { return x(140); });
      g.selectAll(".bar").on("mousemove", function(d){
        tooltip
        .style("left", d3.event.pageX - 50 + "px")
        .style("top", d3.event.pageY - 70 + "px")
        .style("display", "inline-block")
        .html((d.label));
      })
      .on("mouseout", function(d){ tooltip.style("display", "none");
      d3.select(this)
      .transition()
      .duration(1500)
      .style("stroke","none")
      .style("fill", staticColor);
      });


      g.selectAll(".bar").on("click", function(){


      x.domain([0, d3.max(data, function(d) { return d.value; })]);
      y.domain(data.map(function(d) { return d.label; })).padding(0.2);

      g.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")

      g.append("g")
      .attr("class", "y axis")
      .call(d3.axisLeft(y));

      g.selectAll(".bar")
      .transition()
      .duration(1500)
      .attr("height", y.bandwidth())
      .attr("y", function(d) { return y(d.label); })
      .attr("width", function(d) { return x(d.value); });
      g.selectAll(".bar").on("mousemove", function(d){
        tooltip
        .style("left", d3.event.pageX - 50 + "px")
        .style("top", d3.event.pageY - 70 + "px")
        .style("display", "inline-block")
        .html((d.label + ", " + d.value));
      })
      .on("mouseout", function(d){ tooltip.style("display", "none");
        d3.select(this)
          .transition()
          .duration(1500)
          .style("stroke","none")
          .style("fill", staticColor);
        ;}
      );
      d3.select(".beerResults").html("American IPA is by far the most popular brewed and consumed style of beer in Portland. <a href='http://www.portlandbeer.org/beer/styles'>PortlandBeer.org</a> tracks over 10,000 beers from 99 breweries in PDX. There are currently 1452 American IPAs tracked by PortlandBeer.org.");
    });
    g.selectAll(".bar").on('mouseover', function(){
      d3.select(this)
      .style("fill", hoverColor)
      .style("stroke", hoverColor);
      });
});
