async function main() {
    let response = await fetch("https://api.restful-api.dev/objects");
    let data = await response.json();

    console.log("Fetched Data:", data);

    // Filter items that have BOTH `name` and `data`
    let finalans = data.filter(item => item.name && item.data);

    console.log("Filtered Result:", finalans);
}
main();
