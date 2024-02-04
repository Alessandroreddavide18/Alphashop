import { Component, OnInit, Inject } from '@angular/core';
import { AuthappService } from 'src/services/authapp.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public BasicAuth: AuthappService, private route: ActivatedRoute) { }
  
   userId: string = "";
  ngOnInit(): void {
    this.userId = this.route.snapshot.params['userId'];
  }

}
