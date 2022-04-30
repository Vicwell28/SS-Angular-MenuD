import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-top-table',
  templateUrl: './top-table.component.html',
  styleUrls: ['./top-table.component.scss']
})
export class TopTableComponent implements OnInit {

  @Output() openDialogEvent = new EventEmitter<string>();
  @Output() refrescarEvent = new EventEmitter<string>();
  @Output() excelEvent = new EventEmitter<string>();
  @Output() pdfEvent = new EventEmitter();
  @Output() aplyFilterEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  openDialog(){
    this.openDialogEvent.emit();
  }

  refrescar(){
    this.refrescarEvent.emit();
  }

  applyFilter(event : Event){
    this.aplyFilterEvent.emit((event.target as HTMLInputElement).value);
  }

  excel(){
    this.excelEvent.emit();
  }

  pdf(){
    this.pdfEvent.emit(); 
  }
}
