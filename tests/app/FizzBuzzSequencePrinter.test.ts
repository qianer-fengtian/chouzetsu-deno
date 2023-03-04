import {
  assertSpyCall,
  assertSpyCalls,
  returnsNext,
  spy,
  stub,
} from "https://deno.land/std@0.178.0/testing/mock.ts";
import { NumberConverter } from "../../src/core/NumberConverter.ts";
import {
  FizzBuzzSequencePrinter,
  OutputInterface,
} from "../../src/app/FizzBuzzSequencePrinter.ts";

class MockNumberConverter extends NumberConverter {
  convert(i: number) {
    return String(i);
  }
}

class MockOutput implements OutputInterface {
  write(_data: string): void {}
}

Deno.test("print none", () => {
  const converter = new MockNumberConverter([]);
  const output = new MockOutput();
  const convertSpy = spy(converter, "convert");
  const writeSpy = spy(output, "write");
  const printer = new FizzBuzzSequencePrinter(converter, output);
  printer.printRange(0, -1);
  assertSpyCalls(convertSpy, 0);
  assertSpyCalls(writeSpy, 0);
});

Deno.test("print 1 to 3", () => {
  const converter = new MockNumberConverter([]);
  const output = new MockOutput();
  const convertStub = stub(
    converter,
    "convert",
    returnsNext(["1", "2", "Fizz"])
  );
  const writeStub = stub(
    output,
    "write",
    returnsNext([undefined, undefined, undefined])
  );
  const printer = new FizzBuzzSequencePrinter(converter, output);
  printer.printRange(1, 3);
  assertSpyCall(convertStub, 0, { args: [1], returned: "1" });
  assertSpyCall(convertStub, 1, { args: [2], returned: "2" });
  assertSpyCall(convertStub, 2, { args: [3], returned: "Fizz" });
  assertSpyCalls(convertStub, 3);
  assertSpyCall(writeStub, 0, { args: ["1 1"], returned: undefined });
  assertSpyCall(writeStub, 1, { args: ["2 2"], returned: undefined });
  assertSpyCall(writeStub, 2, { args: ["3 Fizz"], returned: undefined });
  assertSpyCalls(writeStub, 3);
});
