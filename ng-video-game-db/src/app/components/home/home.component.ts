import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { APIResponse, Game } from '../../models';
import { HttpService } from '../../services/http.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public sort!: string;
  public games!: Array<Game>;
  private routeSub!: Subscription;
  private gamesub!: Subscription;

  constructor(
    private httpService: HttpService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      if (params['game-search']) {
        this.searchGames('metacrit', params['game-search']);
      } else {
        this.searchGames('metacrit');
      }
    })
  }

  searchGames(sort: string, search?: string): void {
    this.gamesub = this.httpService.getGameList(sort, search)
      .subscribe((gameList: APIResponse<Game>) => {
        this.games = gameList.results;
        console.log(this.games);
      })
  }

  openGameDetails(id: string): void {
    let short_screenshots = this.games.find(item => { item.id === id })?.short_screenshots
    this.router.navigate(['details', { id, short_screenshots }])
  }

  ngOnDestroy(): void {
    if (this.gamesub) {
      this.gamesub.unsubscribe();
    }

    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }
}
