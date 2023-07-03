import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { WebrequestService } from 'src/app/shared/webrequest.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  constructor(private webReqService: WebrequestService) { }

  ngOnInit(): void {
    this.isLoading$ = this.webReqService.isLoading$;
  }

  isLoading$!: Observable<boolean>;

}
