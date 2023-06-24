import './marketnews.css'; 


function MarketNews() {
  const tableData = [
    { time: '09:00', currency: 'USD', impact: 'Low', event: 'Event 1', date: '2023-06-24' },
    { time: '12:30', currency: 'EUR', impact: 'Medium', event: 'Event 2', date: '2023-06-25' },
    { time: '15:00', currency: 'GBP', impact: 'High', event: 'Event 3', date: '2023-06-26' },
  ];

  const newsList = [
    { sentence: 'News 1', date: '2023-06-24' },
    { sentence: 'News 2', date: '2023-06-25' },
    { sentence: 'News 3', date: '2023-06-26' },
  ];

  return (
    <div className="containerNews">
      <div className="table-containerNews">
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Currency</th>
              <th>Impact</th>
              <th>Event</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td>{row.time}</td>
                <td>{row.currency}</td>
                <td>{row.impact}</td>
                <td>{row.event}</td>
                <td>{row.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="news-container">
        <h2>Market News</h2>
        <hr />

        {newsList.map((news, index) => (
          <div key={index} className="news-section">
            <p>{news.sentence}</p>
            <p className="news-date">{news.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketNews;
