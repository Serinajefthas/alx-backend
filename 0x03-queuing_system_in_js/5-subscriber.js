#!/usr/bin/env node
// script that connects redis server and prints msgs to console
import redis from 'redis';

const subscriber = redis.createClient();

subscriber.on('connect', () => {
  console.log('Redis client connected to the server');
  subscriber.subscribe('holberton school channel');
});
subscriber.on('error', (error) => {
  console.log(`Redis client not connected to the server: ${error}`);
});

//receiving a message
subscriber.on('message', (channel, message) => {
  console.log(`Message received from channel ${channel}: ${message}`);

  if (message == 'KILL_SERVER') {
    subscriber.unsubscribe();
    subscriber.quit();
  }
});
