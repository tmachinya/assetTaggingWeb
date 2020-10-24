import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-snapshot',
  templateUrl: './snapshot.component.html',
  styleUrls: ['./snapshot.component.css']
})
export class SnapshotComponent implements OnInit {
  title = 'Snapshot of all sales for the week';
  LineChart: any;
  BarChart:any;
  PieChart:any;

  constructor() { }

  ngOnInit() {
    this.LineChart = new Chart(
      'lineChart',{
        type: 'line',
        data:{
          labels:["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sept","Oct","Nov","Dec"],
          datasets:[{
            label: 'Sales in thousand RTGS',
            data: [9,7,3,5,2,10,15,16,14,19,12,2],
            fill:false,
            lineTension:0.2,
            borderColor: "green",
            borderWidth: 1
          }]
        },
        options:{
          title: {
            text: "Sales Trajectory",
            display:true,
          },
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }
            ]
          }
        }

      }
    )
    // Bar chart:
    this.BarChart = new Chart('barChart', {
      type: 'bar',
      data: {
        labels: ["Desktops", "Laptops", "Servers", "Ipads", "Office Furniture", "Other Assets"],
        datasets: [{
          label: 'Number of Assets',
          data: [9,7 , 3, 5, 2, 10],
          backgroundColor: [
            'rgba(16,40,3,0.2)',
            'rgba(16,40,3,0.2)',
            'rgba(16,40,3,0.2)',
            'rgba(16,40,3,0.2)',
            'rgba(16,40,3,0.2)',
            'rgba(16,40,3,0.2)',
          ],
          borderColor: [
            'rgb(10,98,14)',
            'rgb(10,98,14)',
            'rgb(10,98,14)',
            'rgb(10,98,14)',
            'rgb(10,98,14)',
            'rgb(10,98,14)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        title:{
          text:"Bar Representation of Assets",
          display:true
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true
            }
          }]
        }
      }
    });

// pie chart:
    this.PieChart = new Chart('pieChart', {
      type: 'pie',
      data: {
        labels: ["Desktops", "Laptops", "Servers", "Ipads", "Office Furniture", "Other"],
        datasets: [{
          label: '# of Assets',
          data: [9,7 , 3, 5, 2, 10],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        title:{
          text:"Bar Chart",
          display:true
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true
            }
          }]
        }
      }
    });


  }
}
