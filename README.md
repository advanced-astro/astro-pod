# Astropod | Free and Open Source Serverless Podcast

![Astropod](https://github.com/manuelernestog/manuelernestog/assets/53962116/3106bf65-37f9-427f-9b50-72d7ae22752f)

_Astropod_ is a free and open-source self-hosting serverless podcast solution.
It supports diverse deployment services and audio hosting options and includes a customizable website deployable in a few clicks, with a personalized domain and a user-friendly CMS for effortless podcast management.

---

## Demo and Tutorial

View a live demo and a tutorial step by step of how deploy and configure your podcast with Astropod.

👉️ <https://getastropod.vercel.app>

---

## Quick deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)][deploy]
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fadvanced-astro%2Fastropod&demo-url=https%3A%2F%2Fdemo.podcast.wf&skippable-integrations=1)

- Click the Deploy button to copy this project to your own _GitHub_ or _GitLab_ account and deploy your podcast with _Netlify_ in minutes. ✨

- Once you’ve got the project set up, you do need to
[activate Netlify Identity in the Netlify UI][identity], the
[“Git Gateway”][gateway] to allow e-mail/password authentication and you are ready to go.

---

## Deployment Services

_Astropod_ is build in the top of [Astro](https://astro.build/) framework and is ready to be deployed in the deployments services like _GitHub Pages_, _Netlify_, _Vercel_, _Cloudflare_, _AWS_ and much more.

The configuration for the deployment varies depending on the platform where you are going to do it. See the [official Astro information](https://docs.astro.build/en/guides/deploy/) to deploy your website.

## File storage

_Astropod_ is designed to work with any file storage solution.

You can host your podcast files in your own code base inside the folder `public/audio` and this will automatically work with [git LFS](https://git-lfs.com/) but free plans in _GitHub_ and _GitLab_ for LFS are limited so take that in mind.
Create a file `public/audio/.gitattributes` with the following content to use this option.

```txt
*.aac filter=lfs diff=lfs merge=lfs -text
*.m4a filter=lfs diff=lfs merge=lfs -text
*.mp3 filter=lfs diff=lfs merge=lfs -text
*.ogg filter=lfs diff=lfs merge=lfs -text
*.opus filter=lfs diff=lfs merge=lfs -text
*.wav filter=lfs diff=lfs merge=lfs -text
```

You can also host your podcast files in any other cloud storage solution like _DropBox_, _Google Drive_, _Cloudinary_ or on your own server. Once you upload your audio file you just need to copy the public URL of the audio file into your episode `AudioUrl` field.

For free unlimited cloud file storage we recommend use [Internet Archive](https://archive.org/).

## Content Management System

_Astropod_ is designed in such a way that you can use it directly from the source code by editing the configuration files found in the `/.astropod` folder and modifying the episode markdown files contained in the folder `/src/content/episode`.

In order to manage podcast in a simpler way, _Astropod_ is configured by default with the CMS Serverless [Decap](https://decapcms.org/) which allows collaborative work, authentication with email or other providers and simple management.

For the easiest use of _Decap_ we recommend deploying _Astropod_ on Netlify since the authentication system is integrated into the platform and is configured natively. If you would like to facilitate your own OAuth authentication rather than use Netlify's service or a client side flow like implicit or PKCE, you can use one of this [community-maintained projects](https://decapcms.org/docs/external-oauth-clients/).

The fact that _Astropod_ comes configured by default with _Decap_ does not mean that it is the only CMS with which it can work, if you prefer to use another CMS like _Sanity_, _WordPress_, _Strapi_, _Tina_, or any other you can follow [Astro's integration guides](https://docs.astro.build/en/guides/cms/) to your integrate your favorite CMS.

## Tech Stack

- [Astro](https://astro.build)
- [Tailwind](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)

## Requirements

- Node 18.17.1 or higher

## Commands

All commands are run from the root of the project, from a terminal:

| Command        | Action                                             |
| :------------- | :------------------------------------------------- |
| `pnpm i`       | Installs dependencies                              |
| `pnpm dev`     | Starts local dev & Netlify CMS proxy servers       |
| `pnpm build`   | Build your production site to `./dist/`            |
| `pnpm preview` | Serve `./dist/` & run the Netlify CMS proxy server |

> These commands are using [`pnpm`][pnpm], but you can choose to use `npm` or `yarn` instead if you prefer.

## Project Structure

```txt
├──📂src
│   ├──📁components        // UI components
│   ├──📂content
│   │   └──🗂️episode       // Podcast episodes folder
│   ├──📁layouts           // UI Layouts
│   ├──📁helpers           // App helpers like static data or functions
│   └──📂pages
│       └──📃rss.xml.js    // Feed RSS generation file
├──📁.astropod             // Astropod config files folder
├──📄astro.config.mjs      // Astro config
└──📄decap.config.mjs      // Decap config
```

## Contributing

Suggestions and pull requests are welcomed! Feel free to open a discussion or an issue for a new feature request or bug.

One of the best ways of contribute is to grab a [bug report or feature suggestion](https://github.com/advanced-astro/astropod/issues) that has been marked `accepted` and dig in.

Please be wary of working on issues _not_ marked as `accepted`. Just because someone has created an issue doesn't mean we'll accept a pull request for it.

## License

_Astropod_ is licensed under the MIT license — see the [LICENSE](https://github.com/advanced-astro/astropod/blob/main/LICENSE) file for details.

## Contributors

[![Contributors](https://contrib.rocks/image?repo=advanced-astro/astropod)](https://github.com/advanced-astro/astropod/graphs/contributors)

Made with [contrib.rocks](https://contrib.rocks).

[deploy]: https://app.netlify.com/start/deploy?repository=https://github.com/advanced-astro/astropod
[identity]: https://docs.netlify.com/visitor-access/identity/
[gateway]: https://docs.netlify.com/visitor-access/git-gateway/
[pnpm]: https://pnpm.io/
