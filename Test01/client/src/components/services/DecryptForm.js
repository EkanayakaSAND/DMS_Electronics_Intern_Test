import React, { useState } from "react";

const DecryptForm = () => {
  const [encryptedText, setEncryptedText] = useState("");
  const [decryptedText, setDecryptedText] = useState("");
  const [error, setError] = useState("");

  const baseURL = "http://localhost:4000";

  const handleDecrypt = async () => {
    try {
      const response = await fetch(`${baseURL}/api/algorithms/decrypt`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ encryptedText }),
      });

      if (!response.ok) {
        throw new Error("Decryption failed");
      }

      const data = await response.json();
      setDecryptedText(data.decryptedText);
      setError("");
    } catch (error) {
      console.error("Decryption failed:", error);
      setError("Decryption failed. Please try again.");
    }
  };

  return (
    <div className="decryption-area">
      <h2>Decrypt Message</h2>
      <textarea
        value={encryptedText}
        onChange={(e) => setEncryptedText(e.target.value)}
        placeholder="Enter text to decrypt..."
      />
      <button onClick={handleDecrypt}>DECRYPT</button>
      {decryptedText && (
        <p className="result">
          Decrypted Text: <span className="bold">{decryptedText}</span>
        </p>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default DecryptForm;
