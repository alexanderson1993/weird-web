const gamepadTimestamps: Record<string, number> = {};

const callbacks = new Set<(gamepad: Gamepad) => void>();

function updateGamepadStore() {
  const gamepads = navigator.getGamepads();
  let shouldUpdate = false;
  for (const [index, gamepad] of Object.entries(gamepads)) {
    if (!gamepad) continue;
    if (gamepad.timestamp !== gamepadTimestamps[index]) {
      gamepadTimestamps[index] = gamepad.timestamp;
      shouldUpdate = true;
    }
  }
  if (shouldUpdate) {
    for (const gamepad of navigator.getGamepads()) {
      if (gamepad) {
        for (const cb of callbacks) {
          cb(gamepad);
        }
      }
    }
  }
  requestAnimationFrame(updateGamepadStore);
}
if (typeof window !== "undefined") {
  requestAnimationFrame(updateGamepadStore);
}

export function addGamepadCallback(callback: (gamepad: Gamepad) => void) {
  callbacks.add(callback);

  return () => {
    callbacks.delete(callback);
  };
}

export function calculateHatDirection(num: number) {
  let x = 0;
  let y = 0;
  const input = num.toFixed(5);
  if (
    input.startsWith("-1") ||
    input.startsWith("-0.71429") ||
    input.startsWith("1")
  ) {
    y = 1;
  }
  if (
    input.startsWith("-0.71429") ||
    input.startsWith("-0.42857") ||
    input.startsWith("-0.14286")
  ) {
    x = 1;
  }
  if (
    input.startsWith("-0.14286") ||
    input.startsWith("0.14286") ||
    input.startsWith("0.42857")
  ) {
    y = -1;
  }
  if (
    input.startsWith("0.42857") ||
    input.startsWith("0.71429") ||
    input.startsWith("1")
  ) {
    x = -1;
  }
  if (x && y) {
    // If it's at an angle, we should
    // normalize each dimension to the unit circle
    x *= Math.cos(Math.PI / 4);
    y *= Math.sin(Math.PI / 4);
  }
  return { x, y };
}
