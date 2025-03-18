# Change to the directory where the script is located
cd "$(dirname "$0")"

pwd

cd './docs' || exit

mdbook serve