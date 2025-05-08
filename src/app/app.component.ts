import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { FlowbiteService } from './+services/flowbite.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  constructor(private flowbiteService: FlowbiteService) {}
  title = 'web-app';
  // extends  ارثبری
  ngOnInit(): void {
    initFlowbite();
    this.flowbiteService.loadFlowbite((flowbite) => {
      initFlowbite();
    });
  }
  

    
}