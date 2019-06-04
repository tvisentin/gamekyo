
export default async function request(url) {
    const res = await fetch(new Request('http://localhost:3333'+url));
    return await res.json();
};