import { Component, OnInit, ViewChild } from '@angular/core';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource} from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';
import { DialogCategoryComponent } from 'src/app/shared/components/Dialog/dialog-category/dialog-category.component';
import { CategoriaService } from 'src/app/shared/services/categoria.service';

@Component({
  selector: 'app-agregadno-vista',
  templateUrl: './agregadno-vista.component.html',
  styleUrls: ['./agregadno-vista.component.scss']
})
export class AgregadnoVistaComponent implements OnInit {

  displayedColumns: string[] = ['name', 'icon', 'level', 'status', 'opcions'];
  dataSource : any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(
    private dialog : MatDialog, 
    private categoryService : CategoriaService, 
    private _liveAnnouncer: LiveAnnouncer
  ) { }


  ngOnInit(): void {
    this.categoryService.getIndexCategoria().subscribe(datos => {
      this.dataSource = new MatTableDataSource<Category>(datos.data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogCategoryComponent, {
      width: '30%',      
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }


  applyFilter(event: any) {
    const filterValue = event
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  refrescar(){
    this.ngOnInit();
  }

  excel(){
    alert("Excel"); 
  }

  pdf(){
    alert("PDF");
  }

}

export interface Category{
  id : number, 
  name : string, 
  icon : string, 
  level : string, 
  status : number, 
}