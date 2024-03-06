#!/usr/bin/env node
// Create a queue with Kue
const kue = require('kue');
const queue = kue.createQueue();

const jobData = {
  phoneNumber: '1234567890',
  message: 'Hello, this is a notification'
};

const job = queue.create('push_notification_code', jobData);

job.on('enqueue', function(id, type){
  console.log(`Notification job created: ${id}`);
});

job.on('complete', function(){
  console.log('Notification job completed');
});

job.on('failed', function(){
  console.log('Notification job failed');
});

job.save();
