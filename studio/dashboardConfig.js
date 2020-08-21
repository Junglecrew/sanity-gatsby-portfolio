export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f3fafbeec5696cce10f7642',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-f1zbmajs',
                  apiId: '8d5a8a2e-5b86-4a3e-88c8-359db5b07c34'
                },
                {
                  buildHookId: '5f3fafbf3848e724dd7fedc0',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-fa12jyth',
                  apiId: '6276c350-ef6f-435a-baab-cc3c0d15a797'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Junglecrew/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-fa12jyth.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
