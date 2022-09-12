import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isChecked = true;

  constructor(public authService: AuthService) { }
  @Output() featureSelected = new EventEmitter<string>();
  onSelect(feature: string){
    this.featureSelected.emit(feature)
  }
  ngOnInit(): void {
    let box = document.getElementById('box') as HTMLButtonElement;
    if(this.authService.userData.uid == "yKPp5y7Yx4bYd8u1GM37HHeIcP32"){
    }else{
      box.style.display = "none";
    }
  }

  shutdown(){
    if(confirm("Você tem certeza que deseja fechar o site?")){
      window.open('', '_self')?.close();
      // window.close();
    }
  }

  switchMode(){
    if(this.isChecked == false){
      sessionStorage.setItem('isChecked',  JSON.stringify(this.isChecked));
      console.log("🚀 ~ file: header.component.ts ~ line 28 ~ HeaderComponent ~ switchMode ~ this.isChecked", this.isChecked)
    }
  }

}
