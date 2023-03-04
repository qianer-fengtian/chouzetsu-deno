import { NumberConverter } from "../core/NumberConverter.ts";

export interface OutputInterface {
  write(data: string): void;
}

export class FizzBuzzSequencePrinter {
  constructor(
    private readonly fizzBuzz: NumberConverter,
    private readonly output: OutputInterface
  ) {}

  printRange(begin: number, end: number): void {
    for (let i = begin; i <= end; i++) {
      const text = this.fizzBuzz.convert(i);
      const formattedText = `${i} ${text}`;
      this.output.write(formattedText);
    }
  }
}
