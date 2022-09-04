## When to use server-side rendering

    An application has a very simple UI with fewer pages/features
    An application has less dynamic data
    Read preference of the site is more than write
    The focus is not on rich sites and has few users

## When to use client-side rendering

    An application has a very complex UI with many pages/features
    An application has large and dynamic data
    Write preference of the site is more than reading
    The focus is on rich sites and a huge number of users


REF => https://dev.to/codewithtee/server-side-rendering-ssr-vs-client-side-rendering-csr-3m24


##                   API vs SSR

- API - JSON                    - SSR - Template
- Send Data                     - Send Template
- res.JSON()                    - res.render
