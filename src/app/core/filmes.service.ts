import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Filme } from '../shared/models/filme';
import { ConfigParams } from '../shared/models/config-params';
import { ConfigParamsService } from './config-params.service';

const url = 'http://localhost:3000/filmes/';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  constructor(private http: HttpClient,
              private configService: ConfigParamsService) { }

  salvar(filme: Filme): Observable<Filme> {
    return this.http.post<Filme>(url, filme);
  }

  editar(filme: Filme): Observable<Filme> {
    return this.http.put<Filme>(url + filme.id, filme);
  }

  listar(config: ConfigParams): Observable<Filme[]> {
    const configParams = this.configService.configurarParametros(config);
    return this.http.get<Filme[]>(url, {params: configParams});
  }

  visualizar(id: number): Observable<Filme> {
    return this.http.get<Filme>(url + id);
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(url + id);
  }
}
