import * as React from "react";
function subscribe() {
  return () => {};
}
export function useHydrated() {
  return React.useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
}

export function ClientOnly({
  children,
  fallback = null,
}: {
  children: () => React.ReactNode;
  fallback?: React.ReactNode;
}) {
  return useHydrated()
    ? React.createElement(React.Fragment, null, children())
    : React.createElement(React.Fragment, null, fallback);
}
