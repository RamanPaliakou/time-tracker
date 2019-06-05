import React, {PureComponent} from 'react';
import {appConstants} from "../../Constants";
import withStyles from "@material-ui/core/styles/withStyles";

var DoughnutChart = require("react-chartjs").Doughnut;
var BarChart = require("react-chartjs").Bar;

const data = [
  {
    value: 2,
    color: "#F7464A",
    highlight: "#FF5A5E",
    label: "Bad Estimated"
  },
  {
    value: 4,
    color: "#46BFBD",
    highlight: "#5AD3D1",
    label: "Completed In Time"
  },
  {
    value: 4,
    color: "#FDB45C",
    highlight: "#FFC870",
    label: "In Progress"
  },
  {
    value: 3,
    color: "#A9A9A9",
    highlight: "#D0D0D0",
    label: "Waiting to be started"
  }
];

const barData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "BadEstimated",
      fillColor: "rgba(220,220,220,0.5)",
      strokeColor: "rgba(220,220,220,0.8)",
      highlightFill: "rgba(220,220,220,0.75)",
      highlightStroke: "rgba(220,220,220,1)",
      data: [65, 59, 80, 81, 56, 55, 40]
    },
    {
      label: "Completed",
      fillColor: "rgba(151,187,205,0.5)",
      strokeColor: "rgba(151,187,205,0.8)",
      highlightFill: "rgba(151,187,205,0.75)",
      highlightStroke: "rgba(151,187,205,1)",
      data: [28, 48, 40, 19, 86, 27, 90]
    }
  ]
};

const options = {
  //Boolean - Whether we should show a stroke on each segment
  segmentShowStroke: true,

  //String - The colour of each segment stroke
  // segmentStrokeColor : "#fff",

  //Number - The width of each segment stroke
  // segmentStrokeWidth : 2,

  //Number - The percentage of the chart that we cut out of the middle
  percentageInnerCutout: 50, // This is 0 for Pie charts

  //Number - Amount of animation steps
  animationSteps: 100,

  //String - Animation easing effect
  animationEasing: "easeOutBounce",

  //Boolean - Whether we animate the rotation of the Doughnut
  animateRotate: true,

  //Boolean - Whether we animate scaling the Doughnut from the centre
  animateScale: false,

  // //String - A legend template
  legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"><%if(segments[i].label){%><%=segments[i].label%><%}%></span></li><%}%></ul>"

}

const barOptions = {
  //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
  scaleBeginAtZero: true,

  //Boolean - Whether grid lines are shown across the chart
  scaleShowGridLines: true,

  //String - Colour of the grid lines
  scaleGridLineColor: "rgba(0,0,0,.05)",

  //Number - Width of the grid lines
  scaleGridLineWidth: 1,

  //Boolean - Whether to show horizontal lines (except X axis)
  scaleShowHorizontalLines: true,

  //Boolean - Whether to show vertical lines (except Y axis)
  scaleShowVerticalLines: true,

  //Boolean - If there is a stroke on each bar
  barShowStroke: true,

  //Number - Pixel width of the bar stroke
  barStrokeWidth: 2,

  //Number - Spacing between each of the X value sets
  barValueSpacing: 5,

  //Number - Spacing between data sets within X values
  barDatasetSpacing: 1,
  // {% raw %}
  //String - A legend template
  legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>"
  // {% endraw %}
}

const styles = (theme) => {
  const unit = theme.spacing.unit;
  return {
    container: {
      minWidth: appConstants.minAppWidth,
      maxWidth: '100%',
      display: 'block',
      marginTop: unit,

    },
    elementStorage: {
      maxWidth: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      flexWrap: 'wrap',
      alignItems: 'center',
    },
    element: {
      minWidth: appConstants.minAppWidth,
      marginTop: unit,
      // width: '100%',
      // height: this.width
    },
    centralizer: {
      margin: '0 auto',
      textAlign: 'center'
    }
  };
};

class DiagramHolder extends PureComponent {
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.container}>
        <div className={classes.elementStorage}>
          <DoughnutChart responsive={true}  maintainAspectRatio={true} data={data} options={options}/>
          <BarChart  data={barData} options={barOptions}/>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(DiagramHolder);