import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'avatar'
})
export class AvatarPipe implements PipeTransform {
constructor(private domSn: DomSanitizer){}
  transform(value: string, ...args: unknown[]): any {
  
      let iniciales = value.slice(0, 2).toUpperCase();
      let imgEl: HTMLElement = document.createElement('span');;
      imgEl.style.backgroundColor='rgb(232, 199, 101)';
      imgEl.style.display='inline-block';
      imgEl.style.color='#fff'
      imgEl.style.fontWeight='700';
      imgEl.style.width='38px';
      imgEl.style.textAlign='center';
      imgEl.style.lineHeight='2.5em';
      imgEl.style.borderRadius='50%';
      imgEl.style.marginRight='5px'
     imgEl.textContent=iniciales;
     
    

  
     return this.domSn.bypassSecurityTrustHtml(imgEl.outerHTML);
  }

}
