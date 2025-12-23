const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/status', (req, res) => {
  res.json({ status: 'Operational', system: 'Watchtower v1.0' });
});

const PORT = 3002;
app.listen(PORT, () => console.log(`Uplink active on port ${PORT}`));