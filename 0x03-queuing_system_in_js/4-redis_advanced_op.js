#!/usr/bin/env node
// script that connects redis server and prints msgs to console
import redis from 'redis';

const client = redis.createClient();

client.on('connect', () => {
  console.log('Redis client connected to the server');
});
client.on('error', (error) => {
  console.log(`Redis client not connected to the server: ${error.message}`);
});

//create hash w key-value pairs
function createHash() {
  client.hset('HolbertonSchools', 'Portland', 50, redis.print);
  client.hset('HolbertonSchools', 'Seattle', 80, redis.print);
  client.hset('HolbertonSchools', 'New York', 20, redis.print);
  client.hset('HolbertonSchools', 'Bogota', 20, redis.print);
  client.hset('HolbertonSchools', 'Cali', 40, redis.print);
  client.hset('HolbertonSchools', 'Paris', 2, redis.print);
}

//function displays Redis hash
function displayHash() {
  client.hgetall('HolbertonSchools', (error, result) => {
    if (error)
      console.error(`Error retrieving hash from Redis: ${error}`);
    else
      console.log(result);
  });
}

createHash();
displayHash();
