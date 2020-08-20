# Using Google Cloud Function to communicate with GunDB

An example of using Google Cloud Function to communicate with GunDB.

# How it works and what's the trick

Google Cloud Function doesn't allow creating new files/folders in runtime. Gun automatically creates ./radata which makes Google Cloud Function stop deploying. The trick is that to create an empty file called 'radata' and in Gun() function we must set radisk and localStorage to false.
