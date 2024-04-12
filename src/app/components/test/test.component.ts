import { formatDate } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { debounceTime, fromEvent, switchMap, switchScan } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements AfterViewInit {

  @ViewChild("input") inputElement!: ElementRef;
  name = ""
  ngAfterViewInit(): void {
    if (this.inputElement) {
      fromEvent(this.inputElement.nativeElement, "input").subscribe((data: any) => {
        console.log(data.data)
      })
    }
  }

}
