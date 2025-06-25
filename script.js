const telemetryBox = document.getElementById("telemetry");
const blobUrl = "https://sotelemetrystorage.blob.core.windows.net/telemetrydata/latest.json";

async function fetchTelemetry() {
  try {
    const cacheBuster = `?t=${Date.now()}`;
    const response = await fetch(blobUrl + cacheBuster, { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    
    const data = await response.json();
    const localTime = new Date(data.timestamp).toLocaleString();

    telemetryBox.innerHTML = `
      <div class="data-entry"><span class="label">📟 Device:</span> ${data.deviceId}</div>
      <div class="data-entry"><span class="label">🌡 Temperature:</span> ${data.temperature} °C</div>
      <div class="data-entry"><span class="label">💧 Humidity:</span> ${data.humidity}%</div>
      <div class="data-entry"><span class="label">🟢 Status:</span> ${data.status ?? '--'}</div>
      <div class="data-entry"><span class="label">⏰ Timestamp:</span> ${localTime}</div>
      <p class="update-"> Updated every 5 minutes with latest telemetry data</p>
    `;

    telemetryBox.classList.add("fade-in");
    setTimeout(() => telemetryBox.classList.remove("fade-in"), 500);
  } catch (err) {
    telemetryBox.innerHTML = `<p class="error">⚠️ Error fetching data: ${err.message}</p>`;
  }
}

fetchTelemetry();
setInterval(fetchTelemetry, 300000); // 5 minutes
