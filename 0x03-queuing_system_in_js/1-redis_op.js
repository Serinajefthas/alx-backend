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

function setNewSchool(schoolName, value) {
//sets value to schoolname
  client.set(schoolName, value, redis.print);
}

function displaySchoolValue(schoolName) {
// displays school name  
  client.get(schoolName, (error, value) => {
    if (error)
      console.error(`Error retrieving value for ${schoolName}: ${error}`);
    else
      console.log(`Value for ${schoolName}: ${value}`);
  });
}

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
