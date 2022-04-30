import { Component, OnInit, ViewChild } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { DialogCategoryComponent } from 'src/app/shared/components/Dialog/dialog-category/dialog-category.component';
import { CategoriaService } from 'src/app/shared/services/categoria.service';
import { DialogCategoryEditComponent } from 'src/app/shared/components/Dialog/dialog-category-edit/dialog-category-edit.component';
import { Category } from 'src/app/shared/Models/category.interface';

@Component({
  selector: 'app-agregar-user',
  templateUrl: './agregar-user.component.html',
  styleUrls: ['./agregar-user.component.scss']
})
export class AgregarUserComponent implements OnInit {

  displayedColumns: string[] = ['name', 'icon', 'level', 'status', 'opcions'];
  dataSource: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private dialog: MatDialog,
    private categoryService: CategoriaService,
    private _liveAnnouncer: LiveAnnouncer
  ) {}

  ngOnInit(): void {
    this.categoryService.getIndexCategoria().subscribe((datos) => {
      this.dataSource = new MatTableDataSource<Category>(datos.data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  openDialogStore(): void {
    const dialogRef = this.dialog.open(DialogCategoryComponent, {
      width: '30%',
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.ngOnInit();
    });
  }

  openDialogEdit(id: any): void {
    this.categoryService.getShowCategoria(id).subscribe((datos) => {
      const dialogRef = this.dialog.open(DialogCategoryEditComponent, {
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
    this.categoryService.deleteDestroyCategoria(id).subscribe((datos) => {
      console.log(datos);
      this.ngOnInit();
    });
  }
}
