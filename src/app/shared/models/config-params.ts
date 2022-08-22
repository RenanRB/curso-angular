import { CampoGenerico } from './campo-generico';

export interface ConfigParams {
  pagina?: number;
  limite?: number;
  pesquisa?: string;
  campo?: CampoGenerico;
}
