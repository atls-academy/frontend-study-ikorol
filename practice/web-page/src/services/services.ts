const postData = async (url: string, data: string) => {
  const result: Response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: data,
  })
  return result.json()
}
const getResources = async (url: string) => {
  const result: Response = await fetch(url)

  if (!result.ok) {
    throw new Error(`Could not fetch ${url}, status: ${result.status}`)
  }
  return result.json()
}

export { postData }
export { getResources }
