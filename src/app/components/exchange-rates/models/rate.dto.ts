export interface RateDto {
  base: string;
  date: string;
  rates: {[key: string]: number};
}
