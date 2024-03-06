#!/usr/bin/env node
// Create a queue with Kue
const kue = require('kue');
const queue = kue.createQueue();

function sendNotification(phoneNumber, message) {
  console.log(`Sending notification to ${phoneNumber}, with message: ${message}`);
}

queue.process('push_notification_code', (job, done) => {
  const { phoneNumber, message } = job.data;
  sendNotification(phoneNumber, message);
  done();
});

//log when queue is ready
queue.on('ready', () => {
  console.log('Job processor queue is ready');
});

//log if there's an error with the queue
queue.on('error', (err) => {
  console.log('Error with job processor queue:', err);
});
