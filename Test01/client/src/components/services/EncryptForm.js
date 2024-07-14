import React, { useState } from "react";

const EncryptForm = () => {
  const [plainText, setPlainText] = useState("");
  const [encryptedText, setEncryptedText] = useState("");
  const [error, setError] = useState("");

  const baseURL = "http://localhost:4000";

  const handleEncrypt = async () => {
    try {
      const response = await fetch(`${baseURL}/api/algorithms/encrypt`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ plainText }),
      });

      if (!response.ok) {
        throw new Error("Encryption failed");
      }

      const data = await response.json();
      setEncryptedText(data.encryptedText);
      setError("");
    } catch (error) {
      console.error("Encryption failed:", error);
      setError("Encryption failed. Please try again.");
    }
  };

  return (
    <div className="encryption-area">
      <h2>Encrypt Message</h2>
      <textarea
        value={plainText}
        onChange={(e) => setPlainText(e.target.value)}
        placeholder="Enter text to encrypt..."
      />
      <button onClick={handleEncrypt}>ENCRYPT</button>
      {encryptedText && (
        <p className="result">
          Encrypted Text : <span className="bold">{encryptedText}</span>
        </p>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default EncryptForm;
