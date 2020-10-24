import {
  Component,
  EventEmitter, OnInit,
  Output
} from '@angular/core';
import {ChangeEvent} from 'ngx-virtual-scroller';
import {from, Observable} from 'rxjs';
import {JarvisService} from './services/jarvis.service';


export interface Lab {
  id ?: number;
  name ?: string;
  description ?: string;
}

export const SAMPLE_DATA = [
  {
    id: 1,
    name: 'All Assets',
    description: 'these are the assets that our company owns'},
  {
    id: 2,
    name: 'Audit Report',
    description: 'these are audits conducted on our assets'},

];

@Component({
 selector: 'app-labs-list',
 templateUrl: './labs.list.component.html',
 styleUrls: ['./labs.list.component.css']
})
export class LabsListComponent implements OnInit {

  private limit = 50;
  transacts: any;

  @Output() onItemSelected = new EventEmitter<Lab>();

  currentId: number;
  buffer: Lab[] = [];
  loading: boolean;
  searchText: string;

  constructor(
    private Jarvis: JarvisService
  ) {
  }

  onListChange(event: ChangeEvent) {

    if (event.end !== this.buffer.length) {
      return;
    }

    this.loading = true;
    this.fetchNextChunk(this.buffer.length, this.limit)
      .subscribe(chunk => {
        this.buffer.push(chunk);
        this.loading = false;
      }, err => console.log(err), () => this.loading = false);

  }


  fetchNextChunk(fromIndex: number, limit: number): Observable<Lab> {

    return from(SAMPLE_DATA);

  }


  selectItem(item: any) {

    this.currentId = item.id;
    this.onItemSelected.emit(item);

  }


  isSelected(item: Lab): boolean {

    return this.currentId && this.currentId == item.id;

  }


  public refresh(): void {

    this.loading = true;
    this.buffer = [];

    this.fetchNextChunk(0, this.limit)
      .subscribe(
        {
          next: response => this.buffer.push(response),
          error: err => this.loading = false,
          complete: () => this.loading = false
        }
      );

  }


  public setCurrentId(id: number): void {

    this.currentId = id;

  }


  ngOnInit(): void {

    this.refresh();
  }

}
