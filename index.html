async function fetchTelemetry() {
  const blobUrl = "https://sotelemetrystorage.blob.core.windows.net/telemetrydata/latest.json";

  try {
    const response = await fetch(blobUrl);
    if (!response.ok) throw new Error("Failed to fetch");

    const data = await response.json();
    document.getElementById("telemetry").innerHTML = `
      <p><strong>Device:</strong> ${data.deviceId}</p>
      <p><strong>Temperature:</strong> ${data.temperature} °C</p>
      <p><strong>Humidity:</strong> ${data.humidity}%</p>
      <p><strong>Timestamp:</strong> ${data.timestamp}</p>
    `;
  } catch (error) {
    document.getElementById("telemetry").innerHTML = `<p style="color:red;">⚠️ Error fetching data: ${error.message}</p>`;
  }
}

// Poll every 30s
fetchTelemetry();
setInterval(fetchTelemetry, 30000);
