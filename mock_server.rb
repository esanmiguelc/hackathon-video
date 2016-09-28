require 'sinatra'
require 'json'

get '/endpoint' do
  headers 'Access-Control-Allow-Origin' => '*'
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
