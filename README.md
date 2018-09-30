# watering
This code should be able to water my plants

# Find Network Devices
arp -a

# Connect to PI from remote (on local network)
ssh -R 52698:127.0.0.1:52698 pi@192.168.2.139

# SSH (p Ootes1992)
ssh pi@192.168.2.139

# Cd
cd Projects/watering 

# Editing 
rmate readsensor.js

# Manual
https://www.hackster.io/ben-eagan/raspberry-pi-automated-plant-watering-with-website-8af2dc

# GPIO
https://www.raspberrypi.org/documentation/usage/gpio/

# Create PM2 process 
pm2 start readsensor.js

# Video about valve and diodes
https://www.youtube.com/watch?v=ioSYlxHlYdI

# Avoid algae
https://royalbrinkman.nl/kennisbank-gewasbescherming/voorkomen-bestrijden-algen-in-bassin