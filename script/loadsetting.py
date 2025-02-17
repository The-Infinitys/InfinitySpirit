import json


def load() -> dict:
    setting = {}
    with open("./setting/setting.json") as f:
        setting = json.loads(f.read())
    print("Loaded settings")
    print("-" * 40)
    print("repository name:", setting["git-repository"]["name"])
    print("repository year:", setting["git-repository"]["year"])
    if setting["custom-date"] == True:
        print("auto date detecter is enabled")
    elif setting["custom-date"] == "all":
        print("all dates will be converted")
    else:
        print("manual date detect")
        try:
            for date in setting["custom-date"]:
                print(date[0], "-", date[1])
        except IndexError:
            print(
                "InfinitySpirit Error: Invalid Custom Date Index",
                setting["custom-date"],
            )
            return {}
        except TypeError:
            print(
                "InfinitySpirit Error: Invalid Custom Date Type", setting["custom-date"]
            )
            return {}
    print("-" * 40)
    return setting
