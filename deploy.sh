echo "Switching to branch develop"

git checkout develop

echo "Building app..."

npm run build

echo "Deploying to server"
scp -r build/* root@194.164.164.192:/var/www/194.164.164.192/

echo "Done"
