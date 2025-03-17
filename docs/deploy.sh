# Change to the directory where the script is located
cd "$(dirname "$0")"

# reference: https://developers.cloudflare.com/pages/how-to/use-direct-upload-with-continuous-integration/
mdbook build

# project name: every project has a unique name
CLOUDFLARE_ACCOUNT_ID=006c12700dea41071e24c64f018d06ce npx wrangler pages deploy ./dist --project-name=zuo-er-tin-feng