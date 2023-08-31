import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent {
  car: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.car = history.state.car;
    console.log(this.car.model_name)
  }
}