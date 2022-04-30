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
import { RolService } from 'src/app/shared/services/rol.service';
import { DialogViewAsignarComponent } from 'src/app/shared/components/Dialog/view/dialog-view-asignar/dialog-view-asignar.component';
@Component({
  selector: 'app-asignando-vistas',
  templateUrl: './asignando-vistas.component.html',
  styleUrls: ['./asignando-vistas.component.scss'],
})
export class AsignandoVistasComponent implements OnInit {
  displayedColumns: string[] = ['name', '__meta__', 'status', 'opcions'];
  dataSource: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private dialog: MatDialog,
    private categoryService: CategoriaService,
    private roleService: RolService,
    private _liveAnnouncer: LiveAnnouncer
  ) {}

  ngOnInit(): void {
    this.roleService.getIndexRole().subscribe((datos) => {
      this.dataSource = new MatTableDataSource<Category>(datos.data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  openDialogEdit(id: any): void {
    this.roleService.getShowRole(id).subscribe((datos) => {
      const dialogRef = this.dialog.open(DialogViewAsignarComponent, {
        width: '30%',
        data: datos.data,
      });

      dialogRef.afterClosed().subscribe((result) => {
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
    this.roleService.deleteDestroyRole(id).subscribe((datos) => {
      this.ngOnInit();
    });
  }
}
