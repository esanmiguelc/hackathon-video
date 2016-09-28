require 'sinatra'
require 'json'

get '/endpoint' do
  headers 'Access-Control-Allow-Origin' => '*'
  [
    {
      id: 1,
      title: "First Video",
      description: "First Description",
      video_url: "http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4"
    }, {
      id: 2,
      title: "Second Video",
      description: "Second Description",
      video_url: "http://something.com"
    }, {
      id: 3,
      title: "Third Video",
      description: "Third Description",
      video_url: "http://something.com"
    }
  ].to_json
end
