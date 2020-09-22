function isOk(res: Response) {
    if (res.ok) {
      return res;
    }
    throw new Error(`Something went wrong ${res.statusText}`);
  }

export default function getAPI(url: string) {
    return fetch(url)
        .then(async (res: Response) => {
            if(isOk(res)){
                const data = await res.json()
                return data
            }
            throw new Error(`Something went wrong ${res.statusText}`)
        })
}