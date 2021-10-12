export type RuleResType<T> = {
  code: number;
  message: string;
  data: T;
  total?: number;
};
