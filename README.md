
![microbes-sem](https://github.com/IsmaelG8/belly-button-challenge/assets/128990362/76d0e80e-fbb3-4a74-a573-67a41c26032f)


In this project, I developed an interactive dashboard to explore the Belly Button Biodiversity dataset, which documents microbial species found in human navels. The focus was on understanding the distribution of microbes, known as operational taxonomic units (OTUs), and their prevalence across different individuals. This dashboard provides a user-friendly interface for both academic researchers and the general public to explore the microbial diversity in human navels and understand which microbes are most common.

Objective:

The primary objective was to build an accessible platform that allows users to interact with the dataset through visualizations such as bar charts and bubble charts, enabling them to discover trends and specifics about microbial presence in different individuals. This tool is aimed at enhancing the understanding of human microbiomes, supporting further research in microbiology and public health.

Technical Execution:

Dashboard Setup:
Utilized HTML, CSS, and Bootstrap for dashboard layout design, ensuring responsiveness and accessibility.
Deployed the dashboard on GitHub Pages, providing a stable and accessible platform for users worldwide.
Data Integration and Visualization:
Employed JavaScript and the D3.js library to dynamically read and process the samples.json data.
Implemented Plotly.js to create interactive visualizations that respond to user interactions.
Interactive Bar Chart:
Developed a horizontal bar chart to display the top 10 OTUs found in an individual selected via a dropdown menu.
Configured the chart to update dynamically based on user selection, showing OTU IDs as labels and OTU descriptions as hovertext.
Dynamic Bubble Chart:
Created a bubble chart that visualizes each sample with OTU IDs on the x-axis and sample values on the y-axis.
Configured marker sizes and colors to represent the abundance and diversity of microbial species, with detailed information available through hovertext.
Demographic Information Panel:
Displayed metadata for each sample, including demographic details, by dynamically generating HTML content based on the selected individual's data.
Deployment and Testing:
Deployed the interactive dashboard to GitHub Pages to allow real-time data exploration.
Performed extensive testing to ensure that all interactive elements function correctly and that updates trigger as expected without errors.
Outcomes:

The interactive dashboard successfully allows users to:

Visualize the top 10 microbial species found in selected individuals.
Explore detailed microbial compositions through dynamic bubble charts.
Access demographic and other metadata related to each sample.
Visualization Samples:

Bar Chart: Displays the concentration of microbes in descending order.
Bubble Chart: Offers a broad overview of microbial diversity and concentration across samples.
Conclusion:

This project underscores the power of interactive data visualizations in making scientific data accessible and understandable to a broad audience. By integrating various web technologies and data visualization tools, I have created a platform that not only serves educational purposes but also enhances ongoing research in human microbiomes.
