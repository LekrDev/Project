import { Component, OnInit } from '@angular/core';
import { PhpHandlerService } from '../services/php-handler.service';

@Component({
  selector: 'app-data-input',
  templateUrl: './data-input.component.html',
  styleUrls: ['./data-input.component.scss']
})
export class DataInputComponent implements OnInit {

  public data1:string=''
  public data2:string=''

  constructor(private phpHandler: PhpHandlerService) { }

  ngOnInit() {
  }

  ln1()
  {
    return this.data1.split(',').length
  }
  ln2()
  {
    return this.data2.split(',').length
  }
  submitData()
  {
   
    if(this.data1.split(',').length==this.data2.split(',').length)
    {
      
      this.phpHandler.insertData(this.data1, this.data2)
      this.data1=""
      this.data2=""
    }
  }

}
