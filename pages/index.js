
import { useEffect, useRef } from 'react';
import { createChart } from 'lightweight-charts';
import '../styles/globals.css';

export default function Home() {
  const chartRef = useRef();

  useEffect(() => {
    const chart = createChart(chartRef.current, {
      width: 600,
      height: 300,
      layout: {
        background: { color: '#000' },
        textColor: '#fff',
      },
      grid: {
        vertLines: { color: '#444' },
        horzLines: { color: '#444' },
      },
    });
    const candleSeries = chart.addCandlestickSeries();
    candleSeries.setData([
      { time: 1640000000, open: 100, high: 110, low: 90, close: 105 },
      { time: 1640000600, open: 105, high: 115, low: 95, close: 110 },
      { time: 1640001200, open: 110, high: 120, low: 100, close: 115 },
    ]);
  }, []);

  return (
    <div className="container">
      <header className="header">🐂 BearsVSBulls Bot</header>

      <section className="top-bar">[Top Section: logo, energy, players]</section>
      <section className="pool-stats">[Live Pool Stats]</section>
      <section className="timer">[Countdown Timer]</section>
      <section className="chart" ref={chartRef}></section>
      <section className="trade-controls">[Green/Red buttons, bet buttons, timeframe]</section>
      <footer className="footer">Potential payout: 19.0 USDT</footer>
    </div>
  );
}
