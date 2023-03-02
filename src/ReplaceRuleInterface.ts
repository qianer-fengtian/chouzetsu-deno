export interface ReplaceRuleInterface {
  apply(carry: string, n: number): string;

  match(carry: string, n: number): boolean;
}
