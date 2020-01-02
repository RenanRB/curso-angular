import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { ConfigPrams } from '../shared/models/config-prams';

@Injectable({
  providedIn: 'root'
})
export class ConfigParamsService {

  constructor() { }

  configurarParametros(config: ConfigPrams): HttpParams {
    let httpParams = new HttpParams();
    if (config.pagina) {
      httpParams = httpParams.set('_page', config.pagina.toString());
    }
    if (config.limite) {
      httpParams = httpParams.set('_limit', config.limite.toString());
    }
    if (config.pesquisa) {
      httpParams = httpParams.set('q', config.pesquisa);
    }
    if (config.campo) {
      httpParams = httpParams.set(config.campo.tipo, config.campo.valor.toString());
    }
    httpParams = httpParams.set('_sort', 'id');
    httpParams = httpParams.set('_order', 'desc');

    return httpParams;
  }
}
