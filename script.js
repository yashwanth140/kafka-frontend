const telemetryBox = document.getElementById("telemetry");
const blobUrl = "https://sotelemetrystorage.blob.core.windows.net/telemetrydata/latest.json";

async function fetchTelemetry() {
  try {
    const response = await fetch(blobUrl);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();

    telemetryBox.innerHTML = `
      <p><strong>Device:</strong> ${data.deviceId}</p>
      <p><strong>Temperature:</strong> ${data.temperature} °C</p>
      <p><strong>Humidity:</strong> ${data.humidity}%</p>
      <p><strong>Timestamp:</strong> ${data.timestamp}</p>
    `;
    telemetryBox.classList.add("fade-in");
    setTimeout(() => telemetryBox.classList.remove("fade-in"), 500);
  } catch (err) {
    telemetryBox.innerHTML = `<p class="error">⚠️ Error fetching data: ${err.message}</p>`;
  }
}

// Load initially and then refresh every 5 minutes (300000 ms)
fetchTelemetry();
setInterval(fetchTelemetry, 300000);
