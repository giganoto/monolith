from utils.registry import create_service_registry


INDEX_PATH = "/"
REGISTER_PATH = "/register"
ANALYTICS_PATH = "/analytics"


ALLOWED_PATHS = [
    INDEX_PATH, # Main test API
    REGISTER_PATH, # To register instance
    ANALYTICS_PATH, # Analytics of registry and health
]


class LoadBalancer:
    pass # ToDo


if __name__ == "__main__":
    create_service_registry()
