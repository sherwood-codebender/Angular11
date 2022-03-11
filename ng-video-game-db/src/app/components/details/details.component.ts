import { state } from '@angular/animations';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Navigation, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Game } from '../../models';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {
  gameRating = 0;
  gameId!: string;
  game!: Game;
  routeSub!: Subscription;
  gameSub!: Subscription;
  short_screenshots!: any;

  constructor(
    private ActivatedRoute: ActivatedRoute,
    private httpService: HttpService,
    private router: Router,
  ) {

    let Navigation: any = this.router.getCurrentNavigation();
    if (Navigation.extras && Navigation.extras.state && Navigation.extras.state.short_screenshots) {
      this.short_screenshots = Navigation.extras.state.short_screenshots
    }
   
  }
  ngOnInit(): void {
    this.routeSub = this.ActivatedRoute.params.subscribe((params: Params) => {
      this.gameId = params['id'];
     /* this.short_screenshots = params['short_screenshots'];*/
      this.getGameDetails(this.gameId);
    })

  }

  getGameDetails(id: string): void {
    this.gameSub = this.httpService
      .getGameDetails(id)
      .subscribe((gameResp: Game) => {
        this.game = gameResp;
        console.log(this.game)
        console.log(this.short_screenshots)
        setTimeout(() => {
          this.gameRating = this.game.metacritic;
        }, 1000)
        
      })

 
  }


  getColor(value: number): string {
    if (value > 75) {
      return '#5ee432';
    } else if (value > 50) {
      return '#fffa50';
    } else if (value > 30) {
      return '#f7aa38';
    } else {
      return '#ef4655';
    }
  }

  ngOnDestroy(): void {
    if (this.gameSub) {
      this.gameSub.unsubscribe();
    }

    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }
}
