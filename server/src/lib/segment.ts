import path from "path"

export interface Segment {
  filename: string
  timestamp: Date
  duration: number
  extinf: string
}

export function createSegment(filename: string): Segment | null {
  if (!filename || filename.indexOf(".ts") < 0) return null
  let [_, timestamp, duration] = path
    .basename(filename)
    .replace(".ts", "")
    .split("_")
  if (!duration || !timestamp) return null

  let extinf = duration.slice(0, -6) + "." + duration.slice(-6)
  return {
    filename,
    timestamp: new Date(Number.parseInt(timestamp, 10) * 1000),
    duration: Number.parseInt(duration, 10),
    extinf,
  }
}
