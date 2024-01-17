import { Injectable, computed, signal } from '@angular/core';

type Config = {
  title: string;
  color: string;
  enableShop: boolean;
}
// const a: Config['enableShop']

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  config = signal<Config>({
    title: 'Angular Shop',
    color: '#ffffff',
    enableShop: true
  })
  title = computed(() => this.config().title)
  color = computed(() => this.config().color)
  isShopEnabled = computed(() => this.config().enableShop)

  /* NEI METODI SETTERE
  SONO STATE USATE LE TONDE POI LE GRAFFE PER RESTITUIRE OGGETTO INLINE
  PERCHE js QUANDO TROVA UNA GRAFFA IN ARROW FUNCTION COME RETURN LA INTERPRETA COME UN BLOCCO
  ED ESEGUE L'EPRESSIONE MA SI ASPETTA UN RETURN E QUINDI METTIAMO LE TONDE
  */

  // setConfig(propName: string, value: any) {
  // mettendo keyof Config (tipo creato a inizio pagina)
  // quando viene chiamato il metodo possiamo usare solo le key di Config
  setConfig<K extends keyof Config>(propName: K, value: Config[K]) {
    this.config.update(cfg => ({ ...cfg, [propName]: value }))
    // PROP NAME TRA QUADRE DINAMICA
    // PROP NAME PRENDE IL VALORE DEL CAMPO DA CAMBIARE 
    // POSSIAMO QUINDI USARE UN SOLO METODO SETTER PER TUTTO
  }

  /* 
  Non piu necessari
  setTitle(title: string) {
    this.config.update(cfg => ({ ...cfg, title }))
  }

  setColor(color: string) {
    this.config.update(cfg => ({ ...cfg, color }))
  }

  setEnableShop(enableShop: boolean) {
    this.config.update(cfg => ({ ...cfg, enableShop }))
  } */
}