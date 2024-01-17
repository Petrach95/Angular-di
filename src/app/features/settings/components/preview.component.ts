import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SettingsService } from '../../../core/settings.service';

@Component({
  selector: 'app-preview',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h1 class="text-xl my-6">Preview</h1>
    
    <div
      class="text-2xl"
      [style.color]="settingsService.color()"
    >
        {{settingsService.title()}}
    </div>

    @if (settingsService.isShopEnabled()) {
        <button
          class="btn btn-primary my-6"
        >
            Add To Cart
        </button>    
    }
    
    {{render()}}
  `,
})
export class PreviewComponent {
  settingsService = inject(SettingsService)


  render() {
    console.log('render preview')
  }
}