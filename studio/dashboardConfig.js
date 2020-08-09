export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5f2f7e497f23730277a08474',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-xmijuwux',
                  apiId: '56bf28a1-708a-422f-b82b-9412d5776c11'
                },
                {
                  buildHookId: '5f2f7e49f5cc1fe1fcffda0b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-94c141bu',
                  apiId: '7af53016-d905-4a79-a0a5-b78b4585357e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/romaznova/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-94c141bu.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
