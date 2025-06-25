exports.handler = async (event) => {
  console.log("=== Full Request ===");
  console.log("HTTP Method:", event.httpMethod);
  console.log("Path:", event.path);
  console.log("Headers:", event.headers);
  console.log("Query Params:", event.queryStringParameters);
  console.log("Body:", event.body);

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>Documentation Portal | Productivity Insights</title>
      <meta name="description" content="Official documentation for productivity principles, APIs, and tools to boost efficiency and performance." />
      <meta name="keywords" content="productivity, documentation, principles, APIs, guides, focus, time management" />
      <meta name="robots" content="index, follow" />
      <style>
        body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; color: #333; background-color: #f9f9f9; }
        h1, h2, h3 { color: #2c3e50; }
        header { text-align: center; margin-bottom: 40px; }
        section { margin-bottom: 30px; }
        footer { text-align: center; margin-top: 60px; font-size: 0.9em; color: #777; }
      </style>
    </head>
    <body>
      <header>
        <h1>📚 Productivity Insights – Documentation</h1>
        <p>Your guide to mastering focus, planning, and execution</p>
      </header>

      <section>
        <h2>🚀 Overview</h2>
        <p>This documentation section provides a comprehensive overview of the productivity principles designed to help individuals and teams optimize their time, focus, and performance. Learn how to structure your day, eliminate distractions, and apply effective frameworks for maximum output.</p>
      </section>

      <section>
        <h2>📖 Core Principles</h2>
        <ul>
          <li><strong>Set a Daily Main Goal:</strong> Start with one key focus for the day.</li>
          <li><strong>Break Down Large Tasks:</strong> Divide projects into smaller actions.</li>
          <li><strong>Work in Short Sessions:</strong> Use Pomodoro (25+5) for high efficiency.</li>
          <li><strong>Minimize Distractions:</strong> Turn off non-essential notifications.</li>
          <li><strong>Apply the 80/20 Rule:</strong> Focus on what truly matters.</li>
          <li><strong>Daily Review:</strong> Reflect and adjust for the next day.</li>
          <li><strong>Take Breaks:</strong> Stretch, walk, or drink water every hour.</li>
        </ul>
      </section>

      <section>
        <h2>🔌 API Access (Coming Soon)</h2>
        <p>Soon, you'll be able to access our data via RESTful APIs to integrate productivity metrics into your own apps and dashboards.</p>
      </section>

      <footer>
        &copy; 2025 Productivity Insights | Built for growth and focus.
      </footer>
    </body>
    </html>
  `;

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html",
    },
    body: html,
  };
};
