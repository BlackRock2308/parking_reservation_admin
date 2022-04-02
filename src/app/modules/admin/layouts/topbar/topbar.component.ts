import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../_services/report.service';
@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  isLoggedIn = false;
  public totalItem : number = 0;
  public searchTerm !: string;
  
  constructor(private api: ReportService,
   ) { }

  ngOnInit(): void {
    // this.api.getProduct()
    // .subscribe(res=>{
    //   this.totalItem = res.length;
    // })
  }

  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.api.search.next(this.searchTerm);
  }


  logout(): void {
   
  }
}
