import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing.component';
import { HomeComponent } from './home.component';
import {AppRoutingModule} from './app.router';
import {SharedModule} from './shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AuthComponent } from './auth.component';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {MapComponent} from './map.component';
import { DashboardComponent } from './dashboard.component';
import { LabsComponent } from './labs.component';
import {LabsListComponent} from './labs.list.component';
import { LabDetailComponent } from './lab-detail.component';
import {ReactiveFormsModule} from '@angular/forms';
import { TransactionsComponent } from './material/transactions/transactions.component';
import {AgGridModule} from 'ag-grid-angular';
import { ProductsComponent } from './material/products/products.component';
import { AssetComponent } from './material/products/asset/asset.component';
import { AssetListComponent } from './material/products/asset-list/asset-list.component';
import {JarvisService} from './services/jarvis.service';
import {ExcelService} from './services/excel.service';
import {ProductService} from './services/product.service';
import { PurchasesComponent } from './material/purchases/purchases.component';
import { SnapshotComponent } from './material/snapshot/snapshot.component';
import { DepreciationComponent } from './material/reports/depreciation/depreciation.component';
import { SearchComponent } from './material/reports/search/search.component';
import { SearchedAssetsComponent } from './material/reports/searched-assets/searched-assets.component';
import { ReportListComponent } from './material/reports/report-list/report-list.component';
import { AdminComponent } from './admins/admin/admin.component';
import { AdminListComponent } from './admins/admin-list/admin-list.component';
import {ChampionService} from "./services/champion.service";
import { RevaluingComponent } from './material/revaluing/revaluing.component';
import { RevaluedAssetsComponent } from './material/revaluing/revalued-assets/revalued-assets.component';

@NgModule({
    declarations: [
        AppComponent,
        LandingComponent,
        HomeComponent,
        AuthComponent,
        MapComponent,
        DashboardComponent,
        LabsComponent,
        LabsListComponent,
        LabDetailComponent,
        TransactionsComponent,
        ProductsComponent,
        AssetComponent,
        AssetListComponent,
        PurchasesComponent,
        SnapshotComponent,
        DepreciationComponent,
        SearchComponent,
        SearchedAssetsComponent,
        ReportListComponent,
        AdminComponent,
        AdminListComponent,
        RevaluingComponent,
        RevaluedAssetsComponent
    ],
    imports: [
        BrowserAnimationsModule,
        SharedModule,
        AppRoutingModule,
        ReactiveFormsModule,
        AgGridModule.withComponents([])
    ],
    providers: [JarvisService, ExcelService, ProductService, ChampionService],
    bootstrap: [AppComponent],
    entryComponents: [AssetComponent, AdminComponent],
    exports: [
        ReportListComponent
    ]
})
export class AppModule {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry
      .registerFontClassAlias('fontawesome', 'fa')
      .registerFontClassAlias('mdi', 'mdi-set')
      .addSvgIcon('place_user_offline', sanitizer.bypassSecurityTrustResourceUrl('assets/placeholder-user-offline.svg'))
      .addSvgIcon('place_user_online', sanitizer.bypassSecurityTrustResourceUrl('assets/placeholder-user-online.svg'));
  }
}
