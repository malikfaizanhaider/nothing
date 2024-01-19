import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {UnstyledDrawerComponent} from "@unstyled/components/drawer/drawer.component";
import {OverlayComponent} from "../@unstyled/components/overlay/overlay.component";
import {CdkScrollable} from "@angular/cdk/overlay";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, UnstyledDrawerComponent, OverlayComponent, CdkScrollable],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'unstyled';

  numbers = Array.from({length: 100}, (_, i) => i + 1);

  drawerMode = 'side';
  drawerOpened = true;

  /**
   * Toggle the drawer mode
   */
  toggleDrawerMode(): void
  {
    this.drawerMode = this.drawerMode === 'side' ? 'over' : 'side';
  }

  /**
   * Toggle the drawer open
   */
  toggleDrawerOpen(): void
  {
    this.drawerOpened = !this.drawerOpened;
  }

  /**
   * Drawer opened changed
   *
   * @param opened
   */
  drawerOpenedChanged(opened: boolean): void
  {
    this.drawerOpened = opened;
  }

}
