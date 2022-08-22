import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Lunch } from '../../lunch.model';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireList } from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { LunchListComponent } from '../lunch-list.component';

@Component({
  selector: 'app-lunch-item',
  templateUrl: './lunch-item.component.html',
  styleUrls: ['./lunch-item.component.css'],
})

@Injectable({
  providedIn: 'root'
})
export class LunchItemComponent implements OnInit {
  constructor(private firestore: AngularFirestore) {}
  // exclamação foi posto para não dar erro de inicialização
  index!: any;
  @Input() package!: Lunch;
  @Input() packages!: any;
  @Output() packageSelected = new EventEmitter<void>();
  @Output() delete: EventEmitter<any> = new EventEmitter();
  ngOnInit(): void {
    this.index = sessionStorage.getItem('index');
  }

  onSelected() {
    this.packageSelected.emit();
    sessionStorage.setItem('lunch', JSON.stringify(this.package));
  }

  removeLunch() {
    return this.delete.next(true); 
  }

}
