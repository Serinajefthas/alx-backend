#!/usr/bin/env node
// script that connects redis server and prints msgs to console
import redis from 'redis';
import { promisify } from 'util';

const client = redis.createClient();
// promisify the get method of Redis client
const getAsync = promisify(client.get).bind(client);

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

async function displaySchoolValue(schoolName) {
// displays school name using async/await 
  try {
    const value = await getAsync(schoolName);
    console.log(`Value for ${schoolName}: ${value}`);
  } catch (error) {
      console.error(`Error retrieving value for ${schoolName}: ${error}`);
  }
}

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
