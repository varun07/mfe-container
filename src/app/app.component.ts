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

  }

  async loadFrontend1Component() {
    return import('mfe1/OrdersComponent').then(m => {
      console.log(m.OrdersComponent);
      this.component = m.OrdersComponent;
    })
  }

  toggle() {
    this.childComponentLoaded = !this.childComponentLoaded;
    setTimeout(async () => {

      if(this.childComponentLoaded) {
        if(!this.component) {
          await this.loadFrontend1Component();
        }
        const componentRef = this.viewContainer.createComponent(this.component);
        (componentRef.instance as any).appControllerName = 'container app';
      }
    })


  }
}
