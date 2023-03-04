import { assertEquals } from "https://deno.land/std@0.178.0/testing/asserts.ts";
import { Math } from "../../src/util/Math.ts";

Deno.test("min", () => {
  const math = new Math();
  assertEquals(math.min(0, 1), 0);
  assertEquals(math.min(1, 0), 0);
  assertEquals(math.min(0, -1), -1);
  assertEquals(math.min(-1, 0), -1);
  assertEquals(math.min(0, 0), 0);
  assertEquals(math.min(0, Number.MAX_SAFE_INTEGER), 0);
  assertEquals(math.min(0, Number.MIN_SAFE_INTEGER), Number.MIN_SAFE_INTEGER);
});

Deno.test("max", () => {
  const math = new Math();
  assertEquals(math.max(0, 1), 1);
  assertEquals(math.max(1, 0), 1);
  assertEquals(math.max(0, -1), 0);
  assertEquals(math.max(-1, 0), 0);
  assertEquals(math.max(0, 0), 0);
  assertEquals(math.max(0, Number.MAX_SAFE_INTEGER), Number.MAX_SAFE_INTEGER);
  assertEquals(math.max(0, Number.MIN_SAFE_INTEGER), 0);
});
