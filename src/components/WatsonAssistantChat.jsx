// WatsonAssistantChat.js
"use client"
import { useEffect, useState } from 'react';

const WatsonAssistantChat = () => {
  const [hasRendered, setHasRendered] = useState(false);
  const [script, setScript] = useState(null);

  useEffect(() => {
    if (!hasRendered) {
      window.watsonAssistantChatOptions = {
        integrationID: "89021583-f583-4bc0-906f-123d45cb127c",
        region: "us-south",
        serviceInstanceID: "42ed430b-8fe0-4630-b8f0-be2fcc958b34",
        onLoad: function(instance) { instance.render(); }
      };

      const newScript = document.createElement('script');
      newScript.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
      document.head.appendChild(newScript);

      setScript(newScript);
      setHasRendered(true);
    }

    return () => {
      // Limpar o script quando o componente for desmontado
      if (script) {
        document.head.removeChild(script);
      }
    };
  }, [hasRendered, script]);

  return null;
};

export default WatsonAssistantChat;

