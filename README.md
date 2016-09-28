# hackathon-video

## Download

    git clone git@github.com:esanmiguelc/hackathon-video.git

## Installation

Make sure you have [npm](https://docs.npmjs.com/getting-started/installing-node) installed

Run the following commands:


    npm install
    npm install jspm -g
    npm install http-server -g
    jspm install


## Running the mock server

    $ gem install bundler
    $ bundle install
    $ ruby mock_server.rb

## Running

    $ http-server

Visit [http://localhost:8080](http://localhost:8080)

## Compiling

    jspm bundle lib/main --inject

### Compiling to a single file for distribution

    jspm bundle-sfx lib/main.js <outfile>


