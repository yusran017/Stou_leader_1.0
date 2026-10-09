export async function saveTextFile(filename: string, body: string, mime: string) {
  const file = new File([body], filename, { type: mime });
  const nav = navigator as Navigator & { canShare?: (data: ShareData) => boolean };
  if (nav.canShare?.({ files: [file] })) {
    try {
      await navigator.share({ files: [file], title: filename });
      return "shared" as const;
    } catch (err) {
      if ((err as DOMException)?.name === "AbortError") return "cancel" as const;
    }
  }
  const url = URL.createObjectURL(new Blob([body], { type: `${mime};charset=utf-8` }));
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.rel = "noopener";
  document.body.appendChild(a);
  a.click();
  window.setTimeout(() => {
    a.remove();
    URL.revokeObjectURL(url);
  }, 2500);
  return "saved" as const;
}