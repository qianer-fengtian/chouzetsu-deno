import { FizzBuzzSequencePrinter } from "./app/FizzBuzzSequencePrinter.ts";
import { FizzBuzzAppFactory } from "./FizzBuzzAppFactory.ts";

class App {
  static main(): void {
    const factory = new FizzBuzzAppFactory();
    const printer = factory.create();
    printer.printRange(1, 100);
  }
}

App.main();
