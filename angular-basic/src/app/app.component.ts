import { Component, OnInit, OnDestroy  } from '@angular/core';
import { CallAPIService } from './call-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //intervalSub: any;
  //ngOnInit() {
  //  this.intervalSub = setInterval(() => {
  //    console.log('Hello from ngOnInit');
  //  }, 1000)
  //}

  //ngOnDestroy() {
  //  if (this.intervalSub) {
  //    clearInterval(this.intervalSub);
  //  }
//}
  title = 'sherwood';

  getMin(a: any, b: any) {
    if (a < b) {
      return a;
    }
    
      return b;
  }

  itemImageUrl = 'https://cdnmedia.baotintuc.vn/Upload/lQuX6s340fSBU8AUyrDPxg/files/2022/03/putin-nga-tyleungho.jpg';

  data = [{
    name: 'Sherwood',
    age: '22',
    gender: 'male'
  },
  {
    name: 'Katarina',
    age: '21',
    gender: 'female'
  },
  ]
  data_from_api: any;
  constructor(private user: CallAPIService) {
    this.user.getData().subscribe(data => {
      this.data_from_api = data
    })
   
  }

  
  
}
