import {Component, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {LoaderService} from '../../services/loader.service';

@Component({
  selector: 'app-loader',
  template: `
    <div *ngIf="isLoading | async">
      <div class="loader-overlay">
        <div class="loader"></div>
      </div>
    </div>
  `
})
export class LoaderComponent implements OnInit {

  isLoading: Subject<boolean> = this.loaderService.isLoading;

  constructor(private loaderService: LoaderService) {
  }

  ngOnInit(): void {
  }

}
