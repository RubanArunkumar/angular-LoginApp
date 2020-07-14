import { Component, OnInit } from '@angular/core';
import { SampleDataService } from '../sample-data.service';
import { CalculateInterestData } from '../calculateInterestData';
import { ICalculateInterestDataResponse } from '../calculateInterestDataResponse';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit {

  public interestApiData: any = {};
  public errorMessage = "";
  public response = null;
  public postData: any;
  constructor(private sampleData: SampleDataService ) { }

  ngOnInit(): void {
  }

  public calculateInterest(e)
  {
    e.preventDefault();

    var requestObject = new CalculateInterestData();
    requestObject.incomeAmount = Number(e.target.elements[0].value);
    requestObject.maturityPeriod = Number(e.target.elements[1].value);
    requestObject.loanValueAmount = Number(e.target.elements[2].value);
    requestObject.homeValueAmount = Number(e.target.elements[3].value);

    this.sampleData.calculateInterestApiHttpService(requestObject)
                   .subscribe((data:any) => this.interestApiData = data,
                   (error: string) => this.errorMessage = error);

  }

  public clearForm(form: FormGroup) {
    if(document.getElementById("success")){
      document.getElementById('success').innerHTML = null;
    } 
  else if (document.getElementById("error")) {
    document.getElementById('error').innerHTML = null;
  }
    form.reset();
    }
}
