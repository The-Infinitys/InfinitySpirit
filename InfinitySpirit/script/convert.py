import os
import sys
import markdown
import json
from script import search, loadsetting

template_html = ""
replace_pos = {}


def find_elem(tag, key) -> None:
    if "<" + tag + ">" in template_html and "</" + tag + ">" in template_html:
        print(
            "InfinitySpirit.markdownconverter log: succeeded to load location of",
            key,
        )
        replace_pos[key] = template_html[
            template_html.find("<" + tag + ">") : template_html.find("</" + tag + ">")
            + len("</" + tag + ">")
        ]
    else:
        print(
            "InfinitySpirit.markdownconverter error: failed to load location of",
            key,
        )
        sys.exit(1)


with open("./InfinitySpirit/template/index.html") as f:
    template_html = f.read()
    find_elem("InfinitySpiritContent", "content")


def mdc(markdown_text):
    extensions = [
        "extra",
        "admonition",
        "codehilite",
        "legacy_attrs",
        "legacy_em",
        "nl2br",
        "sane_lists",
        "toc",
        "wikilinks",
        "meta",
        "smarty",
    ]
    configs = {
        "codehilite": {
            "noclasses": True,
            "pygments_style": "monokai",
        }
    }
    global markdown_title
    markdown_result = ""
    convert_mode = {"~~": False}
    for markdown_line in markdown_text.split("\n"):
        # ~~を変換する機能がないので自分で実装する
        while "~~" in markdown_line:
            if convert_mode["~~"]:
                markdown_line = markdown_line.replace("~~", "</s>", 1)
            else:
                markdown_line = markdown_line.replace("~~", "<s>", 1)
            convert_mode["~~"] = not convert_mode["~~"]
        markdown_result += markdown_line + "\n"
    return markdown.markdown(
        markdown_result, extensions=extensions, extension_configs=configs
    )


def indent_html(html, indent_level) -> str:
    result = ""
    for line in html.split("\n"):
        result += " " * indent_level + line + "\n"
    return result


def convert(file) -> None:
    markdown_path = file
    indent = loadsetting.load()["converter"]["indent-level"]
    with open(markdown_path) as f:
        base_html = mdc(f.read())
    export_html = template_html
    base_html = (
        indent_html(base_html, indent)
        + "\n"
        + indent * " "
        + "</InfinitySpiritContent>"
    )
    export_html = export_html.replace(
        replace_pos["content"], "<InfinitySpiritContent>\n" + base_html
    )
    with open(file[:-3] + ".html", mode="w") as index_html:
        index_html.write(export_html)
