import { assertEquals } from "https://deno.land/std@0.178.0/testing/asserts.ts";
import { NumberConverter } from "../src/NumberConverter.ts";

Deno.test("convert", () => {
  const fizzBuzz = new NumberConverter();
  assertEquals(fizzBuzz.convert(1),  "1")
  assertEquals(fizzBuzz.convert(2),  "2")
  assertEquals(fizzBuzz.convert(3),  "Fizz")
  assertEquals(fizzBuzz.convert(4),  "4")
  assertEquals(fizzBuzz.convert(5),  "Buzz")
  assertEquals(fizzBuzz.convert(6),  "Fizz")
  assertEquals(fizzBuzz.convert(10), "Buzz")
  assertEquals(fizzBuzz.convert(15), "FizzBuzz")
  assertEquals(fizzBuzz.convert(30), "FizzBuzz")
})