import json


def load() -> dict:
    setting = {}
    with open("./InfinitySpirit/setting/setting.json") as f:
        setting = json.loads(f.read())
    return setting
