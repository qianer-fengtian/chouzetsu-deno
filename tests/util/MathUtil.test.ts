import { assertEquals } from "https://deno.land/std@0.178.0/testing/asserts.ts";
import {
  assertSpyCall,
  assertSpyCalls,
  returnsNext,
  stub,
} from "https://deno.land/std@0.178.0/testing/mock.ts";
import { Math } from "../../src/util/Math.ts";
import { MathUtil } from "../../src/util/MathUtil.ts";

Deno.test("saturate #1", () => {
  const math = new Math();
  const mathUtil = new MathUtil(math);
  const maxStub = stub(math, "max", returnsNext([2]));
  const minStub = stub(math, "min", returnsNext([2]));
  assertEquals(mathUtil.saturate(2, 1, 3), 2);
  assertSpyCall(maxStub, 0, { args: [2, 1], returned: 2 });
  assertSpyCall(minStub, 0, { args: [2, 3], returned: 2 });
  assertSpyCalls(maxStub, 1);
  assertSpyCalls(minStub, 1);
});

Deno.test("saturate #2", () => {
  const math = new Math();
  const mathUtil = new MathUtil(math);
  const maxStub = stub(math, "max", returnsNext([1, 4]));
  const minStub = stub(math, "min", returnsNext([1, 3]));
  assertEquals(mathUtil.saturate(0, 1, 3), 1);
  assertSpyCall(maxStub, 0, { args: [0, 1], returned: 1 });
  assertSpyCall(minStub, 0, { args: [1, 3], returned: 1 });
  assertEquals(mathUtil.saturate(4, 1, 3), 3);
  assertSpyCall(maxStub, 1, { args: [4, 1], returned: 4 });
  assertSpyCall(minStub, 1, { args: [4, 3], returned: 3 });
  assertSpyCalls(maxStub, 2);
  assertSpyCalls(minStub, 2);
});

Deno.test("saturate #3", () => {
  const math = new Math();
  const mathUtil = new MathUtil(math);
  const maxStub = stub(math, "max", returnsNext([1, 3]));
  const minStub = stub(math, "min", returnsNext([1, 3]));
  assertEquals(mathUtil.saturate(1, 1, 3), 1);
  assertSpyCall(maxStub, 0, { args: [1, 1], returned: 1 });
  assertSpyCall(minStub, 0, { args: [1, 3], returned: 1 });
  assertEquals(mathUtil.saturate(3, 1, 3), 3);
  assertSpyCall(maxStub, 1, { args: [3, 1], returned: 3 });
  assertSpyCall(minStub, 1, { args: [3, 3], returned: 3 });
  assertSpyCalls(maxStub, 2);
  assertSpyCalls(minStub, 2);
});
