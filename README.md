# translation-loader
Webpack loader for flattening nested translation files, imports JSON and exports JSON

```before.json
{
    "app": {
        "links": {
            "home": "Back to homepage"
        },
        "user": "Current user"        
    }
}

after.json
{
    "app.links.home": "Back to homepage",
    "app.user": "Current user"
}```
