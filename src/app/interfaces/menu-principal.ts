export interface Modulos {
  'nombre_modulo': string;
  menus: Menu[];
}

interface Menu {
  'nombre_menu': string;
  icono: string;
  formas: Forma[];
}

interface Forma {
  'nombre_forma': string;
  forma: string;
}
