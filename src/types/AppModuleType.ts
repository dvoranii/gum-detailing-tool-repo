export interface AppModule {
  id: 'oral-systemic' | 'partners' | 'interproximal' | 'toothbrush' | 'operatory' | 'accessories';
  title: string;
  icon?: string | undefined;
  route: string;
  isActive?:boolean;
  isSmall?: boolean;
}