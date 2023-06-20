// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-container',
//   templateUrl: './container.component.html',
//   styleUrls: ['./container.component.css']
// })
// export class ContainerComponent {
//   handleFilterSubmitted(filters: { [category: string]: string[] }) {
//     console.log(filters);
//   }
// }
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  constructor(private http: HttpClient) {}

  handleFilterSubmitted(filters: { [category: string]: string[] }) {
    console.log(filters,'Data to send');
    // Simulate sending the data to a dummy API
    this.http.post('https://dummy-api.com/filter', filters).subscribe(
      () => {
        console.log('Data sent to dummy API successfully');
      },
      (error) => {
        console.error('Error occurred while sending data to dummy API:', error);
      }
    );
  }
}


