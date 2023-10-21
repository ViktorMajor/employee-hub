import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isCollapsed = true;
  userName: string = '';
  hasUserName: boolean = false; 

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.currentUser$.subscribe({
      next: (user) => {
        this.userName = user?.userName || '';
        this.hasUserName = !!this.userName; 
      },
    });
  }
}
