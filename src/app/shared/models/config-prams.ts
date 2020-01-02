import { CampoGenerico } from './campo-generico';

export interface ConfigPrams {
  pagina?: number;
  limite?: number;
  pesquisa?: string;
  campo?: CampoGenerico;
}
