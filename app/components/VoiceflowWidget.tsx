
"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    voiceflow?: {
      chat?: {
        load: (config: {
          verify: { projectID: string };
          url: string;
          voice: { url: string };
        }) => void;
      };
    };
  }
}

export default function VoiceflowWidget() {
  useEffect(() => {
    const scriptId = "voiceflow-widget-script";

    const initializeVoiceflow = () => {
      window.voiceflow?.chat?.load({
        verify: {
          projectID: "6ae1e2332e2bb7bb800781b7",
        },
        url: "https://general-runtime.voiceflow.com",
        voice: {
          url: "https://runtime-api.voiceflow.com",
        },
      });
    };

    const existingScript = document.getElementById(scriptId);

    if (existingScript) {
      initializeVoiceflow();
      return;
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
    script.type = "text/javascript";
    script.async = true;
    script.onload = initializeVoiceflow;

    document.body.appendChild(script);

    return () => {
      // El widget se mantiene cargado durante la navegación.
    };
  }, []);

  return null;
}
