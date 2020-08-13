import { Component, OnInit,Input} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

import {} from '@fortawesome/angular-fontawesome';
import {} from '@fortawesome/free-regular-svg-icons';
import {faCross,faCircle,faPen} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {
@Input() iconName:String;

  faCross=faCross;
  faCircle=faCircle;
  faPen=faPen;
  
  constructor() { }

  ngOnInit(): void {
  }

}
