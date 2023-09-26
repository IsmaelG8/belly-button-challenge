// Define the URL of the JSON data
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Initialize the dashboard
function init() {
    d3.json(url).then((data) => {
        // Populate the dropdown menu with sample IDs
        let dropdownMenu = d3.select("#selDataset");
        data.names.forEach((name) => {
            dropdownMenu.append("option").text(name).property("value", name);
        });

        // Use the first sample to build the initial plots, metadata display, and gauge chart
        buildPlots(data.names[0]);
        buildMetadata(data.names[0]);
        buildGauge(data.metadata[0].wfreq); // Assuming wfreq is the key for washing frequency in metadata
    });
}

// Fetch new data each time a new sample is selected
function optionChanged(newSample) {
    buildPlots(newSample);
    buildMetadata(newSample);
    d3.json(url).then((data) => {
        let newMetadata = data.metadata.filter(obj => obj.id.toString() === newSample)[0];
        buildGauge(newMetadata.wfreq); // Assuming wfreq is the key for washing frequency in metadata
    });
}

// Create the bar chart and the bubble chart
function buildPlots(sample) {
    d3.json(url).then((data) => {
        // Filter the data for the selected sample
        let sampleData = data.samples.filter(obj => obj.id === sample)[0];

        // Bar Chart
        let barValues = sampleData.sample_values.slice(0, 10).reverse();
        let barLabels = sampleData.otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse();
        let barHoverText = sampleData.otu_labels.slice(0, 10).reverse();

        let barData = [{
            x: barValues,
            y: barLabels,
            text: barHoverText,
            type: "bar",
            orientation: "h"
        }];

        Plotly.newPlot("bar", barData);

        // Bubble Chart
        let bubbleXValues = sampleData.otu_ids;
        let bubbleYValues = sampleData.sample_values;
        let bubbleMarkerSize = sampleData.sample_values;
        let bubbleMarkerColors = sampleData.otu_ids;
        let bubbleTextValues = sampleData.otu_labels;

        let bubbleData = [{
            x: bubbleXValues,
            y: bubbleYValues,
            text: bubbleTextValues,
            mode: 'markers',
            marker: {
                size: bubbleMarkerSize,
                color: bubbleMarkerColors
            }
        }];

        Plotly.newPlot("bubble", bubbleData);
    });
}

// Display the sample metadata
function buildMetadata(sample) {
    d3.json(url).then((data) => {
        let metadata = data.metadata.filter(obj => obj.id.toString() === sample)[0];
        let metadataPanel = d3.select("#sample-metadata");

        // Clear any existing metadata
        metadataPanel.html("");

        // Display each key-value pair from the metadata JSON object
        Object.entries(metadata).forEach(([key, value]) => {
            metadataPanel.append("h6").text(`${key.toUpperCase()}: ${value}`);
        });
    });
}

// Function to build the Gauge Chart
function buildGauge(wfreq) {
    let data = [
        {
            domain: { x: [0, 1], y: [0, 1] },
            value: wfreq,
            title: { text: "Belly Button Washing Frequency<br>Scrubs per Week" },
            type: "indicator",
            mode: "gauge+number",
            gauge: {
                axis: { range: [null, 9] }, // Modify the range of the gauge chart
                steps: [
                    { range: [0, 1], color: "lightgray" },
                    { range: [1, 2], color: "gray" }
                    // Modify colors and ranges as needed
                ]
            }
        }
    ];

    let layout = { width: 600, height: 500, margin: { t: 0, b: 0 } };
    Plotly.newPlot('gauge', data, layout); // Assuming 'gauge' is the id of the div where you want to plot the gauge chart
}

// Initialize the dashboard
init();
