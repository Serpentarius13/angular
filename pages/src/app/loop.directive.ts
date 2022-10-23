import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appLoop]',
})
export class LoopDirective {
  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}

  @Input('appLoop') set render(array: any){
    this.viewContainer.clear();

    // for (let a of array) {
    //   this.viewContainer.createEmbeddedView(this.templateRef), {
    //     index: array.indexOf(a)
    //   }
    // }
    for (let i = 0; i < array.length; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef, {
        index: i
      })
    }
  }
}
