# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Deploying to a shared host

The GitHub Actions workflow in `.github/workflows/deploy_to_shared_host.yml` builds the app and deploys the contents of `dist/` to the shared host whenever changes are pushed to `main`. You can also start a deployment manually from the Actions tab.

Add these repository secrets under **Settings > Secrets and variables > Actions**:

- `FTP_SERVER`: the FTP server hostname
- `FTP_USERNAME`: the FTP account username
- `FTP_PASSWORD`: the FTP account password
- `FTP_SERVER_DIR`: the destination directory on the server, including its trailing slash (for example, `public_html/`)

Optionally, add the repository variable `FTP_PROTOCOL` with the value `ftps` if your host supports explicit FTPS. It defaults to `ftp`.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
