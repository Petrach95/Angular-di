import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SettingsService } from '../../../core/settings.service';

@Component({
  selector: 'app-editor',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    JsonPipe
  ],
  template: `
    <h1 class="text-xl my-6">Editor</h1>
    
    <div class="flex gap-2 items-center">
      <input 
        type="text"
        class="input input-bordered"
        #title 
        (input)="settingsService.setConfig('title', title.value)"
        [value]="settingsService.config().title"
        >
        <!-- (input)="settingsService.setTitle(title.value)" -->
        
        <input 
          type="checkbox"
          class="toggle toggle-success"
          #enableShop
          (input)="settingsService.setConfig('enableShop', enableShop.checked)"
          [checked]="settingsService.config().enableShop"
          >
          <!-- (input)="settingsService.setEnableShop(enableShop.checked)" -->
      
      <input 
        type="color"
        class="input input-bordered"
        #color
        (input)="settingsService.setConfig('color', color.value)"
        [value]="settingsService.config().color"
        >
        <!-- (input)="settingsService.setColor(color.value)" -->
    </div>
    
    <pre>{{settingsService.config() | json}}</pre>
  `,
  styles: ``
})
export class EditorComponent {
  settingsService = inject(SettingsService)
}