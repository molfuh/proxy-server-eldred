const express = require('express');
const axios = require('axios');
const { customerReviewsPort: PORT, customerReviewsHost } = require('../env');

const MODULE_URL = `${customerReviewsHost}`;
const router = express.Router();

router.get('/customerReviewsBundle', (req, res) => {
  axios.get(`${MODULE_URL}/main.js`)
    .then((response) => {
      res.send(response.data);
    })
    .catch(() => {
      res.send('Code failed.');
    });
});

router.get('/api/:id/reviews', (req, res) => {
  const { id } = req.params;
  const { sortBy, rating } = req.query;
  axios.get(`${MODULE_URL}/api/${id}/reviews/`, {
    params: {
      sortBy,
      rating,
    }
  })
    .then((response) => {
      res.send(response.data);
    })
    .catch(() => {
      res.send('Code failed.');
    });
});

router.get('/api/:id/reviewAverages', (req, res) => {
  const { id } = req.params;

  axios.get(`${MODULE_URL}/api/${id}/reviewAverages`)
    .then((response) => {
      res.send(response.data);
    })
    .catch(() => {
      res.send('Code failed.');
    });
});

router.get('/api/:id/photoReviews', (req, res) => {
  const { id } = req.params;

  axios.get(`${MODULE_URL}/api/${id}/photoReviews`)
    .then((response) => {
      res.send(response.data);
    })
    .catch(() => {
      res.send('Code failed')
    });
});

router.get('/api/:id/:review', (req, res) => {
  const { id, reviewId } = req.params;

  axios.get(`${MODULE_URL}/api/${id}/${reviewId}`)
    .then((response) => {
      res.send(response.data);
    })
    .catch(() => {
      res.send('Code failed');
    });
});

module.exports = router;
