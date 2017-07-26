$(function () {
  var width = 960,
    height = 700,
    radius = (Math.min(width, height) / 2) - 10;

  var title = "Portland Food Cart Pods";

  var formatNumber = d3.format(",d");

  var x = d3.scaleLinear()
    .range([0, 2 * Math.PI]);

  var y = d3.scaleSqrt()
    .range([0, radius]);

  var colores_g = ["#3366cc", "#dc3912", "#ff9900", "#109618", "#990099", "#0099c6", "#dd4477", "#66aa00", "#b82e2e", "#316395", "#994499", "#22aa99", "#aaaa11", "#6633cc", "#e67300", "#8b0707", "#651067", "#329262", "#5574a6", "#3b3eac"];

  var color = d3.scaleOrdinal(colores_g);

  var partition = d3.partition();

  var arc = d3.arc()
    .startAngle(function (d) { return Math.max(0, Math.min(2 * Math.PI, x(d.x0))); })
    .endAngle(function (d) { return Math.max(0, Math.min(2 * Math.PI, x(d.x1))); })
    .padAngle(.01)
    .padRadius(radius / 3)
    .innerRadius(function (d) { return Math.max(0, y(d.y0)); })
    .outerRadius(function (d) { return Math.max(0, y(d.y1) - 1); });

  var svg = d3.select("#foodCartGraph")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + (height / 2) + ")");

  d3.json("assets/foodCartData.json", function (error, root) {
    if (error) throw error;

    var foodCartTooltip = d3.select(".foodCarts").append("div").attr("class", "toolTip");

    root = d3.hierarchy(root);
    root.sum(function (d) { return d.size; });

    var center = svg.append("circle")
        .data(partition(root).descendants())
      .attr("r", radius / 2)
      .on("click", click);

    svg.selectAll("path")
        .data(partition(root).descendants().slice(1))
      .enter().append("path")
        .attr("d", arc)
        .style("fill", function (d, i) { return color((d.children ? d : d.parent).data.name); })
        .on("click", click)
        .on("mousemove", function(d){
          foodCartTooltip
            .style("left", d3.event.pageX - 60 + "px")
            .style("top", d3.event.pageY - 85 + "px")
            .style("display", "inline-block")
            .html(d.data.name + "<br>" + d.data.comment)
        })
        .on("mouseout", function(d){
          foodCartTooltip.style("display", "none");
        });

    $("#foodCartTitle").text(title);
  });

  function click(d) {
    svg.transition()
      .duration(600)
      .tween("scale", function () {
        title = d.data.name;
        $("#foodCartTitle").text(title);
        $("#foodCartTitle").css("color", color((d.children ? d : d.parent).data.name));
        var xd = d3.interpolate(x.domain(), [d.x0, d.x1]),
          yd = d3.interpolate(y.domain(), [d.y0, 1]),
          yr = d3.interpolate(y.range(), [d.y0 ? 20 : 0, radius]);
        return function (t) { x.domain(xd(t)); y.domain(yd(t)).range(yr(t)); };
      })
      .selectAll("path")
      .attrTween("d", function (d) { return function () { return arc(d); }; });
  }

  d3.select(self.frameElement).style("height", height + "px");
});