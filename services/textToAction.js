import React from 'react';
import * as FileSystem from 'expo-file-system';

const API_KEY = "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";

const TextToActionService = {
  getAction: async (message) => {
    console.log("Message : ", message);
    try {
      const data = {
        "inputs": "Available actions : Login; Register; Credit; Statement; Transfert; OTP; Card; Balance. What action should I choose for this message: "+message,
    };
    
    const response = await fetch(
        "https://api-inference.huggingface.co/models/meta-llama/Meta-Llama-3-8B-Instruct",
        {
            headers: { Authorization: "Bearer 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", "Content-Type": "application/json", },
            method: "POST",
            body: JSON.stringify(data),
        }
    );
    
    if (!response.ok) {
        console.error("Error:", response.status, response.statusText);
        return '';
        // Handle the error appropriately
    } else {
        const contentType = response.headers.get("content-type");
        const responseData = await response.text();
    
        console.log("Content-Type:", contentType);
        console.log("Response Data:", JSON.parse(responseData).generated_text);
        return JSON.parse(responseData).generated_text;
    }
    } catch (error) {
      throw error;
    }
  },
};

export default TextToActionService;

// message = "I want to sign in \n Available actions : Login; Register; Card; Balance \n  Send just the action, no comment from you";

