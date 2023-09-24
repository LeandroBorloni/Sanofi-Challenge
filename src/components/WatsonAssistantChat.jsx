// WatsonAssistantChat.js
"use client"
import { useEffect } from 'react';

const WatsonAssistantChat = () => {
  useEffect(() => {
    window.watsonAssistantChatOptions = {
      integrationID: "926aeafe-1cd5-4e9f-8757-671c287282d2",
      region: "us-south",
      serviceInstanceID: "42ed430b-8fe0-4630-b8f0-be2fcc958b34",
      onLoad: function (instance) {
        instance.render();
      }
    };

    const t = document.createElement('script');
    t.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);

    return () => {
      // Limpar o script quando o componente for desmontado
      document.head.removeChild(t);
    };
  }, []);

  return null;
};

export default WatsonAssistantChat;
