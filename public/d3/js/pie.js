var pie = new d3pie("pie", {
	"header": {
		"title": {
			"text": "Media of Portland Art",
			"fontSize": 24,
			"font": "open sans"
		},
		"subtitle": {
			"text": " ",
			"color": "#999999",
			"fontSize": 12,
			"font": "open sans"
		},
		"titleSubtitlePadding": 30
	},
	"footer": {
		"color": "#999999",
		"fontSize": 10,
		"font": "open sans",
		"location": "bottom-left"
	},
	"size": {
		"canvasHeight": 540,
		"canvasWidth": 610,
		"pieInnerRadius": "50%",
		"pieOuterRadius": "110%"
	},
	"data": {
		"sortOrder": "label-desc",
		"content": [
			{
				"label": "Architectural",
				"value": 20,
				"caption": "Really cool building stuff",
				"color": "#2383c1"

				},
			{
				"label": "Ceramics",
				"value": 12,
				"color": "#64a61f"
			},
			{
				"label": "Drawing",
				"value": 1,
				"color": "#7b6788"
			},
			{
				"label": "Fiber",
				"value": 15,
				"color": "#961919"
			},
			{
				"label": "Water Fountains",
				"value": 3,
				"color": "#d8d239"
			},
			{
				"label": "Metals",
				"value": 8,
				"color": "#e98125"
			},
			{
				"label": "Mixed Media",
				"value": 7,
				"color": "#d0743c"
			},
			{
				"label": "Mosaics",
				"value": 2,
				"color": "#635122"
			},
			{
				"label": "Murals",
				"value": 80,
				"color": "#6ada6a"
			},
			{
				"label": "Paintings",
				"value": 149,
				"caption": "Really cool building stuff",
				"color": "#0b6197"
			},
			{
				"label": "Photography",
				"value": 30,
				"color": "#7c9058"
			},
			{
				"label": "Plaque",
				"value": 1,
				"color": "#207f32"
			},
			{
				"label": "Printmaking",
				"value": 3,
				"color": "#44b9af"
			},
			{
				"label": "Sculpture",
				"value": 214,
				"color": "#bca349"
			},
			{
				"label": "Video",
				"value": 1,
				"color": "#efefef"
			}
		]
	},
	"labels": {
		"outer": {
			"pieDistance": 28
		},
		"inner": {
			"hideWhenLessThanPercentage": 2
		},
		"mainLabel": {
			"fontSize": 11
		},
		"percentage": {
			"color": "#ffffff",
			"decimalPlaces": 0
		},
		"value": {
			"color": "#adadad",
			"fontSize": 11
		},
		"lines": {
			"enabled": true,
			"style": "straight"
		},
		"truncation": {
			"enabled": true
		}
	},
	"tooltips": {
		"enabled": true,
		"type": "placeholder",
		"string": "{label}: {value}, {percentage}%"
	},
	"effects": {
		"pullOutSegmentOnClick": {
			"effect": "elastic",
			"speed": 400,
			"size": 8
		}
	},
	"misc": {
		"gradient": {
			"enabled": true,
			"percentage": 98
		},
		"canvasPadding": {
			"top": 38,
			"left": 5
		}
	},
	"callbacks": {
		"onMouseoutSegment": null,
	}
});

var svg = d3.select("textbox")
			 .append("svg")
			 .attr("width", 100)
			 .attr("height", 200);

svg.select("svg #textbox").on("click", function() {
	 svg.select('p')
	 .transition()
	 .duration(2500)
	 .text("new text new text")
	 .style("background-color","red")
	 .style("font-size","20px")
});
