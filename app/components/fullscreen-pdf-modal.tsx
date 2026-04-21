"use client";

import { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

type FullscreenPdfModalProps = {
  isOpen: boolean;
  pdfUrl: string;
  onClose: () => void;
};

export function FullscreenPdfModal({ isOpen, pdfUrl, onClose }: FullscreenPdfModalProps) {
  const [pages, setPages] = useState<number>(0);
  const [pageWidth, setPageWidth] = useState<number>(900);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const updatePageWidth = () => {
      const maxWidth = 960;
      const padding = 64;
      setPageWidth(Math.max(320, Math.min(maxWidth, window.innerWidth - padding)));
    };

    updatePageWidth();
    document.body.style.overflow = "hidden";
    window.addEventListener("resize", updatePageWidth);
    window.addEventListener("keydown", onEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("resize", updatePageWidth);
      window.removeEventListener("keydown", onEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[999] bg-black/95">
      <div className="h-full w-full overflow-y-auto">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-black/90 px-6 py-4 backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#c0c8e0]">
            Наше исследование
          </p>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Закрыть
          </button>
        </div>

        <div className="mx-auto flex w-full max-w-[1100px] flex-col items-center gap-5 px-4 py-8">
          <Document
            file={pdfUrl}
            loading={<p className="text-[#8090b8]">Загрузка документа...</p>}
            onLoadSuccess={({ numPages }) => setPages(numPages)}
            onLoadError={() => setPages(0)}
          >
            {Array.from({ length: pages }, (_, index) => (
              <Page
                key={index + 1}
                pageNumber={index + 1}
                width={pageWidth}
                renderAnnotationLayer
                renderTextLayer
              />
            ))}
          </Document>
        </div>
      </div>
    </div>
  );
}
