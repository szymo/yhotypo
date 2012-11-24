load 'deploy' if respond_to?(:namespace) # cap2 differentiator

set :application, "yhotypo"
set :deploy_to, "/var/www/szymon/yhotypo.com-test"
set :deploy_via, :copy
set :repository, "build" 
set :scm, :none 
set :copy_compression, :gzip
set :use_sudo, false
set :domain, 'yhotypo.com'
set :user, 'szymon'

role :web, 'yhotypo.com'

before 'deploy:update_code' do
  run_locally 'rm -rf build/*'
  run_locally 'middleman build'
end
