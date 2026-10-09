function shareable(file: File) {
  try {
    return !!navigator.canShare?.({ files: [file] });
  } catch {
    return false;
  }
}

export async function saveTextFile(filename: string, body: string, mime: string) {
  const blob = new Blob([body], { type: `${mime};charset=utf-8` });
  const typed = new File([blob], filename, { type: mime });
  const plain = new File([blob], filename, { type: "application/octet-stream" });
  const file = shareable(typed) ? typed : shareable(plain) ? plain : null;
  if (file) {
    try {
      await navigator.share({ files: [file], title: filename });
      return "shared" as const;
    } catch (err) {
      if ((err as DOMException)?.name === "AbortError") return "cancel" as const;
    }
  }
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.rel = "noopener";
  document.body.appendChild(a);
  a.click();
  window.setTimeout(() => {
    a.remove();
    URL.revokeObjectURL(url);
  }, 4000);
  return "saved" as const;
}
