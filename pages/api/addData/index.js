import mysql from 'mysql2';

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: 4000,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: {
      minVersion: 'TLSv1.2',
      rejectUnauthorized: true
    },
    connectAttributes: {
      program_name: 'pingcap/serverless-test'
    }
  });

  connection.connect(function (err) {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to connect to the database.' });
    }

    const { event_date_time, city, state_provinces, shape, duration, summary, posted } = req.body;

    connection.query(
      'INSERT INTO UAP_Sightings (event_date_time, city, state_provinces, shape, duration, summary, posted) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [event_date_time, city, state_provinces, shape, duration, summary, posted],
      function (err, result) {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: 'Failed to add data to the database.' });
        }

        connection.end();
        return res.status(200).json({ success: true });
      }
    );
  });
}
