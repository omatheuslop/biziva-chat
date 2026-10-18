// Provider secrets remain in the live store but never enter persisted storage.
export function scrubCredentials<T extends object>(state: T): T {
  const safe = { ...state };
  for (const name of Object.keys(safe)) {
    if (/apikey|secret|accesscode/i.test(name)) Reflect.set(safe, name, "");
  }
  return safe;
}
