echo "Building app..."
npm run build   

echo "Deploy files to server..."
scp -r ./build/* root@203.171.25.107:/var/www/booktrieutran/html/

echo "Done!"
