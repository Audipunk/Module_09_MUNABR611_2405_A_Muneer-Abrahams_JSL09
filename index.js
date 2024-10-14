try {
    const res = await fetch(
      "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=cyberpunk"
    );
    const data = await res.json();
    document.body.style.backgroundImage = `url(${data.urls.regular})`;
    document.getElementById("author").textContent = `By: ${data.user.name}`;
  } catch (err) {
    document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1628329336337-8c33a8f08ec1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTc1MDQzODZ8&ixlib=rb-4.0.3&q=80&w=1080)
  )`;
    document.getElementById("author").textContent = `By: Lorenzo Herrera`;
  }
  
  try {
    const res = await fetch("https://api.coingecko.com/api/v3/coins/pepecoin-2");
    if (!res.ok) {
      throw Error("Something went wrong");
    }
    const data = await res.json();
    document.getElementById("crypto-top").innerHTML = `
          <img src=${data.image.small} />
          <span>${data.name}</span>
      `;
    document.getElementById("crypto").innerHTML += `
              <p>🏷️: R ${data.market_data.current_price.zar}</p>
              <p>📈: R ${data.market_data.high_24h.zar}</p>
              <p>📉: R ${data.market_data.low_24h.zar}</p>
      `;
  } catch (err) {
    console.error(err);
  }