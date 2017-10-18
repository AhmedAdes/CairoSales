import { Component, AfterViewInit } from '@angular/core';
// import { BaImageLoaderService, BaThemePreloader, BaThemeSpinner } from './theme/services';
// import { BaThemeConfig } from './theme/theme.config';
// import { layoutPaths } from './theme/theme.constants';

@Component({
  selector: 'app-root',
  template: `
  <div class="additional-bg"></div>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'app works!';
  // constructor(
  //   private _imageLoader: BaImageLoaderService,
  //   private _spinner: BaThemeSpinner,
  //   private viewContainerRef: ViewContainerRef,
  //   private themeConfig: BaThemeConfig) {

  //   themeConfig.config();
  // }
  public ngAfterViewInit(): void {
  //   // hide spinner once all loaders are completed
  //   BaThemePreloader.load().then((values) => {
  //     this._spinner.hide();
  //   });
  }
}
