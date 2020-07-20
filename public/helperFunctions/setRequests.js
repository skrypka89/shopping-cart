//Set an array of fetch requests
export default function setRequests(urls) {
  const requests = [];

  urls.forEach(url =>
    requests.push(fetch(url).then(res => res.json()))
  );

  return requests;
}