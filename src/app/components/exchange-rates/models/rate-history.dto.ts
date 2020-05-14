export interface RateHistoryDto {
  base: string;
  start_at: string;
  end_at: string;
  rates: {[key: string]: {[key: string]: number}};
}
