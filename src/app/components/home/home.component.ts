
import {Component, ViewChild} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {NgbCarousel, NgbCarouselModule, NgbSlideEvent, NgbSlideEventSource} from "@ng-bootstrap/ng-bootstrap";
import {NgFor} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  //standalone: true,
  //imports: [NgbCarouselModule, NgFor, FormsModule],
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  @ViewChild('carousel', { static: true }) carousel: NgbCarousel;

}
