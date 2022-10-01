import os
import sqlite3 as lite

from const import REGISTRY_DB


REGISTRY_TABLE_NAME = "registry"
TWITTER_COLUMN_NAME = "twitter"
SERVER_COLUMN_NAME = "server"

FETCH_ONE, FETCH_ALL = "FETCH_ONE", "FETCH_ALL"


class LiteContext():
    def __init__(self, db=REGISTRY_DB):
        self.db = db

    def __enter__(self):
        self.conn = lite.connect(self.db)
        return self.conn.cursor()

    def __exit__(self, _type, _value, _traceback):
        self.conn.commit()
        self.conn.close()


def _execute(query, fetch=None):
    with LiteContext() as curr:
        curr.execute(query)
        if fetch == FETCH_ONE:
            return curr.fetchone()
        elif fetch == FETCH_ALL:
            return curr.fetchall()


def create_service_registry():
    query = f"""
        CREATE TABLE IF NOT EXISTS {REGISTRY_TABLE_NAME} (
            {TWITTER_COLUMN_NAME} VARCHAR NOT NULL,
            {SERVER_COLUMN_NAME} VARCHAR NOT NULL,
            PRIMARY KEY (twitter)
        )
    """
    _execute(query)


def get_server_links_from_registry(twitter):
    query = f"""
        SELECT {SERVER_COLUMN_NAME} from {REGISTRY_TABLE_NAME}
        WHERE {TWITTER_COLUMN_NAME} = '{twitter}'
        LIMIT 1
    """
    return _execute(query, fetch=FETCH_ONE)


def is_safe_to_add(twitter, server):
    return True # To Do


def add_to_service_registry(twitter, server):
    if not is_safe_to_add(twitter, server):
        return # Safety check!

    if get_server_links_from_registry(twitter):
        query = f"""
            UPDATE {REGISTRY_TABLE_NAME}
            SET {SERVER_COLUMN_NAME} = '{server}'
            WHERE {TWITTER_COLUMN_NAME} = '{twitter}'
        """
    else:
        query = f"""
            INSERT INTO {REGISTRY_TABLE_NAME}
            ({TWITTER_COLUMN_NAME}, {SERVER_COLUMN_NAME})
            VALUES ('{twitter}', '{server}')
        """ 
    _execute(query)


def health_check(server):
    pass


def get_healthy_servers():
    pass
