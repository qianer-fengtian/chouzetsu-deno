import {
  FizzBuzzSequencePrinter,
  OutputInterface,
} from "./app/FizzBuzzSequencePrinter.ts";
import { NumberConverter } from "./core/NumberConverter.ts";
import { ReplaceRuleInterface } from "./core/ReplaceRuleInterface.ts";
import { CyclicNumberRule } from "./spec/CyclicNumberRule.ts";
import { PassThroughRule } from "./spec/PassThroughRule.ts";

export class FizzBuzzAppFactory {
  create(): FizzBuzzSequencePrinter {
    return new FizzBuzzSequencePrinter(
      this.createFizzBuzz(),
      this.createOutput()
    );
  }

  private createFizzBuzz(): NumberConverter {
    return new NumberConverter([
      this.createFizzRule(),
      this.createBuzzRule(),
      this.createPassThroughRule(),
    ]);
  }

  private createFizzRule(): ReplaceRuleInterface {
    return new CyclicNumberRule(3, "Fizz");
  }

  private createBuzzRule(): ReplaceRuleInterface {
    return new CyclicNumberRule(5, "Buzz");
  }

  private createPassThroughRule(): ReplaceRuleInterface {
    return new PassThroughRule();
  }

  private createOutput(): OutputInterface {
    return new ConsoleOutput();
  }
}

class ConsoleOutput implements OutputInterface {
  write(data: string): void {
    console.log(data);
  }
}
