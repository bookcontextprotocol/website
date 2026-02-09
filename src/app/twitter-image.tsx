import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Book Context Protocol";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function TwitterImage() {
  const geistSemiBold = await readFile(
    join(
      process.cwd(),
      "node_modules/geist/dist/fonts/geist-sans/Geist-SemiBold.ttf"
    )
  );
  const geistRegular = await readFile(
    join(
      process.cwd(),
      "node_modules/geist/dist/fonts/geist-sans/Geist-Regular.ttf"
    )
  );

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#0a0a0a",
          padding: "80px",
          fontFamily: "Geist",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 24,
            height: 24,
            backgroundColor: "#22c55e",
            marginBottom: 32,
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 600,
            color: "#e5e5e5",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          Book Context Protocol
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 24,
            color: "#a3a3a3",
            marginTop: 24,
            lineHeight: 1.5,
            maxWidth: 700,
          }}
        >
          Licensed, citable retrieval for books, papers, and deep reference
          material — built for AI.
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Geist",
          data: geistSemiBold,
          weight: 600,
          style: "normal",
        },
        {
          name: "Geist",
          data: geistRegular,
          weight: 400,
          style: "normal",
        },
      ],
    }
  );
}
