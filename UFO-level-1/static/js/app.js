// Import data
var tableData = data;
console.log(tableData);

//Variables
var tbody = d3.select("tbody")
var button = d3.select("#filter-btn");

//Loop through data and insert table
tableData.forEach(function(ufo_Sighting){
    console.log(ufo_Sighting);
    var row = tbody.append("tr");

    Object.entries(ufo_Sighting).forEach(function([key, value]){
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});

// Filter table button
var button = d3.select("#filter-btn");
button.on("click", function() {

    tbody.html("");

    // Select the date
    var inputDate = d3.select("#datetime");
    var input = inputDate.property("value");
    console.log(input);
    var filterData = tableData.filter(sighting => sighting.datetime === input);
    console.log(filterData);
    filterData.forEach(function(select) {
    console.log(select);
   
    var row = tbody.append("tr");
        Object.entries(select).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});
});