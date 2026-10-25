# LeafCloud adaptation

- Upstream: https://github.com/markhorn-dev/astro-sphere
- Author: Mark Horn
- Licence: MIT (upstream `LICENSE` retained unchanged)
- Pinned upstream commit: f7e3a40f20e1267d7fbbb7b6dd868df1845e1d82
- Preview: https://tpl-sphere.leafcloud.app

Adaptation: replaced personal demo contact/profile values with fictional Asha Rao placeholders, set Astro's canonical site URL to the preview, and added LeafCloud setup guidance. The original visual design is retained.

pnpm 11.11.0 compatibility: pinned `packageManager`, regenerated `pnpm-lock.yaml`, pinned the Astro 4 compatible sitemap integration to 3.3.0, set `minimumReleaseAge: 0`, and approved the `esbuild` and `sharp` install scripts in `pnpm-workspace.yaml`. The Leaf build command now uses pnpm. Repaired the pre-existing mismatched closing tags in the home page contact section and set Asha Rao as the visible site title.

Removed upstream Vercel and Netlify deploy badges (_deploy_netlify.svg and _deploy_vercel.svg); the new setup guide uses LeafCloud.
