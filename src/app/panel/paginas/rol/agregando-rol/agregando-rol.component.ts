import { Component, OnInit, ViewChild } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { CategoriaService } from 'src/app/shared/services/categoria.service';
import { Category } from 'src/app/shared/Models/category.interface';
import { RolService } from 'src/app/shared/services/rol.service';
import { DialgoRoleStoreComponent } from 'src/app/shared/components/Dialog/role/dialgo-role-store/dialgo-role-store.component';
import { DialgoRoleEditComponent } from 'src/app/shared/components/Dialog/role/dialgo-role-edit/dialgo-role-edit.component';

@Component({
  selector: 'app-agregando-rol',
  templateUrl: './agregando-rol.component.html',
  styleUrls: ['./agregando-rol.component.scss']
})
export class AgregandoRolComponent implements OnInit {

  displayedColumns: string[] = ['name', 'status', 'opcions'];
  dataSource: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private dialog: MatDialog,
    private categoryService: CategoriaService,
    private roleService : RolService, 
    private _liveAnnouncer: LiveAnnouncer
  ) {}

  ngOnInit(): void {
    this.roleService.getIndexRole().subscribe((datos) => {
      this.dataSource = new MatTableDataSource<Category>(datos.data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  openDialogStore(): void {
    const dialogRef = this.dialog.open(DialgoRoleStoreComponent, {
      width: '30%',
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.ngOnInit();
    });
  }

  openDialogEdit(id: any): void {
    this.roleService.getShowRole(id).subscribe((datos) => {
      const dialogRef = this.dialog.open(DialgoRoleEditComponent, {
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
    this.roleService.deleteDestroyRole(id).subscribe((datos) => {
      console.log(datos);
      this.ngOnInit();
    });
  }
}
