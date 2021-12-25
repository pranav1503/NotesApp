import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild('navBarContent') navBarContent: ElementRef;

  constructor() { }

  ngOnInit(): void {     
    
  }

  onNavDropDownClick(){
    if(this.navBarContent.nativeElement.classList.contains('show')){                  
      this.navBarContent.nativeElement.classList.remove('show');      
    }else{      
      this.navBarContent.nativeElement.classList.add('show');            
      console.log('no');
    }
  }

}
