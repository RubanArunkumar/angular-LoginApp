import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { SampleDataService } from '../sample-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private isLoggedIn;
  public sampleTestData = [];
  public interestApiData = [];
  public errorMessage = "";
  constructor(private user: UserService,
              private sampleData: SampleDataService) { }

  // ngOnInit(): void {
  //   this.sampleData.getDataHttpService()
  //                  .subscribe((data:any[]) => this.sampleTestData = data,
  //                  (error: string) => this.errorMessage = error);
  // }

  ngOnInit(): void {
    this.sampleData.getInterestApiHttpService()
                   .subscribe((data:any[]) => this.interestApiData = data,
                   (error: string) => this.errorMessage = error);
  }

}
