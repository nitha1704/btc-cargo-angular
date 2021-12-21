import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CartComponent } from "./custom/cart/cart.component";
import { DeliverystatusComponent } from "./custom/deliverystatus/deliverystatus.component";
import { OrderdetailsComponent } from "./custom/orderdetails/orderdetails.component";
import { PurchaseComponent } from "./custom/purchase/purchase.component";
import { TestnotusComponent } from "./custom/testnotus/testnotus.component";

// layouts
import { AdminComponent } from "./layouts/admin/admin.component";
import { AuthComponent } from "./layouts/auth/auth.component";
import { HomeComponent } from "./pages/home/home.component";

// admin views
import { DashboardComponent } from "./views/admin/dashboard/dashboard.component";
import { MapsComponent } from "./views/admin/maps/maps.component";
import { SettingsComponent } from "./views/admin/settings/settings.component";
import { TablesComponent } from "./views/admin/tables/tables.component";

// auth views
import { LoginComponent } from "./views/auth/login/login.component";
import { RegisterComponent } from "./views/auth/register/register.component";

// no layouts views
import { IndexComponent } from "./views/index/index.component";
import { LandingComponent } from "./views/landing/landing.component";
import { ProfileComponent } from "./views/profile/profile.component";

const routes: Routes = [
  // admin views
  {
    path: "admin",
    component: AdminComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "settings", component: SettingsComponent },
      { path: "tables", component: TablesComponent },
      { path: "maps", component: MapsComponent },
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      // Custom
      { path: "testnotus", component: TestnotusComponent },
      { path: "purchase", component: PurchaseComponent },
      { path: "cart", component: CartComponent },
      { path: "orderdetails", component: OrderdetailsComponent },
      { path: "deliverystatus", component: DeliverystatusComponent },
    ],
  },

  // auth views
  // {
  //   path: "auth",
  //   component: AuthComponent,
  //   children: [
  //     { path: "login", component: LoginComponent },
  //     { path: "register", component: RegisterComponent },
  //     { path: "", redirectTo: "login", pathMatch: "full" },
  //   ],
  // },

  // no layout views
  { path: "profile", component: ProfileComponent },
  { path: "landing", component: LandingComponent },

  { path: "", component: AuthComponent, pathMatch: "full" },
  { path: "**", redirectTo: "", pathMatch: "full" },
  // Custom
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
