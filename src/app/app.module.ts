import { BrowserModule } from "@angular/platform-browser";
import {
  NgModule,
  SystemJsNgModuleLoaderConfig,
  LOCALE_ID,
  NgModuleFactoryLoader,
  COMPILER_OPTIONS,
  CompilerFactory,
  Compiler
} from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { CacheService, HttpService, SessionService } from "@ecp-caf/caf-common";
import {
  FrameworkService,
  FrmEventBus,
  LoadingService,
  AppService,
  FuncsService
} from "@gsp-sys/rtf-common";
import { CommonModule } from "@angular/common";

import { SystemjsLcModuleloaderGenerator } from "./systemjs-lc-moduleloader";
import { JitCompilerFactory } from "@angular/platform-browser-dynamic";
import { NavigateGuard } from "./navigate-guard";
import { shaixuanceshiFormModule } from "../app/shaixuanceshiform/shaixuanceshiform.module";
import { testCardFormModule } from "../app/testcardform/testcardform.module";
import { listModule } from "../app/list/list.module";

export function createCompiler(compilerFactory: CompilerFactory) {
  return compilerFactory.createCompiler();
}
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    shaixuanceshiFormModule,
    testCardFormModule,
    listModule
  ],
  providers: [
    CacheService,
    SessionService,
    FrmEventBus,
    HttpService,
    FuncsService,
    AppService,
    LoadingService,
    NavigateGuard,
    {
      provide: LOCALE_ID,
      useValue: localStorage.getItem("languageCode") || "zh-CHS"
    },
    { provide: COMPILER_OPTIONS, useValue: {}, multi: true },
    {
      provide: CompilerFactory,
      useClass: JitCompilerFactory,
      deps: [COMPILER_OPTIONS]
    },
    { provide: Compiler, useFactory: createCompiler, deps: [CompilerFactory] },
    FrameworkService,
    {
      provide: SystemJsNgModuleLoaderConfig,
      useValue: {
        factoryPathPrefix: "",
        factoryPathSuffix: ".js"
      }
    },
    {
      provide: NgModuleFactoryLoader,
      useClass: SystemjsLcModuleloaderGenerator
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
