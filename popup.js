document.addEventListener("DOMContentLoaded", () => {

  let scannedCount = 0;
  let fakeCount = 0;
  let aiCount = 0;

  const checkBtn = document.getElementById("checkBtn");
  const resultDiv = document.getElementById("result");

  if (!checkBtn) {
    console.error("❌ checkBtn not found");
    return;
  }

  checkBtn.addEventListener("click", async () => {
    resultDiv.innerText = "🔍 Reading review...";
    resultDiv.className = "loading";

    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        const review = document.querySelector('[data-hook="review-body"]');
        return review ? review.innerText : null;
      }
    }, (res) => {
      let reviewText = res?.[0]?.result;

      if (!reviewText) {
        resultDiv.innerText = "⚠️ No review detected on page.";
        return;
      }

      scannedCount++;

      const suspiciousWords = ["miracle", "best ever", "buy now", "100% genuine"];
      let isFake = suspiciousWords.some(w =>
        reviewText.toLowerCase().includes(w)
      );

      if (isFake) fakeCount++;

      const aiGenerated = reviewText.length > 150 && !reviewText.includes("I");
      if (aiGenerated) aiCount++;

      resultDiv.className = isFake ? "danger" : "safe";
      resultDiv.innerText =
        (isFake ? "🚨 SUSPICIOUS REVIEW\n\n" : "✅ TRUSTED REVIEW\n\n") +
        "AI Generated: " + (aiGenerated ? "Possible" : "No");

      document.getElementById("dashboard").innerText =
        "Reviews scanned: " + scannedCount +
        "\nFake detected: " + fakeCount +
        "\nAI-generated detected: " + aiCount;
    });
  });

});
