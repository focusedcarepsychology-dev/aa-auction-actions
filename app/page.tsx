const deals = [
  { item: 'Droitwich microscopes', source: 'Droitwich Auctions', bid: '£10', hardMax: '£30', status: 'Bidding', edge: '3 antique microscopes; low downside' },
  { item: 'Spicer’s lens boxes', source: 'Spicer’s', bid: '£55', hardMax: '£85', status: 'Bidding', edge: 'Canon L + Sigma Macro + hidden Nikkor 24/2.8' },
  { item: 'Canon 5D II + 24–105L', source: 'Spicer’s', bid: '£110', hardMax: '£150', status: 'Bidding', edge: 'L-series lens provides value floor' },
];

export default function Home() {
  return (
    <main>
      <header className="hero">
        <div>
          <p className="eyebrow">PARADOXICAPPLAY · OPERATING ENTITY</p>
          <h1>AA Auction Actions</h1>
          <p className="sub">Find → Identify → Value → Approve → Buy → Sell → Direct Ship → Reinvest</p>
        </div>
        <div className="status"><span className="dot" /> Acquisition watch active</div>
      </header>

      <section className="metrics">
        <article><span>Purchase ceiling</span><strong>€500</strong></article>
        <article><span>Preferred ROI</span><strong>100%+</strong></article>
        <article><span>Preferred profit</span><strong>€300+</strong></article>
        <article><span>Purchase control</span><strong>Human approval</strong></article>
      </section>

      <section className="panel">
        <div className="panelHead"><div><p className="eyebrow">LIVE BOOK</p><h2>Current acquisition positions</h2></div><span className="pill">Hard-max discipline</span></div>
        <div className="tableWrap">
          <table>
            <thead><tr><th>Item</th><th>Source</th><th>Current</th><th>Hard max</th><th>Status</th><th>Value edge</th></tr></thead>
            <tbody>{deals.map((d) => <tr key={d.item}><td><strong>{d.item}</strong></td><td>{d.source}</td><td>{d.bid}</td><td>{d.hardMax}</td><td><span className="pill soft">{d.status}</span></td><td>{d.edge}</td></tr>)}</tbody>
          </table>
        </div>
      </section>

      <section className="grid">
        <article className="panel"><p className="eyebrow">ACQUISITION</p><h2>Deal gate</h2><ol><li>Actual listing verified live</li><li>Photo-led identification</li><li>Floor + base valuations</li><li>Fully landed cost calculated</li><li>Target and hard-max generated</li><li>Human approval before purchase</li></ol></article>
        <article className="panel"><p className="eyebrow">EXIT</p><h2>Route after a win</h2><ol><li>Detect invoice / win email</li><li>Confirm exact item and condition</li><li>Compare dealer, specialist and retail exits</li><li>Generate listing / buyer approach</li><li>Ship direct from auctioneer where practical</li><li>Record realised profit and holding time</li></ol></article>
      </section>

      <section className="panel warning"><p className="eyebrow">CONTROL</p><h2>No autonomous spending yet</h2><p>The engine can discover, identify, value, rank and prepare post-win actions. Purchases remain approval-gated until an official platform integration and explicit account permissions support automation safely.</p></section>
    </main>
  );
}
