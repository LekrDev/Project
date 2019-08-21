import { Component, OnInit } from '@angular/core';
import { PhpHandlerService } from '../services/php-handler.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    fill: 'start'
  };

  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public ChartType = 'bar';
  public barChartLegend = true;

  public barChartData = [
    {
      data: [0, 0, 0, 0, 0, 0, 0],
      label: 'Series A'
    },
    {
      data: [0, 0, 0, 0, 0, 0, 0], label: 'Series B'
    }
  ];

  phpData: any
  xlabels = []
  yData = [
    {
      data: [],
      label: 'Series A'
    },
    {
      data: [],
      label: 'Series B'
    }
  ]
  public counter = interval(5000);
  constructor(private phpHandler: PhpHandlerService) {


    this.counter.subscribe(val => {

      this.phpHandler.getAll().subscribe(_ => {
        this.converts(_)
      })
    });


  }

  ngOnInit() {
    this.phpHandler.response$.subscribe(_ => {
      this.converts(_)
    })
  }
  arrayFromObj(obj) {
    if (!obj)
      return;
    let list = [];
    Object.entries(obj).forEach(elem => {
      list.push(elem[1])
    })

    return list;
  }

  converts(__) {
    this.xlabels=[]
    this.yData[0].data=[]
    let _ = this.arrayFromObj(__[0])
    _.forEach(elem => {
      this.xlabels.push(elem.id)
      this.yData[0].data.push(elem.data1)
    });
    _.forEach(elem => {
      this.yData[1].data.push(elem.data2)
    });
    this.barChartData = this.yData
    this.barChartLabels = this.xlabels
  }

}
