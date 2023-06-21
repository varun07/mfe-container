import { Component, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'container';
  @ViewChild('childComponent', { read: ViewContainerRef }) viewContainer!: ViewContainerRef;
  component: any;
  childComponentLoaded = false;

  ngOnInit() {
    this.loadFrontend1Component();
  }

  loadFrontend1Component() {
    import('mfe1/Component').then(m => {
      console.log(m.AppComponent);
      this.component = m.AppComponent;
    })


  }

  toggle() {
    this.childComponentLoaded = !this.childComponentLoaded;
    setTimeout(() => {
      if(this.childComponentLoaded && this.component) {
        const componentRef = this.viewContainer.createComponent(this.component);
        (componentRef.instance as any).appControllerName = 'container app';
      }
    })


  }
}
