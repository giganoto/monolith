import json
import os


if __name__ == "__main__":
    fpath = os.path.join(os.path.dirname(__file__), "config.json")
    if not os.path.exists(fpath):
        raise ValueError("config.json doesn't exist!")
    with open(fpath) as fp:
        details = json.loads(fp.read())
        required_keys = set(["url", "name", "email", "phone", "twitter"])
        config_keys = set(details.keys())

        if required_keys & config_keys != required_keys:
            print("Missing key - Required keys are:")
            print("\n".join([f" - {key}" for key in required_keys]))
            raise ValueError("Missing key in config.json")

    print("All tests were successful!")
