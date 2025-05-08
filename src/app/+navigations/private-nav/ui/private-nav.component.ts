import { Component , OnInit } from '@angular/core';
import { FlowbiteService } from '../../../+services/flowbite.service';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-private-nav',
  imports: [],
  templateUrl: './private-nav.component.html',
  styleUrl: './private-nav.component.css'
})
export class PrivateNavComponent  {

  // constructor(private flowbiteService: FlowbiteService) {}

  // ngOnInit(): void {
  //   this.flowbiteService.loadFlowbite((flowbite) => {
  //     initFlowbite();
  //   });
  // }
}
