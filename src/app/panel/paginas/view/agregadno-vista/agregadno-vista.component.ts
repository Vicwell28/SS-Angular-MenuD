import { Component, OnInit, ViewChild } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { DialogCategoryComponent } from 'src/app/shared/components/Dialog/dialog-category/dialog-category.component';
import { DialogCategoryEditComponent } from 'src/app/shared/components/Dialog/dialog-category-edit/dialog-category-edit.component';
import { VistaService } from 'src/app/shared/services/vista.service';
import { DialogViewStoreComponent } from 'src/app/shared/components/Dialog/view/dialog-view-store/dialog-view-store.component';
import { DialogViewEditComponent } from 'src/app/shared/components/Dialog/view/dialog-view-edit/dialog-view-edit.component';
import { CategoriaService } from 'src/app/shared/services/categoria.service';

@Component({
  selector: 'app-agregadno-vista',
  templateUrl: './agregadno-vista.component.html',
  styleUrls: ['./agregadno-vista.component.scss']
})
export class AgregadnoVistaComponent implements OnInit {

  displayedColumns: string[] = ['name', 'category_id', 'route', 'icon', 'level', 'status', 'opcions'];
  dataSource: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private dialog: MatDialog,
    private viewService: VistaService,
    private _liveAnnouncer: LiveAnnouncer, 
  ) {}

  ngOnInit(): void {
    this.viewService.getIndexView().subscribe((datos) => {
      console.log(datos);
      this.dataSource = new MatTableDataSource<View>(datos.data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  openDialogStore(): void {
    const dialogRef = this.dialog.open(DialogViewStoreComponent, {
      width: '30%',
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.ngOnInit();
    });
  }

  openDialogEdit(id: any): void {
    this.viewService.getShowView(id).subscribe((datos) => {
      const dialogRef = this.dialog.open(DialogViewEditComponent, {
        width: '30%',
        data: datos.data,
      });

      dialogRef.afterClosed().subscribe((result) => {
        console.log('The dialog was closed');
        this.ngOnInit();
      });
    });
  }

  applyFilter(event: Event) {
    console.log((event.target as HTMLInputElement).value);
    const filterValue = (event.target as HTMLInputElement).value;
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

  refrescar() {
    this.ngOnInit();
  }

  excel() {
    alert('Excel');
  }

  pdf() {
    alert('PDF');
  }

  deshabilitar(id: any) {
    this.viewService.deleteDestroyView(id).subscribe((datos) => {
      console.log(datos);
      this.ngOnInit();
    });
  }

}


export interface View{
  id : number, 
  name : string, 
  icon : string, 
  level : string, 
  status : number, 
  route : string, 
  category_id : number,
}