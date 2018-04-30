


 var mylearnin = [{skillz: "TSO/ISPF, CLISTS, JCL", color: "#9ACD32"},
                  {skillz: "ROSCOE, VM/CMS, EXECS", color: "#3CB371"},
                  {skillz: "CICS APPLICATION INSTALL & SUPPORT, EZTRIEVE", color: "rgb(0,250,154)"},
                  {skillz: "CICS APPLICATION PROGRAMMING, IMS DL/1", color: "rgb(130,200,21)"},
                  {skillz:  "CICS SYSTEMS PROGRAMMING, PCS/ADS", color: "#008000"},
                  {skillz: "AS400, DATASTAGE ETL,CERNER CCL", color: "blue" } ];

var xScale = d3.scaleLinear().domain([0, mylearnin.length]);
var gScale = d3.scalePoint()
    .domain(["Job 1", "Job 2", "Job 3", "Job 4", "Job 5", "Job 6"]);

var chartDiv = document.getElementById("cydchart");
var svg = d3.select('div#cydchart').append("svg");
    

//Create SVG element

function uResize() {

   d3.select("#cydchart").selectAll("svg > *").remove();
    
            var width = chartDiv.clientWidth;
        
            var barPadding = Math.round(width * .0200)
            var barWidth =  Math.round(width * .0555)
           
            var gWidth =  Math.round(width * .844)
            var gRange = Math.round(barPadding + barWidth/2)

       svg
       .attr("height", 200)
       .attr("width", (width - barPadding));
            
               
             /*   console.log("obtained2 width= ", width)
                console.log("barPadding= ", barPadding)
                console.log("barWidth= ", barWidth)   */
           
                

    xScale.range([barPadding + 5, (width - barPadding)])
               
        
// bind the data 
svg.selectAll("g")
      .data(mylearnin)
      .enter()
      .append("text")
      .attr("x", function(d, i) { return xScale(i) + barWidth/2;})
      .attr("y", 30)
      .attr("dy", ".55em")
      .text(function(d) { return (d.skillz); })
      .attr("text-anchor", "middle") 
      .attr("font-size", ".6em")
      .style("fill", function(d, i) {return (d.color)})
      .call(wrap, barWidth ); // function wrap - wrap text 

      
// build the x-axis parameters    
gScale.range([gRange, gWidth]);    
  
var myAxis = d3.axisBottom(gScale);

svg.append("g")
    .attr("transform", "translate(0," + 110 + ")") 
    .attr("class", "axis")
    .call(myAxis)
    .append("text")
        .attr("x", 70)             
        .attr("y", 70)
        .attr("class", "d3footer")
        .style("font-size", "1.5em")  
        .style("font-family", "Pacifico")
        .text("rendered via d3js v4"); 

};  // END function uResize


//d3.select(window).on('resize', uResize); 

uResize();  
 
window.addEventListener("resize", uResize);

// function wrap - wrap text 
function wrap(text, width) {
  text.each(function() {
    var text = d3.select(this),
        words = text.text().split(/\s+/).reverse(),
        word,
        line = [],
        lineNumber = 0,
        lineHeight = 1.1, // ems
        x = text.attr("x"),
        y = text.attr("y"),
        dy = parseFloat(text.attr("dy")),
        tspan = text.text(null).append("tspan").attr("x", x).attr("y", y).attr("dy", dy + "em");
    while (word = words.pop()) {
      line.push(word);
      tspan.text(line.join(" "));
      if (tspan.node().getComputedTextLength() > width) {
        line.pop();
        tspan.text(line.join(" "));
        line = [word];
        tspan = text.append("tspan").attr("x", x).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
                  
      }
    }
  });
}  // END function wrap - wrap text

 