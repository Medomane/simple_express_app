const request = require('supertest');
const express = require('express');

const app = express();
app.get('/health', (req, res) => {
    res.json({ status: 'UP', message: 'Server is running!' });
});

test('GET /health should return server status', async () => {
    const response = await request(app).get('/health');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ status: 'UP', message: 'Server is running!' });
});
