# How to use
## Easy step to start
first, please clone this repository's files.

```
git clone https://github.com/The-Infinitys/InfinitySpirit
```

then, go to the directory that cloned repository.

```
cd InfinitySpirit
```

next, please make markdown files.

Finally, move repository root dir and run InfinitySpirit

```
python InfinitySpirit
```

All markdown files will be converted by InfinitySpirit.

## settings

You can change InfinitySpirit's function by [setting.json](InfinitySpirit/setting/setting.json)
default json

```json
{
  "template":"default",
  "indent-level": 10,
  "ignore": ["./README.md", "./change-log.md", "./document.md"]
}

```

### template
you can select templates from
[InfinitySpirit/layout/](./InfinitySpirit/layout/)
also, you can make own templates.

### indent level
indent level is set how many spaces will be inserted to html
when markdown converted.

### ignore
you can select which markdown file won't be converted with relative path.

# copyright
The Infinity's
