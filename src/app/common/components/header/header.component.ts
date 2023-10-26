import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
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
  private currentUser! : Subscription

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.currentUser = this.userService.currentUser$.subscribe({
      next: (user) => {
        this.userName = user?.userName || '';
        this.hasUserName = !!this.userName; 
      },
    });
  }

  ngOnDestroy() {
    if (this.currentUser){
          this.currentUser.unsubscribe()

    }
  }

}
