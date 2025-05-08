import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FlowbiteService } from '../../../+services/flowbite.service';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-public-nav',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './public-nav.component.html',
  styleUrl: './public-nav.component.css'
})
export class PublicNavComponent  {
  // constructor(private flowbiteService: FlowbiteService) { }

  // ngOnInit(): void {
  //   this.flowbiteService.loadFlowbite((flowbite) => {
  //     initFlowbite();
  //   });
  // }
}
