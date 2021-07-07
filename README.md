# Getting Started with Create React App
This project is the back-end for the Rarecandy subgraph https://github.com/rob-lw/rarecandy-tracker deployed at the hosted service [The Graph - Rarecandy Subgraph](https://thegraph.com/explorer/subgraph/rob-lw/racecandy-tracker)

The front-end web interface is located at https://github.com/rob-lw/rarecandy-tracker-frontend

[Rarecandy](https://rarecandy.xyz/) is a virtual publishing house for scarce digital and physcial collectibles on Ethereum blockchain.

The back-end generates the following data subgraph [Image](https://github.com/rob-lw/rarecandy-tracker/blob/master/Rarecandy%20deployed%20subgraph.png):
1. Total Assets Minted to date
2. Total Assets Sold to date
3. Sales volume to date 
4. Highest bid to date 
5. IDs of assets solds so it can be crossed refrenced at [Rarecandy](https://rarecandy.xyz/) 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `graph deploy --node https://api.thegraph.com/deploy/ --ipfs https://api.thegraph.com/ipfs/ rob-lw/racecandy-tracker`

This deploys the subgraph to The Graph Hosted Service.

## Screenshots
![Screenshot from 2021-07-07 21-45-21](https://user-images.githubusercontent.com/80292168/124826383-b0c38e00-df6c-11eb-9119-b35184f43017.png) 

## [Front-end](https://github.com/rob-lw/rarecandy-tracker-frontend) Screenshots 
Front-end source code: https://github.com/rob-lw/rarecandy-tracker-frontend

Sales Volume & Highest Bid to date
![Sales volume   bid](https://user-images.githubusercontent.com/80292168/124825521-ab197880-df6b-11eb-8c2d-5f9f996b931a.png)

Total Assets Minted to date
![Screenshot from 2021-07-07 21-42-21](https://user-images.githubusercontent.com/80292168/124826067-5296ab00-df6c-11eb-993a-816256e16652.png)

Total Assets Sold and ID of Asset Sold to date
![Screenshot from 2021-07-07 21-42-41](https://user-images.githubusercontent.com/80292168/124826079-56c2c880-df6c-11eb-97c7-2900568903b4.png)

