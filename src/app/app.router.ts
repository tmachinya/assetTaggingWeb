import {
 NgModule
} from '@angular/core';
import {
 RouterModule,
 Routes
} from '@angular/router';
import {LandingComponent} from './landing.component';
import {NotFoundComponent} from './notfound.component';
import {HomeComponent} from './home.component';
import {DashboardComponent} from './dashboard.component';
import {LabsComponent} from './labs.component';
import {LabDetailComponent} from './lab-detail.component';
import {TransactionsComponent} from './material/transactions/transactions.component';
import {AssetComponent} from './material/products/asset/asset.component';
import {AssetListComponent} from './material/products/asset-list/asset-list.component';
import {SnapshotComponent} from './material/snapshot/snapshot.component';
import {DepreciationComponent} from "./material/reports/depreciation/depreciation.component";
import {SearchComponent} from "./material/reports/search/search.component";
import {SearchedAssetsComponent} from "./material/reports/searched-assets/searched-assets.component";
import {ReportListComponent} from "./material/reports/report-list/report-list.component";
import {AdminListComponent} from "./admins/admin-list/admin-list.component";
import {RevaluingComponent} from "./material/revaluing/revaluing.component";
import {RevaluedAssetsComponent} from "./material/revaluing/revalued-assets/revalued-assets.component";
import {RecentListComponent} from "./material/reports/recent-list/recent-list.component";
import {RevaluateListComponent} from "./material/reports/revaluate-list/revaluate-list.component";


const appRoutes: Routes = [

 { path: '', component: LandingComponent, pathMatch: 'full' },
 { path: 'dashboard', component: HomeComponent,
   children: [
     { path: '', component: SnapshotComponent },
     { path: 'transactions', component: TransactionsComponent },
     { path: 'product', component: AssetListComponent },
     { path: 'report', component: DepreciationComponent },
     { path: 'history', component: ReportListComponent },
     { path: 'administration', component: AdminListComponent },
     { path: 'search', component: SearchComponent},
     { path: 'revaluations', component: RevaluateListComponent},
     { path: 'additions', component: RecentListComponent},
     { path: 'accumulatedDpn', component: SearchedAssetsComponent},
     { path: 'revalue', component: RevaluingComponent,
       children: [
         { path: ':id', component: RevaluedAssetsComponent },
       ],
     },
     { path: 'labs', component: LabsComponent,
       children: [
         { path: ':id', component: LabDetailComponent },
       ] },
     { path: '**', component: NotFoundComponent }
   ]
 },
 { path: '**', component: NotFoundComponent }
];

@NgModule({
 imports: [
 RouterModule.forRoot( appRoutes, { enableTracing: true })
 ],
 exports: [
  RouterModule
]
})
export class AppRoutingModule {}
