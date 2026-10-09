type InstallPrompt = Event & { prompt: () => Promise<void> };

let promptEvent: InstallPrompt | null = null;
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((listener) => listener());
}

export function bindInstallPrompt() {
  const onPrompt = (event: Event) => {
    event.preventDefault();
    promptEvent = event as InstallPrompt;
    emit();
  };
  const onInstalled = () => {
    promptEvent = null;
    emit();
  };
  window.addEventListener("beforeinstallprompt", onPrompt);
  window.addEventListener("appinstalled", onInstalled);
  return () => {
    window.removeEventListener("beforeinstallprompt", onPrompt);
    window.removeEventListener("appinstalled", onInstalled);
  };
}

export function subscribeInstall(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function installReady() {
  return promptEvent != null;
}

export function installedAlready() {
  if (typeof window === "undefined") return false;
  const nav = window.navigator as Navigator & { standalone?: boolean };
  return window.matchMedia("(display-mode: standalone)").matches || nav.standalone === true;
}

export async function runInstall() {
  if (!promptEvent) return false;
  await promptEvent.prompt();
  promptEvent = null;
  emit();
  return true;
}
