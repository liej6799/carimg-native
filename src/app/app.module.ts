import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { ServiceProxyModule } from "../shared/service-proxies/service-proxy.module"
import { environment } from "../environment"

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AbpHttpInterceptor } from 'abp-ng2-module/dist/src/abpHttpInterceptor';
import { AbpModule } from 'abp-ng2-module/dist/src/abp.module'

import { API_BASE_URL } from '../shared/service-proxies/service-proxies';

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        ServiceProxyModule,
        AbpModule,
        NativeScriptHttpClientModule
    ],
    declarations: [
        AppComponent,
        ItemsComponent,
        ItemDetailComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AbpHttpInterceptor, multi: true },
        { provide: API_BASE_URL, useValue: environment.API_BASE_PATH },
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
