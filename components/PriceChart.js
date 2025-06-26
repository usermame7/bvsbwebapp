import { useEffect, useRef } from "react";

export default function PriceChart() {
  const chartContainerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    script.onload = () => {
      new window.TradingView.widget({
        autosize: true,
        symbol: "BINANCE:ETHUSDT",
        interval: "1",
        timezone: "Etc/UTC",
        theme: "dark",
        style: "1",
        locale: "en",
        toolbar_bg: "#f1f3f6",
        enable_publishing: false,
        allow_symbol_change: true,
        container_id: "tradingview_chart"
      });
    };
    chartContainerRef.current.appendChild(script);
  }, []);

  return <div id="tradingview_chart" style={{ height: "400px" }} ref={chartContainerRef}></div>;
}