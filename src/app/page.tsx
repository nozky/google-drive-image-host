"use client"

import Image from "next/image"
import { useState } from "react"
import { capture_google_id } from "@/helper/capture_google_id"

export default function Home() {
  const [googleLink, setGoogleLink] = useState("")
  const [id, setId] = useState("")
  const [errorMsg, setErrorMsg] = useState<string | null>("Preview")

  function captureId() {
    const googleId = capture_google_id(googleLink)
    if (googleId) {
      setId(googleId)
      setErrorMsg(null)
    } else {
      setErrorMsg("Can't find Image ID!")
    }
  }

  return (
    <main className="grid gap-2 place-content-center min-h-screen w-screen">
      <div>
        <h1 className="text-white drop-shadow-sm  text-xl text-center p-2">
          Display image save from google drive!
        </h1>
      </div>
      <div className="flex border border-gray-400 min-w-[320px] p-2 gap-2 rounded-sm">
        <input
          className="w-full text-black"
          type="text"
          onChange={(e) => {
            setGoogleLink(e.target.value)
          }}
        />
        <button className="bg-gray-400 p-1 rounded-sm" onClick={captureId}>
          View
        </button>
      </div>
      <div className="relative w-[520px] h-[300px] bg-gray-400 border shadow-md shadow-white">
        {id && (
          <Image
            src={`https://drive.google.com/uc?export=view&id=${id}`}
            sizes="300"
            fill
            style={{ objectFit: "cover" }}
            alt="Image from google drive"
          />
        )}
        <div className="absolute inset-0 grid place-content-center">
          {errorMsg != null && <p>{errorMsg}</p>}
        </div>
      </div>
      <div className="p-2 text-center">
        <p>
          For More Information Please checkout link to my{" "}
          <span className="underline">
            <a href="https://github.com/nozky/google-drive-image-host">
              Github.
            </a>
          </span>
        </p>
      </div>
    </main>
  )
}
