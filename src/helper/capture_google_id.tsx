export function capture_google_id(googleDriveLink: string) {
  // Regular expression to capture the ID
  const idRegex = /id=([a-zA-Z0-9_-]+)/
  const match = googleDriveLink.match(idRegex)

  if (match) {
    const captureId = match[1]
    return captureId
  } else {
    console.log("Can't find google ID!")
  }
}
