import os
import sys
import datetime
from script import github, convert, loadsetting, search


def main() -> int:
    def copy_right() -> None:
        print("∞" * 41)
        print("∞Infinity Spirit - Static Site Generator∞")
        print("∞" * 9 + " made by The Infinity's" + "∞" * 9)
        print("∞" * 41)

    if not os.path.isfile("./InfinitySpirit/InfinitySpirit.infinity"):
        print("InfinitySpirit Error: Invalid Current Directory")
        return 1
    copy_right()
    for file in search.all_files("."):
        if file.endswith(".md"):
            convert.convert(file)
    github.renew()
    return 0


if __name__ == "__main__":
    sys.exit(main())
