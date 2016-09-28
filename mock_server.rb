require 'sinatra'
require 'json'
set :bind, '0.0.0.0'
set :port, 3000

get '/' do
  [
    {
      title: "First Video",
      description: "First Description",
      video_url: "http://something.com"
    }, {
      title: "Second Video",
      description: "Second Description",
      video_url: "http://something.com"
    }, {
      title: "Third Video",
      description: "Third Description",
      video_url: "http://something.com"
    }
  ].to_json
end
