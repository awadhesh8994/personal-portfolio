let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

const binId = "https://api.jsonbin.io/v3/b/67c4145cad19ca34f81508ef"; // Replace this with your actual Bin ID
const apiKey = "YOUR_API_KEY_HERE"; // (Optional) If JSONBin requires an API key

async function updateVisitorCount() {
  try {
    // Get the current visitor count
    let response = await fetch(`https://api.jsonbin.io/v3/b/${binId}/latest`, {
      headers: {
        "X-Master-Key": apiKey, // (Optional) Only if required
      },
    });
    let data = await response.json();
    let count = data.record.visits + 1;

    // Update the visitor count
    await fetch(`https://api.jsonbin.io/v3/b/${binId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key": apiKey, // (Optional)
      },
      body: JSON.stringify({ visits: count }),
    });

    // Display the count
    document.getElementById("visitor-count").innerText = count;
  } catch (error) {
    console.error("Error fetching/updating visitor count:", error);
  }
}

// Run the function when the page loads
document.addEventListener("DOMContentLoaded", updateVisitorCount);


