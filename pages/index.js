import { useEffect, useRef } from 'react';
import { createChart } from 'lightweight-charts';

export default function Home() {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = createChart(chartRef.current, {
      width: 360,
      height: 240,
      layout: { background: { color: '#000' }, textColor: '#fff' },
      grid: { vertLines: { color: '#444' }, horzLines: { color: '#444' } }
    });
    const candleSeries = chart.addCandlestickSeries();
    candleSeries.setData([
      { time: 1640000000, open: 100, high: 110, low: 90, close: 105 },
      { time: 1640000600, open: 105, high: 115, low: 95, close: 110 },
      { time: 1640001200, open: 110, high: 120, low: 100, close: 115 }
    ]);
  }, []);

  return (
    <div className="container">
      <header className="header">🐂 BearsVSBulls Bot</header>
      <div ref={chartRef} className="chart" />
      <footer className="footer">Potential payout: 19.0 USDT</footer>
    </div>
  );
}