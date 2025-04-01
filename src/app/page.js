"use client";
import { useState } from "react";
import qrcode from "qrcode";

export default function Home() {
  const [url, setUrl] = useState("");
  const [qrCode, setQrCode] = useState(null);

  const generateQRCode = async (e) => {
    e.preventDefault();
    if (!url) return;

    try {
      const qrCodeData = await qrcode.toDataURL(url);
      setQrCode(qrCodeData);
    } catch (err) {
      console.error("Error generating QR Code:", err);
    }
  };

  return (
    <div className="h-screen w-full bg-slate-900 flex flex-col justify-center items-center p-4">
      <form
        onSubmit={generateQRCode}
        className="flex flex-col gap-4 bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        <input
          type="text"
          name="url"
          placeholder="Enter URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
        <button
          type="submit"
          className="bg-green-500 text-white font-semibold py-2 rounded-lg hover:bg-green-600 transition-all"
        >
          Generate QR Code
        </button>

        {qrCode && (
          <>
            <img
              src={qrCode}
              alt="QR Code"
              className="mt-8 w-48 h-48 object-contain mx-auto"
            />
            <a
              href={qrCode}
              className="bg-blue-500 text-white font-semibold py-2 rounded-lg text-center mt-4 w-full hover:bg-blue-600 transition-all"
              download="qrcode.png"
            >
              Download QR Code
            </a>
          </>
        )}
      </form>
    </div>
  );
}